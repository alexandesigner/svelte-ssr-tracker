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

  export let person;
  export let message;

  onMount(() => {
    const messagesSub = Meteor.subscribe('messages');
    const personsSub = Meteor.subscribe('persons');

    const computation = Tracker.autorun(() => {
      if (messagesSub.ready() && personsSub.ready()) {
        person = Persons.findOne();
        message = Messages.findOne();
      }
    });
	});

</script>
