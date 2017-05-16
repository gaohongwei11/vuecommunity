<template>
    <div class="hello">
        <mu-appbar class="title" title="Vue.js 中文社区">
            <mu-icon-button slot="left">
                <img class="logo" src="https://www.vue-js.com/public/images/vue.png">
            </mu-icon-button>
            <mu-icon-menu slot="right" icon="more_vert" :value="theme" @change="changeTheme">
                <mu-menu-item title="LIGHT" value="light" />
                <mu-menu-item title="CARBON" value="carbon" />
                <mu-menu-item title="TEAL" value="teal" />
            </mu-icon-menu>
        </mu-appbar>
    </div>
</template>
<script>
import axios from 'axios'
import light from '!raw-loader!muse-ui/dist/theme-default.css'
import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
import teal from '!raw-loader!muse-ui/dist/theme-teal.css'
export default {
    name: 'hello',
    data() {
        return {
            theme: 'teal',
            themes: {
                light,
                carbon,
                teal
            }
        }
    },
    methods: {
        changeTheme(theme) {
            this.theme = theme
            const styleEl = this.getThemeStyle()
            styleEl.innerHTML = this.themes[theme] || ''
        },
        getThemeStyle() {
            const themeId = 'muse-theme'
            let styleEl = document.getElementById(themeId)
            if (styleEl) return styleEl
            styleEl = document.createElement('style')
            styleEl.id = themeId
            document.body.appendChild(styleEl)
            return styleEl
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    text-align: center;
    height: 5rem;
}

.mu-icon-button {
    padding: 0.4rem;
}
</style>
