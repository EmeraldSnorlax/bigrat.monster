<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import ToggleTheme from '../lib/ToggleTheme.svelte';
  import { onMount } from 'svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<main>
  <ToggleTheme />
  <slot />
</main>
