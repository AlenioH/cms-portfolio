<script>
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  export let data;

  let { person } = data;
</script>

<Header {person} />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
</style>
