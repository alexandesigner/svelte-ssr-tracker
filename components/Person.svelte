<div class="person">
  {#if person}
    <h1>Hello, {person.name}!</h1>
  {/if}
</div>

<script>
  import { Meteor } from 'meteor/meteor';
  import { Tracker } from 'meteor/tracker';
  import { onMount } from 'svelte';
  import Persons from '/lib/Persons.js';

  let person;

  onMount(() => {
    Meteor.subscribe('persons')
    const computation = Tracker.autorun(() => {
      person = Persons.findOne();
    });
	});

</script>
