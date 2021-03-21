<template>
<div id="hot">
   <common/>
<img src="../assets/hotmusic.png" >
<div  v-for="(item,index) of hotMusicList" :key="index" >
   <div v-if="index<20" class="hotMusic">
         <showIndex :num="index" />
        <van-cell :title="item.name" :label="`${item.ar[0].name}--${item.al.name}`">
             <template #right-icon>
                 <van-icon name="play-circle-o" class="play-icon" @click="getUrl(index)" color="#ababab" />
            </template>
         </van-cell>
   </div>
</div>
</div>
</template>

<script>
import common from '../components/common'
import api from "../lib/api"
import Vue from 'vue';
import {Cell,Icon} from 'vant';
import showIndex from '../components/showIndex'
Vue.use(Cell).use(Icon);
export default{
    data(){
         return {
            hotMusicList:null
         }
    },
    components:{
         showIndex,
         common
    },
    methods:{
       async load(){
           this.hotMusicList=await api.getHotMusicList()
       },
       async getUrl(i){
            let id =this.hotMusicList[i].id
            let result=await api.getSongUrl(id)
            this.$store.commit('setUrl',result)
       }
    },
    created(){
       this.load()
    },
}
</script>

<style>
#hot{overflow:hidden;display:flex;flex-direction: column;justify-content: flex-start;margin-top: 124px;margin-bottom: 50px;}
.hotMusic{display: flex;justify-content: space-between;height:55px;width:100%;}
.play-icon {font-size: 28px;line-height: 46px;}
</style>