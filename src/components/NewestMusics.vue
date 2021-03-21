<template>
<div id="new">
    <div class="newMusicTitle">最新音乐</div>
    <div class='newMusicList'>
        <van-cell v-for="(item,index) of songList" :key="index" :title="item.name" :label="`${item.song.artists[0].name}--${item.song.album.name}`" >
             <template #right-icon>
                 <van-icon name="play-circle-o" class="play-icon" @click="getUrl(index)" color="#ababab" />
            </template>
         </van-cell>
    </div>    
</div>
</template>

<script>
import api from '../lib/api'
import Vue from 'vue';
import {Cell,Icon} from 'vant';
Vue.use(Cell).use(Icon);
export default{
    data(){
        return{
            songList:null
        }
    },
    components:{
        
    },
    methods:{
        async load(){
            this.songList=await api.getSongList()
        },
        async getUrl(i){
                let id =this.songList[i].id
                let result=await api.getSongUrl(id)
                this.$store.commit('setUrl',result)
        }
    },
    created(){
        this.load()
    }
}
</script>

<style>
#new{overflow: hidden;display:flex;flex-direction: column;justify-content: flex-start;}
.newMusicTitle{width:100%;height:20px;font-size: 17px;line-height: 20px;margin-top: 25px;margin-bottom: 20px;padding-left: 10px;}
.newMusicTitle::before{content: "";display: block;background: #d33a31;width: 2px;height:20px;margin-left: -10px;margin-bottom: -20px;z-index: 5;}
.play-icon {font-size: 28px;line-height: 46px;}
</style>