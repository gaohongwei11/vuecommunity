<template>
    <div class="wrapper">
        <h1>title</h1>
        <div class="main" ref="myElement">
            <h1 v-for="num in list">{{num}}</h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                list:100,
                scroll:null
            }
        },
        mounted(){
            //监听滚动值
            this.$refs.myElement.addEventListener('scroll', this.getData)

            //赋值滚动值
            // this.getData()
        },
        methods: {
            getData(){
                //监听滚动值
                let scroll = this.$refs.myElement.scrollTop
                console.log(scroll)


                //赋值滚动值
                // this.$refs.myElement.scrollTop = 562
            }
        }

}
</script>
<style scoped>
.main{
    border:1px solid black;
    max-height: 300px;
    overflow-y: auto;
}
</style>