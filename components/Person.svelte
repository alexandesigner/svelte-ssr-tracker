<div class="person">
  {#if person}
    <h1>Hello, {person.name}!</h1>
  {/if}
</div>

<script>
  export let person;
</script>
