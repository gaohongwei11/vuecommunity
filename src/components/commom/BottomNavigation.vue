<template>
    <mu-paper class="bottom_nav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item to="/vuecommunitytest" value="首页" title="首页" icon="home" />
            <mu-bottom-nav-item to="/vuecommunitytest/publish" value="发布" title="发布" icon="subject" />
            <mu-bottom-nav-item to="/vuecommunitytest/message" value="消息" title="消息" icon="message" />
            <mu-bottom-nav-item :to="person_path" value="我的" title="我的" icon="person" />
        </mu-bottom-nav>
    </mu-paper>
</template>
<script>
export default {
    data() {
            return {
                bottomNav: '首页',
                person_path: '/vuecommunitytest/login',
            }
        },
        created() {
            this.facthData()
        },
        watch: {
            '$route': 'facthData'
        },
        methods: {
            handleChange(val) {
                this.bottomNav = val
            },
            facthData() {
                let accesstoken = localStorage.getItem("accesstoken")
                if (accesstoken) {
                    // console.log('yes')
                    this.person_path = '/vuecommunitytest/personal'
                } else {
                    // console.log('no')
                    this.person_path = '/vuecommunitytest/login'
                }
                if (this.$route.path === '/vuecommunitytest') {
                    this.bottomNav = '首页'
                }
                if (this.$route.path === '/vuecommunitytest/publish') {
                    this.bottomNav = '发布'
                }
                if (this.$route.path === '/vuecommunitytest/message') {
                    this.bottomNav = '消息'
                }
                if (this.$route.path === '/vuecommunitytest/login' || this.$route.path === '/vuecommunitytest/personal') {
                    this.bottomNav = '我的'
                }
            }
        }
}
</script>
<style>
.bottom_nav .mu-bottom-nav-shift-wrapper {
    display: flex;
    justify-content: space-around;
}

.bottom_nav {
    height: 5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
