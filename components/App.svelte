<div class="app">
  <h1>Server-Side Rendering Example</h1>
  <Message text="{message}" />
  <Persons />

</div>

<style>
  .app {
    padding-top: 100px;
    font: 16px serif;
    text-align: center;
  }

  h1 {
    color: indianred;
  }
</style>

<script>
  import Message from './Message.svelte';
  import Persons from './Person.svelte';
  
  let message = 'Meteor ♥️ Svelte';
</script>
