<script lang="ts">
  import { theme } from '../routes/store'
  import { mdiThemeLightDark } from '@mdi/js'
  import Icon from '$lib/Icon.svelte';

  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark'

    document.querySelector('html').classList.toggle('dark')
  }
</script>

<button class="flex items-center justify-center" on:click={toggleTheme}>
  <div class="flex justify-items-center ml-4">
    <Icon iconName="Toggle Theme" path={mdiThemeLightDark} />
  </div></button
>
