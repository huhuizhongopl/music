<template>
<div class="singList">
     <div class="wrap">
         <img :src="picUrl" >
            <div class="p">{{text}}</div>
        <div class="topPic" :style="`backgroundImage:url(${picUrl})`">
            
        </div>
     </div>
    <div class="title"><p>歌曲列表</p></div>
    <div class='singDetailList' v-for="(item,index) of singDetailList" :key="index">
        <showIndex :num="index" />
        <van-cell  :title="item.name" :label="`${item.ar[0].name}--${item.al.name}`" >
             <template #right-icon>
                 <van-icon name="play-circle-o" class="play-icon" @click="getUrl(index)" color="#ababab" />
            </template>
         </van-cell>
    </div>
    <div class="title"><p>最新评论</p></div>
    <div class="pinglunqu">
    <div class="discuss" v-for="(item,index) of Discuss" :key="index">
        <div class="avatar">
            <img :src="item.user.avatarUrl" style="eidth:45px;height:45px;">
        </div>
        <van-cell  :title="item.user.nickname" :label="item.content" />
    </div>    
    </div>
</div>
</template>

<script>
import api from '../lib/api'
import showIndex from '../components/showIndex'
export default {
    data(){
        return{
           picUrl:null,
           text:null,
           singDetailList:null,
           Discuss:null
        }
    },
   components:{
      showIndex
   },
   methods:{
       async load(){
           let id=this.$route.params.id
           this.picUrl=await api.getSingDetail(id).then(res=>res.coverImgUrl)
           this.text=await api.getSingDetail(id).then(res=>res.name)
           this.singDetailList=await api.getSingDetail(id).then(res=>res.tracks)
           this.Discuss=await api.getDiscuss(id)
       },
       async getUrl(i){
            let id =this.singDetailList[i].id
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
p{margin: 0;}
.singList{display: flex;flex-direction: column;justify-content: flex-start;}
.topPic{width: 100%;height:226px;background-repeat: no-repeat;background-size: cover;background-position: 50%;filter: blur(20px);}
.wrap{width: 100%;height:226px;position: relative;}

.wrap img{width:126px;height:126px;position: absolute;top: 50px;left: 25px;z-index: 100;}
.wrap .p{width:200px;height:100px;position: absolute;right: 10px; top: 90px;font-size: 17px;color: white;text-align: center;z-index: 100;}
.title{color:#666;font-size: 12px;padding: 0 20px;width:100%;height:23px;line-height: 23px;text-align: left;background: #eeeff0;}
.singDetailList{display: flex;flex-direction: row; justify-content: space-between;flex-wrap: nowrap;height:55px;width:100%;}
.discuss{display: flex;flex-direction: row; justify-content: space-between;flex-wrap: nowrap;height:55px;width:100%;margin-bottom: 5px;overflow: hidden;}
.avatar{width:50px;height:40px;border-radius: 50%;overflow: hidden;margin-top: 15px;}
.pinglunqu{margin-bottom: 40px;}


</style>