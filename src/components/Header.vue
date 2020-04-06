<template>
  <header>
    <div class="inner">
        <router-link :to="{name:'home'}">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <ul v-if="isLogin" class="header_nav">
            <li><router-link to="/">首页</router-link></li>
            <li>
                <router-link :to="{name:'user',params:{loginname:userInfo.loginname}}">
                    个人中心
                </router-link>
            </li>
            
            <li @click="logout">退出</li>
        </ul>
        <ul v-else class="header_nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/login">登录</router-link></li>
        </ul>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default{
    name:'Header',
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['isLogin','userInfo'])
    },
    methods:{
        logout(){
            this.$store.commit('logout')
            alert('已退出登录！')
            this.$router.push('/login')
        },
        getStatus(){
            this.$store.dispatch('checkLogin')
        }
    },
    mounted(){
        this.getStatus()
    }
}
</script>
<style scoped lang="stylus">
header
    background #444
.inner
    width 90%
    margin 0 auto
img
    margin 8px
    max-width 120px
    cursor pointer
ul
    margin-top 5px
    float right
li
    padding 10px 15px
    font-size 14px
    color #ccc
    display inline-block
    &:hover
        color #fff
        cursor pointer
</style>
