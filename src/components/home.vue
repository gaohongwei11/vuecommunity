<template>
    <div class="wrapper">
        <isheader class="header"></isheader>
        <!-- <keep-alive> -->
        <tabs class="tab"></tabs>
        <!-- </keep-alive> -->
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
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
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
