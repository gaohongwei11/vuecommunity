<template>
  <div class="hello">
    <h1 @click="getData">{{ msg }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios'
import timeago from 'timeago.js'
// 'Access Token: 55b176a9-8a6a-4b0b-b13c-1c04e9db5d1a'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getData(){
      let that = this
      //收藏
      // axios.post('http://www.vue-js.com/api/v1/topic/collect',{accesstoken:'55b176a9-8a6a-4b0b-b13c-1c04e9db5d1a',topic_id:'58abbd21a9c1282817afc28d'})
      // .then(function(response){
      //   console.log(response.data)
      //   console.log(response)
      // })
      //新建主题
      // axios.post('http://www.vue-js.com/api/v1/topics',{accesstoken:'55b176a9-8a6a-4b0b-b13c-1c04e9db5d1a',title:'这是一个标题',tab:'ask',content:'这是一个新建主题test'})
      // .then(function(response){
      //   // console.log(response.data)
      //   console.log(response)
      // })
      // axios.post('http://www.vue-js.com/api/v1/topic/5904878e4d2e582056ec6b3e/delete')
      // .then(function(response){
      //   // console.log(response.data)
      //   console.log(response)
      // })

      /*get /topics 主题首页
      接收参数：
      page Number 页数；
      limit Number 每一页的主题数量；
      tab String 主题分类；
      limit Number 每一页的主题数量；
      mdrender String 当为 false 时，不渲染。默认为 true*/
      axios.get('http://www.vue-js.com/api/v1/topics?tab=all')
      .then(function(response){
        console.log(response.data)
        let time = new Date(response.data.data[4].last_reply_at)
        console.log(time)
        var thistime = timeago()
        // thistime.format('2017-04-29')
        console.log(thistime.format(time,'zh_CN'))
      })

      //用户详情
      axios.get('http://www.vue-js.com/api/v1/user/bailicangdu')
      .then(function(response){
        // console.log(response.data)
      })

      axios.get('http://www.vue-js.com/api/v1/topic/5904878e4d2e582056ec6b3e')
      .then(function(response){
        // console.log(response.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
