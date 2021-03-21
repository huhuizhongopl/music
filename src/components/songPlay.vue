<template>
<div class="play">
    <audio :src="this.$store.state.url" loop controls autoplay></audio>
</div>
</template>

<script>

</script>

<style>
.play{width:100%;height:40px;position: fixed;bottom: 0;left: 0;z-index: 200;}
audio{width:100%;height:40px;}
</style>