<template>
    <div class="wrapper">
        <isheader class="header"></isheader>
        <tabs class="tab"></tabs>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
/*eslint-disable */
import isheader from './commom/header.vue'
import BottomNavigation from './commom/BottomNavigation.vue'
import tabs from './commom/tabs.vue'
import axios from 'axios'
export default {
    components: {
        isheader,
        tabs,
        BottomNavigation
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        getData() {
            let that = this

            /*get /topics 主题首页
            接收参数：
            page Number 页数；
            limit Number 每一页的主题数量；
            tab String 主题分类；
            limit Number 每一页的主题数量；
            mdrender String 当为 false 时，不渲染。默认为 true*/
            axios.get('http://www.vue-js.com/api/v1/topics?tab=good')
                .then(function(response) {
                    console.log(response.data)

                })
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /*position: relative;*/
}

.tab {
    flex: 1;
    margin: 9rem 0 5rem 0;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
</style>
