<script>
  import Icon from '@iconify/svelte';

  import { isMobile } from '../stores/isMobile';
  import SocialButtons from '../components/SocialButtons.svelte';
  import { slide } from 'svelte/transition';

  export let person;

  let iconSize = $isMobile ? 45 : 30;

  $: isOverlayOpen = false;

  const navigate = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    isOverlayOpen = false;
    setTimeout(() => {
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };
</script>

<header>
  <h1><a href="/">{person.name}</a></h1>
  {#if $isMobile}
    <button on:click={() => (isOverlayOpen = !isOverlayOpen)}>
      <Icon icon="mdi:hamburger-menu" width={iconSize} height={iconSize} />
    </button>
  {:else}
    <SocialButtons {person} />
  {/if}
</header>

{#if isOverlayOpen && $isMobile}
  <div class="overlay" transition:slide={{ duration: 300 }}>
    <div class="container">
      <button class="close" on:click={() => (isOverlayOpen = !isOverlayOpen)}>
        <Icon icon="mdi:close" width={iconSize} height={iconSize} />
      </button>
      <nav class="nav">
        <a href="#about" on:click={navigate}>About Me</a>
        <a href="#portfolio" on:click={navigate}>Portfolio</a>
      </nav>

      <SocialButtons {person} />
    </div>
  </div>
{/if}

<style>
  header {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .overlay {
    background-color: #eaeaea;
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3rem;
    padding: 2rem 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    align-items: flex-end;
    gap: 1rem;
    text-transform: uppercase;
  }
</style>
