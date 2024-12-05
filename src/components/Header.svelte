<script>
  import Icon from '@iconify/svelte';

  import { isMobile } from '../stores/isMobile';
  import SocialButtons from '../components/SocialButtons.svelte';

  export let person;

  $: isOverlayOpen = false;
</script>

<header>
  <h1><a href="/">{person.name}</a></h1>
  {#if $isMobile}
    <button on:click={() => (isOverlayOpen = !isOverlayOpen)}>
      <Icon icon="mdi:hamburger-menu" width="30" height="30" />
    </button>
  {:else}
    <SocialButtons {person} />
  {/if}
</header>

{#if isOverlayOpen && $isMobile}
  <div class="overlay">
    <button on:click={() => (isOverlayOpen = !isOverlayOpen)}>
      <Icon icon="mdi:close" width="30" height="30" />
    </button>
    <SocialButtons {person} />
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
    background-color: #c8c8c8;
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
</style>
