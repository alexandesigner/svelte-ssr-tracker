<div class="app">
  <h1>Server-Side Rendering Example</h1>
  <Message message={message} />
  <Person person={person} />
</div>

<style>
  .app {
    padding-top: 100px;
    font: 16px sans-serif;
    text-align: center;
  }

  h1 {
    color: indianred;
  }
</style>

<script>
  import { Meteor } from 'meteor/meteor';
  import { Tracker } from 'meteor/tracker';
  import { onMount } from 'svelte';
  import Message from './Message.svelte';
  import Person from './Person.svelte';

  import Messages from '/lib/Messages.js';
  import Persons from '/lib/Persons.js';

  let person;
  let message;

  onMount(() => {
    Meteor.subscribe('messages')
    Meteor.subscribe('persons')
    const computation = Tracker.autorun(() => {
      person = Persons.findOne();
      message = Messages.findOne();
    });
	});

</script>
