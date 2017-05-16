<template>
    <div class="wrapper">
        <mu-appbar class="title" title="登录"></mu-appbar>
        <main>
            <mu-text-field v-model="val" label="Access Token" :errorText="error" labelFloat/>
            <mu-raised-button @click="login" label="登录" class="demo-raised-button" primary/>
        </main>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
import axios from 'axios'
import BottomNavigation from './commom/BottomNavigation.vue'
export default {
    components: {
        BottomNavigation
    },
    data() {
        return {
            val: '',
            error: ''
        }
    },
    methods: {
        login() {
            // 'Access Token: 55b176a9-8a6a-4b0b-b13c-1c04e9db5d1a'
            let that = this
            axios.post('https://www.vue-js.com/api/v1/accesstoken', {
                    accesstoken: that.val
                })
                .then(function(response) {
                    // console.log(response)
                    that.error = ''
                    localStorage.setItem('accesstoken', that.val)
                    localStorage.setItem('user_id', response.data.id)
                    localStorage.setItem('loginname', response.data.loginname)
                        // alert(localStorage.getItem("accesstoken"))
                    that.$router.push({
                        path: '/vuecommunitytest/personal'
                    })

                })
                .catch(function(error) {
                    console.log('error')
                    that.error = '输入错误，请重新输入'
                    console.log(that.$route.matched)
                    that.$route.matched[0].meta = {
                        requiresAuth: true
                    }
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
    justify-content: center;
    align-items: center;
}

.demo-raised-button {
    margin-top: 2rem;
    width: 22rem;
}
</style>
