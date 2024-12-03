<script>
  import Icon from '@iconify/svelte';
  import { isMobile } from '../stores/isMobile';

  export let data;


  let person = data.person;

</script>

<slot>
  <div class="header">

  <p>{person.about}</p>

</slot>

<style lang="less">

</style>
