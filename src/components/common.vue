<template>
<div class="common">
<div class="top">
   <div class="adpic"></div>
   <div class="tap">
     <router-link class="AppLink" to="/" exact>推荐音乐</router-link>
     <router-link class="AppLink" to="/TabHot">热歌榜</router-link>
     <router-link class="AppLink" to="/TabSearch">搜索</router-link>
   </div>
  </div>

</div>
</template>

<script>

</script>

<style>
.top{position: fixed;top:0;left: 0;width:100%;height:124px;display: flex;flex-direction: column;z-index: 100;}
.adpic{width:100%;height:84px;background: url('../assets/adpic.png') round ;}
.tap{width:100%;height:40px;display: flex;justify-content: space-around;font-size: 15px;line-height: 40px;background-color: white;}
.AppLink{color:black;text-decoration: none;display: block;cursor: pointer;box-sizing: border-box; }
.AppLink.router-link-active{color:#dd001b;border-bottom: 2px #dd001b solid;}
</style>