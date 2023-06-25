<script>
  import 'reveal.js/dist/reveal.css';
  import 'reveal.js/dist/theme/black.css';
</script>

<div>
  <slot />
</div>

<style>
  div {
    height: 100vh;
  }
  :global(body) {
    /* padding: 0; */
  }
</style>
