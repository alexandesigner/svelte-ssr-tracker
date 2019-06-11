import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import App from '/components/App.svelte';

import Persons from '/lib/Persons.js';
import Messages from '/lib/Messages.js';

onPageLoad((sink) => {
  const { html, css } = App.render();

  sink.appendToHead(`<style>${css.code}</style>`);
  sink.renderIntoElementById('main', html);
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
