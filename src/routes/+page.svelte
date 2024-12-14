<script>
  import Icon from '@iconify/svelte';
  import { isMobile, isSmallScreen } from '../stores/isMobile';
  import { fly } from 'svelte/transition';

  export let data;
  console.log('data', data);

  let person = data.person;

  $: aboutExpanded = !$isSmallScreen || person.about.length < 200;

  let about = person.about;
  let toExpand = '';
  if (person.about.length > 200) {
    about = person.about.slice(0, 200);
    toExpand = person.about.slice(200);
  }
  const API_URL = import.meta.env.VITE_API_URL;

  const toggleAbout = () => {
    const currentY = window.scrollY;
    aboutExpanded = !aboutExpanded;
    setTimeout(() => {
      window.scrollTo({ top: currentY });
    }, 15);
  };
</script>

<slot>
  <div class="img-about-container" class:small-screen={$isSmallScreen}>
    <div class="img-container">
      <img
        src={API_URL + '/' + person.photo.url}
        alt={person.photo.alternativeText}
      />
      <button aria-label="latest project"
        ><img
          alt=""
          src={API_URL + '/' + data.projects[0].images[0].url}
        /></button
      >
    </div>
    <div>
      <h2>{person.title}</h2>
      <div id="about" class:show-less={!aboutExpanded}>
        <p>
          <em>About me.</em>
          {about}{toExpand && !aboutExpanded ? '...' : ''}
        </p>
        {#if aboutExpanded}
          <p transition:fly={{ duration: 300 }}>
            {toExpand}
          </p>
        {/if}
      </div>
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
  .img-about-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    width: 100%;
    align-items: flex-start;

    &.small-screen {
      // flex-direction: column-reverse;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .img-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 2rem;
    align-items: flex-start;

    max-width: 500px;
    background: linear-gradient(10deg, #806d5a 0%, #a8907a 50%, #806d5a 100%);
    height: 100%;
    border-radius: 3px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    button {
      height: 11.3rem;
      background-color: beige;
      border-radius: 17px;

      img {
      }
    }

    img {
      max-width: 80%;
      box-shadow:
        0px 4px 8px rgba(0, 0, 0, 0.2),
        0px 1px 3px rgba(0, 0, 0, 0.1);
      display: block;
      height: auto;
      object-fit: cover;
      filter: brightness(0.95) contrast(0.8) saturate(1.4);
      border-radius: 17px;
      aspect-ratio: 1/1;
    }
  }

  #about {
    width: 60%;
    font-size: 1.5rem;
    line-height: 2.5rem;
    background-color: inherit;

    .small-screen & {
      min-width: 100%;
    }

    &.show-less {
      overflow: hidden;
    }

    p {
      display: inline;
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
