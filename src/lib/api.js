import axios from'axios'
axios.defaults.baseURL='http://152.136.226.150:3000'

async function  getSongList(){
    let result= await axios.get('/personalized/newsong').then(res=>res.data.result)
    return result
}

async function  getPlayList(){
    let result= await axios.get('/personalized?limit=6').then(res=>res.data.result)
    return result
}

async function  getHotMusicList(){
    let result= await axios.get('/playlist/detail?id=3778678').then(res=>res.data.playlist.tracks)
    return result
}

async function  getKeyWordList(){
    let result= await axios.get('/search/hot').then(res=>res.data.result.hots)
    return result
}

async function  getSuggest(a){
    let result= await axios.get('/search/suggest?keywords='+a+'&type=mobile').then(res=>res.data.result.hots)
    return result
}

async function  getSing(a){
    let result= await axios.get('/search?keywords='+a+'&limit=10').then(res=>res.data.result.songs)
    return result
}

async function  getSongUrl(a){
    let result= await axios.get('/song/url?id='+a).then(res=>res.data.data[0].url)
    return result
}

async function  getSingDetail(a){
    let result= await axios.get('/playlist/detail?id='+a).then(res=>res.data.playlist)
    return result
}

async function  getDiscuss(a){
    let result= await axios.get('/comment/playlist?id='+a).then(res=>res.data.comments)
    return result
}

export default {getSongList,getPlayList,getHotMusicList,
    getKeyWordList,getSuggest,getSing,getSongUrl,getSingDetail,getDiscuss


}