<template>
<div class="num" :class="{active:num<3}">{{ num | int}}</div>
</template>

<script>
export default {
    props:{
       num:[Number]
    },
    filters:{
       int(value){
           if(value<10){
              if(value==9){return "10"}
              return `0${value+1}`
           }else{
              return `${value+1}`
           }
       }
    }
}

</script> 

<style>
.num{width:10%;height:100%;text-align: center;line-height: 55px;font-size: 17px;color:black}
.active{color:red}
</style>