<template>
<div id="tabrec">
  <common/>
<recommendPlayList />
<newestMusics />

</div>
</template>

<script>
import common from '../components/common'
import recommendPlayList from '../components/RecommendPlaylists'
import newestMusics from '../components/NewestMusics'
export default{
    components: {
    recommendPlayList,
    newestMusics,
    common
  }
}
</script>

<style>
#tabrec{display: flex;flex-direction: column;justify-content: flex-start;margin-bottom: 50px;}
</style>