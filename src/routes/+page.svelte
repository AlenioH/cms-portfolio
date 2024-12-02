<script>
  import { onMount } from 'svelte';
  import { fetchProjects, fetchPerson } from '../../services/api';

  /**
   * @type {never[] | Promise<any>}
   */
  let projects = [];

  /**
   * @type {Promise<any> | never[]}
   */
  let person = [];

  onMount(() => {
    projects = fetchProjects();
    person = fetchPerson();
  });
</script>

<div>
  {#await person}
    Loading...
  {:then response_person}
    <h1>{response_person.name}</h1>
    <p>{response_person.about}</p>
  {/await}
</div>

<!-- <h1>Projects</h1>
<ul>
  {#await projects}
    <p>Loading...</p>
  {:then response}
    {#each response as project}
      <li>
        {project.id}: {project.title}
      </li>
    {/each}
  {/await}
</ul> -->

<style lang="less">
</style>
