<script lang="ts">
  import { theme } from './store'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import Divider from '$lib/Divider.svelte'
  import Icon from '$lib/Icon.svelte'
  import { mdiChevronDoubleDown } from '@mdi/js'
</script>

<svelte:head>
  <title>bigrat | home</title>
</svelte:head>

<div
  class="flex justify-center items-center bg-bigrat-img bg-no-repeat bg-cover bg-fixed bg-center w-full h-screen transform -translate-y-24"
>
  <div class="bg-white dark:bg-true-gray dark:text-white p-4 rounded-md shadow-2xlg">
    <div>
      <h1 class="text-5xl font-extrabold text-center">bigrat.monster</h1>
      <h2 class="text-3xl font-bold mb-4 text-center">Now using SvelteKit beta</h2>
    </div>
    <div class="flex items-center justify-center animate-bounce">
      <Icon path={mdiChevronDoubleDown} iconName="Scroll" />
    </div>
  </div>
</div>
<Divider
  classes="dark:text-true-gray text-white fill-current -mt-56 transform translate-y-3 mb-12"
/>
<h2 class="text-2xl font-semibold text-center">rats</h2>
<div class="h-screen"></div>
