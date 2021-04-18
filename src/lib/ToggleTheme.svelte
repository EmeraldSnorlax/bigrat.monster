<script lang="ts">
  import { theme } from '../routes/store'
  import { mdiThemeLightDark } from '@mdi/js'
  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark'

    document.querySelector('html').classList.toggle('dark')
  }
</script>

<button class="flex items-center justify-center" on:click={toggleTheme}>
  <div class="flex justify-items-center ml-4">
    <svg
      class="fill-current mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      ><path d={mdiThemeLightDark} />
      <title>Toggle THeme</title>
    </svg>
  </div></button
>
