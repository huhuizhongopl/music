<template>
<div id="app">
<router-view/>
  <songPlay/>
</div>
</template>
<script>
import songPlay from './components/songPlay'
export default {
  name: 'App',
  components: {
    songPlay,
  },
}
</script>

<style>
#app{display: flex;flex-direction: column;justify-content: flex-start;position: relative;}


</style>
