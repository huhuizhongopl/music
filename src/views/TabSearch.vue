<template>
<div id="sea">
    <common/>
    <van-search
    class="searchInput"
    v-model="value"
    placeholder="搜索歌曲、歌手、专辑"
    @search="onSearch"
    @input="onChange"
    shape="round"
    clear-trigger="always"
    />
    <h3>{{titleText}}</h3>
    <div class="tag" v-if="searchIsShow==false">
        <van-tag  plain size="large" round color="#333" v-for="(item,index) of keyWordList" :key="index" style="margin:0 10px 15px 0;height:25px;cursor:pointer" @click="clickTag(index)">{{item.first}}</van-tag>
    </div>
    <div class="history" v-if="searchIsShow==false && historyIsShow==true">
        <div  v-for="(item,index) of localStorage" :key="index">
            <van-cell style="cursor:pointer;" :title="item" icon="clock-o" v-if="index!=0" @click="selectHistory($event,item)" >
                <template right-icon>
                    <van-icon name="cross" class="crossIcon"  @click="closeHistory"/>
                </template>
            </van-cell>
        </div>
    </div>
    <div class="searchResult" v-if="searchIsShow==true">
         <van-cell v-for="(item,index) of sing" :key="index"  :title="item.name" :label="`${item.artists[0].name}--${item.album.name}`">
            <template #right-icon>
                 <van-icon name="play-circle-o" class="play-icon" @click="getUrl(index)" color="#ababab" />
            </template>
         </van-cell>
    </div>
</div>
</template>

<script>
import common from '../components/common'
import api from "../lib/api"
import Vue from 'vue';
import {Search,Tag,Cell,CellGroup,Icon} from 'vant';
Vue.use(Search).use(Tag).use(Cell).use(CellGroup).use(Icon);

export default {
    data(){
        return{
            value:null,
            keyWordList:null,
            sing:null,
            searchIsShow:false,
            titleText:"热门搜索",
            hisCount:0,
            historyIsShow:true
        }
    },
    components:{
        common
    },
    methods:{
        async load(){
            this.keyWordList= await api.getKeyWordList()
        },
        async onSearch() {
            this.searchIsShow=true
            this.titleText="最佳匹配"
            this.sing=await api.getSing(this.value)
            localStorage.setItem(`his${this.hisCount}`,this.value)
            this.hisCount++
        },
        async onChange(){
            if(this.value==""){
                this.searchIsShow=false
                this.titleText="热门搜索"
                this.historyIsShow=true
            }
            
        },
        clickTag(a){
            this.value=this.keyWordList[a].first
            this.onSearch()
        },
        async getUrl(i){
            let id =this.sing[i].id
            let result=await api.getSongUrl(id)
            this.$store.commit('setUrl',result)
        },
        closeHistory(){
            localStorage.clear()
            this.historyIsShow=false
        },
        selectHistory(e,a){
            if(e.clientX<318){
                this.value=a
                this.onSearch()
            }
        }
    },
    computed:{
        localStorage(){
            return localStorage.valueOf()
        }
    },
    created(){
        this.load()
    }
}

</script>

<style>
#sea{overflow:hidden;display:flex;flex-direction: column;justify-content: flex-start;margin-top: 134px;margin-bottom: 50px;}
.searchInput {width:100%;height:35px;margin-bottom: 10px;}
h3{font-size: 12px;line-height: 12px;color: #666; text-align: left;font-weight: 400;padding-left: 10px;}
.tag{ display:flex;flex-wrap: wrap;padding-left: 10px;padding-right: 10px;}
.play-icon {font-size: 28px;line-height: 46px;color:black;}
.history{display: flex;flex-direction: column;justify-content: flex-start;}

</style>