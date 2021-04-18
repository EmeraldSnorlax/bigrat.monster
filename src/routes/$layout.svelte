<script lang="ts">
  import '../app.postcss'
  import { theme } from './store'
  import ToggleTheme from '../lib/ToggleTheme.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })
</script>

<div class="flex flex-col h-screen">
  <header class="bg-blue-600 dark:bg-blue-900 text-white p-4">
    <ToggleTheme />
  </header>
  <main class="flex-1 overflow-y-auto">
    <slot />
  </main>
  
</div>
