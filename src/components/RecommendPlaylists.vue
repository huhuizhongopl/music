<template>
<div id="Rec">
  <div class='playListTitle'>推荐歌单</div>         
  <div class="playListContent">
       <div class="playListItem" v-for='(item,index) of playList' :key='item.id'>
           <img :src="item.picUrl" @click="toSingList(index)">
           <p class='playCount'>{{item.playCount | wan }}</p>
           <p style="margin:0;">{{item.name  |  shenlue}}</p>
       </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
import api from "../lib/api"
export default {
    data(){
         return{
             playList:null,
            
         }
    },
    methods:{
        async load(){
            this.playList=await api.getPlayList()
        },
        toSingList(i){
            let result =this.playList[i].id
            this.$router.push({ name:'singList', params: { id: result }})
        }
    },
    created(){
        this.load()
    },
    filters:{
        wan(value){
            if(value>100000000){
                return (value/100000000).toFixed(1)+"亿"
            }else{
                if(value>10000){
                    return (value/10000).toFixed(1)+"万"
                }else{
                    return value
                }
            }
        },
        shenlue(value){
            if(value.length>20){
                return value.substring(0,20)+"..."
            }else{
                return value
            }
        }
    }
}
</script>  

<style>
#Rec{overflow:hidden;display:flex;flex-direction: column;justify-content: space-between;margin-top: 115px;}
.playListTitle{width:100%;height:20px;padding-left: 10px;margin-top: 25px;margin-bottom: 20px;line-height: 20px;font-size: 17px;}
.playListTitle::before{content: "";display: block;background: #d33a31;width: 2px;height:20px;margin-left: -10px;margin-bottom: -20px;z-index: 5;}
.playListContent{width:100%;height:354px;display: flex;flex-wrap: wrap;justify-content: space-between;}
.playListItem{width:33%;height:165px;display: flex;flex-direction: column;justify-content: flex-start;font-size: 13px;position: relative;}
.playListItem img{width:100%;height:124px;margin-bottom: 3px;}
.playListItem .playCount{position: absolute;top: -10px;right:5px;color:white;display:block}
.listenIcon{position: absolute;top: -170px;right:-80px;}
</style>