<script>
  import { onMount, onDestroy } from 'svelte';
  import Icon from '@iconify/svelte';
  import { fetchProjects, fetchPerson } from '../../services/api';
  import { isMobile } from '../stores/isMobile';

  /**
   * @type {never[] | Promise<any>}
   */
  let projects = [];

  /**
   * @type {Promise<any> | never[]}
   */
  let person = [];

  $: isOverlayOpen = false;

  $: isMobileView = $isMobile;

  onMount(() => {
    projects = fetchProjects();
    person = fetchPerson();
  });
</script>

{#await person}
  Loading...
{:then response_person}
  <div class="header">
    <h1>{response_person.name}</h1>
    <div>
      {#if isMobileView}
        <button on:click={() => (isOverlayOpen = !isOverlayOpen)}>
          <Icon icon="mdi:hamburger-menu" width="30" height="30" />
        </button>
      {:else}
        {#if response_person.instagram}
          <a href={response_person.instagram} title="Instagram Link">
            <Icon icon="mdi:instagram" width="25" height="25" />
          </a>
        {/if}
        {#if response_person.linkedin}
          <a href={response_person.linkedin} title="LinkedIn Link">
            <Icon icon="mdi:linkedin" width="25" height="25" />
          </a>
        {/if}
        {#if response_person.twitter}
          <a href={response_person.twitter} title="Twitter/X Link">
            <Icon icon="mdi:twitter" width="25" height="25" />
          </a>
        {/if}
      {/if}
    </div>
  </div>
  <p>{response_person.about}</p>
  {#if isOverlayOpen && isMobileView}
    <div class="overlay">
      <button on:click={() => (isOverlayOpen = !isOverlayOpen)}>
        <Icon icon="mdi:close" width="30" height="30" />
      </button>
      <div>
        {#if response_person.instagram}
          <a href={response_person.instagram} title="Instagram Link">
            <Icon icon="mdi:instagram" width="25" height="25" />
          </a>
        {/if}
        {#if response_person.linkedin}
          <a href={response_person.linkedin} title="LinkedIn Link">
            <Icon icon="mdi:linkedin" width="25" height="25" />
          </a>
        {/if}
        {#if response_person.twitter}
          <a href={response_person.twitter} title="Twitter/X Link">
            <Icon icon="mdi:twitter" width="25" height="25" />
          </a>
        {/if}
      </div>
    </div>
  {/if}
{/await}

<style lang="less">
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  button {
    all: unset;
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
