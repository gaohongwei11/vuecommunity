<template>
    <div class="wrapper">
        <mu-appbar class="title" title="发布话题">
        </mu-appbar>
        <main>
            <mu-select-field class="text" v-model="list" :labelFocusClass="['label-foucs']" label="选择板块">
                <mu-menu-item v-for="text,index in lists" :key="index" :value="index" :title="text" />
            </mu-select-field>
            <mu-text-field v-model="title" class="text" label="标题" hintText="标题字数 10字以上" />
            <mu-text-field v-model="content" class="text content" hintText="输入文本，支持markdown格式" multiLine :rows="5" :underlineShow="false" />
            <mu-raised-button @click="setData" label="发布话题" class="demo-raised-button" icon="near_me" primary/>
        </main>
        <mu-dialog :open="!accesstoken" title="提示：">
            请先登录
            <mu-flat-button slot="actions" primary to="/vuecommunitytest" label="取消" />
            <mu-flat-button slot="actions" primary to="/vuecommunitytest/login" label="确定" />
        </mu-dialog>
        <mu-dialog :open="publish" title="提示：">
            {{tips}}
            <mu-flat-button slot="actions" primary @click="close" label="确定" />
        </mu-dialog>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
import axios from 'axios'
import marked from 'marked'
import BottomNavigation from './commom/BottomNavigation.vue'
export default {
    components: {
        BottomNavigation
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            accesstoken: '',
            list: 0,
            lists: ['分享', '问答', '招聘'],
            title: '',
            tab: '',
            content: '',
            publish: false,
            tips: '请输入正确格式'
        }
    },
    created() {
        this.accesstoken = localStorage.getItem("accesstoken")
    },
    methods: {
        setData() {
            if (this.list === 0) {
                this.tab = 'share'
            } else if (this.list === 1) {
                this.tab = 'ask'
            } else if (this.list === 2) {
                this.tab = 'job'
            }
            let that = this
            that.content = marked(that.content)
                // console.log(that.accesstoken)
                // console.log(that.title)
                // console.log(that.tab)
                // console.log(that.content)
            axios.post('https://www.vue-js.com/api/v1/topics', {
                    accesstoken: that.accesstoken,
                    title: that.title,
                    tab: that.tab,
                    content: that.content
                })
                .then(function(response) {
                    // console.log(response.data)
                    that.title = ''
                    that.content = ''
                    that.tips = '发表成功！'
                    that.publish = true
                    setTimeout(function() {
                        that.publish = false
                    }, 1500)
                })
                .catch(function(error) {
                    that.publish = true
                })
        },
        close() {
            this.publish = false
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}

.title {
    text-align: center;
    height: 5rem;
}

main {
    flex: 1;
    margin: 5rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

.text {
    /*font-size: 24px;*/
    width: 100%;
    /*text-align: center;*/
}

.content {
    flex: 1;
    background-color: #f7f7f7;
    padding: 1rem;
    overflow-y: auto;
}

textarea {
    height: 10rem;
}
</style>
