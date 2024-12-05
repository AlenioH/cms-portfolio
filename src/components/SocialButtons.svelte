<script>
  import Icon from '@iconify/svelte';

  import { isMobile } from '../stores/isMobile';

  export let person;
  let iconSize = $isMobile ? 45 : 25;
</script>

<div>
  {#if person.instagram}
    <a href={person.instagram} title="Instagram Link">
      <Icon icon="mdi:instagram" width={iconSize} height={iconSize} />
    </a>
  {/if}
  {#if person.linkedin}
    <a href={person.linkedin} title="LinkedIn Link">
      <Icon icon="mdi:linkedin" width={iconSize} height={iconSize} />
    </a>
  {/if}
  {#if person.twitter}
    <a href={person.twitter} title="Twitter/X Link">
      <Icon icon="mdi:twitter" width={iconSize} height={iconSize} />
    </a>
  {/if}
</div>
