import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import App from '/components/App.svelte';

import Persons from '/lib/Persons.js';
import Messages from '/lib/Messages.js';

onPageLoad((sink) => {
  const person = Persons.findOne();
  const message = Messages.findOne();

  const initialState = { person, message };
  const { html, css } = App.render(initialState);

  sink.appendToHead(`<style>${css.code}</style>`);
  sink.renderIntoElementById('main', html);

  sink.appendToBody(
    `<script>INITIAL_STATE = ${JSON.stringify(initialState)};</script>`
  );
});

Meteor.startup(() => {
  if (Persons.find().count() < 1) {
    Persons.insert({
      name: 'Meteor developer'
    });
  }
  if (Messages.find().count() < 1) {
    Messages.insert({
      text: 'Meteor ♥️ Svelte'
    });
  }
});

Meteor.publish('persons', function() {
  return Persons.find();
});

Meteor.publish('messages', function() {
  return Messages.find();
});
