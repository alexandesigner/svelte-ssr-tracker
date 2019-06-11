<div class="message">
  {#if message}
    <span>{message.text}</span>
  {/if}
</div>

<script>
  export let message;
</script>

<style>
  span {
    font-size: 20px;
    color: #999;
  }
</style>
