<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  export let data;

  const API_URL = import.meta.env.VITE_API_URL;

  let { person } = data;

  onMount(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = API_URL + '/' + person.logo.url;
    document.head.appendChild(link);
  });
</script>

<Header {person} />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
</style>
