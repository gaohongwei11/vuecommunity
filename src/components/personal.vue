<template>
    <div class="wrapper">
        <mu-appbar class="title" title="个人中心"></mu-appbar>
        <main>
            <!-- 个人信息 -->
            <img :src="user_msg.avatar_url" alt="user">
            <span class="name">{{user_msg.loginname}}</span>
            <div class="timer">
                <span>积分：{{user_msg.score}}</span>
                <span>注册时间：{{user_msg.create_at | timeago}}</span>
            </div>
            <!-- 最近主题、回复、收藏 -->
            <section class="content">
                <mu-list>
                    <mu-list-item
                    class="list"
                    v-if="user_msg.recent_topics"
                    title="最近主题"
                    toggleNested
                    :open="false">
                        <mu-icon class="icon" slot="left" value="insert_drive_file" />
                        <mu-list-item
                        :to="{path:'/vuecommunitytest/content',query:{id:item.id}}"
                        v-for="item in user_msg.recent_topics"
                        :key="item.id"
                        slot="nested"
                        :title="item.title">
                            <mu-icon class="icon" slot="left" value="description" />
                        </mu-list-item>
                        <span class="count">{{user_msg.recent_topics.length}}个</span>
                    </mu-list-item>
                    <mu-list-item
                    class="list"
                    v-if="user_msg.recent_replies"
                    title="最近回复"
                    toggleNested
                    :open="false">
                        <mu-icon class="icon" slot="left" value="drafts" />
                        <mu-list-item
                        :to="{path:'/vuecommunitytest/content',query:{id:item.id}}"
                        v-for="item in user_msg.recent_replies"
                        :key="item.id"
                        slot="nested"
                        :title="item.title">
                            <mu-icon class="icon" slot="left" value="insert_comment" />
                        </mu-list-item>
                        <span class="count">{{user_msg.recent_replies.length}}个</span>
                    </mu-list-item>
                    <mu-list-item
                    class="list"
                    v-if="user_msg.collect_topics"
                    title="收藏主题"
                    toggleNested
                    :open="false">
                        <mu-icon class="icon" slot="left" value="folder" />
                        <mu-list-item
                        :to="{path:'/vuecommunitytest/content',query:{id:item.id}}"
                        v-for="item in user_msg.collect_topics"
                        :key="item.id"
                        slot="nested"
                        :title="item.title">
                            <mu-icon class="icon" slot="left" value="folder_open" />
                        </mu-list-item>
                        <span class="count">{{user_msg.collect_topics.length}}个</span>
                    </mu-list-item>
                </mu-list>
            </section>
            <!-- 退出登录按钮 -->
            <mu-raised-button
            @click="logout"
            label="退出登录"
            class="demo-raised-button"
            icon="power_settings_new"
            primary/>
        </main>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
import axios from 'axios'
import timeago from 'timeago.js'
import BottomNavigation from './commom/BottomNavigation.vue'
export default {
    components: {
        BottomNavigation
    },
    data() {
        return {
            accesstoken: '',
            user: {},
            user_msg: {}
        }
    },
    created() {
        this.accesstoken = localStorage.getItem("accesstoken")
        this.getData()
    },
    filters: {
        timeago(val) {
            let time = new Date(val)
            let thistime = timeago()
            return thistime.format(time, 'zh_CN') //将UTC时间转换格式---> 几天前,几小时前...
        }
    },
    methods: {
        getData() {
            let that = this
            axios.post('https://www.vue-js.com/api/v1/accesstoken', {
                    accesstoken: that.accesstoken
                })
                .then(function(response) {
                    that.user = response.data
                    that.getUserData()
                })

        },
        getUserData() {
            let that = this
            axios.get('https://www.vue-js.com/api/v1/user/' + that.user.loginname)
                .then(function(response) {
                    that.user_msg = response.data.data
                    // console.log(that.user_msg)
                })
        },
        logout() {
            localStorage.removeItem('accesstoken')
            localStorage.removeItem('user_id')
            localStorage.removeItem('loginname')
            this.$router.push({
                path: '/vuecommunitytest'
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
}

.title {
    text-align: center;
    height: 5rem;
}

main {
    flex: 1;
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
}

.demo-raised-button {
    width: 100%;
}

main>img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin: 1rem 0;
}

.name {
    color: #009688;
    font-weight: 700;
    font-size: 24px;
}

.timer {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: 1rem 0;
}

.content {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    margin-bottom: 1rem;
}

.mu-list {
    padding: 0;
}

.list:first-child {
    border-top: 1px solid #009688;
}

.count {
    background-color: #009688;
    color: #fff;
    padding: 0.1rem 0.6rem;
    border-radius: 0.2rem;
    margin-top: 2rem;
}

.icon {
    color: #009688;
}
</style>
