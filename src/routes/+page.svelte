<script>
  import Icon from '@iconify/svelte';
  import { isMobile, isSmallScreen } from '../stores/isMobile';

  export let data;

  let person = data.person;
  let aboutHeight = 300;
  let aboutDiv;

  $: aboutExpanded = !$isSmallScreen;

  const API_URL = import.meta.env.VITE_API_URL;

  const toggleAbout = () => {
    const currentY = window.scrollY;
    aboutExpanded = !aboutExpanded;

    if (aboutHeight === 300) {
      aboutHeight = aboutExpanded ? aboutDiv.scrollHeight : 300;
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentY });
    });
  };
</script>

<slot>
  <div class="img-container" class:small-screen={$isSmallScreen}>
    <img
      src={API_URL + '/' + person.photo.url}
      alt={person.photo.alternativeText}
    />
    <div>
      <h2>{person.title}</h2>
      <p
        id="about"
        class:show-less={!aboutExpanded}
        bind:this={aboutDiv}
        style="max-height: {aboutExpanded ? `${aboutHeight}px` : '300px'}"
      >
        <em>About me.</em>
        {person.about}
      </p>
      {#if $isSmallScreen}
        <button
          class="toggle"
          class:expanded={aboutExpanded}
          on:click={toggleAbout}
        >
          {#if !aboutExpanded}
            Show more <Icon icon="mdi-light:arrow-down" />
          {:else}
            Show less <Icon icon="mdi-light:arrow-up" />
          {/if}
        </button>
      {/if}
    </div>
  </div>
  <p id="portfolio">Projects</p>
  <div>
    About me. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
    sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
    minima veniam, quis nostrum exercitationem ullam corporis suscipit
    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
    iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
    consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  </div>
</slot>

<style lang="less">
  .img-container {
    display: flex;
    gap: 4rem;
    width: 100%;
    align-items: flex-start;

    &.small-screen {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    img {
      width: 80%;
      max-width: 500px;
      box-shadow:
        0px 4px 8px rgba(0, 0, 0, 0.2),
        0px 1px 3px rgba(0, 0, 0, 0.1);
      display: block;
      height: auto;
      object-fit: contain;
      filter: brightness(0.95) contrast(0.8) saturate(1.4);
    }
  }

  #about {
    width: 60%;
    font-size: 1.5rem;
    line-height: 2.5rem;
    transition: max-height 0.4s ease;

    .small-screen & {
      min-width: 100%;
    }

    &.show-less {
      overflow: hidden;
    }
  }
  button.toggle {
    margin-left: auto;
    height: 2rem;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:not(.expanded) {
      position: relative;
      top: -1rem;
      background-color: #f9f9f9a5;
    }
  }
</style>
