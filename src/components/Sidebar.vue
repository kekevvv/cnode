<template>
    <aside>
        <div v-if="isLogin">
            <div class="top">用户信息</div>
            <div class="info">
                <router-link :to="{name:'user',params:{loginname:user.loginname}}"><img class="avatar" :src="user.avatar_url" alt=""></router-link>
                <router-link :to="{name:'user',params:{loginname:user.loginname}}">{{this.user.loginname}}</router-link>
                <p>积分：{{user.score}}</p>
                <p>注册时间：{{user.create_at | formatDate}}</p>
            </div>
        </div>
        <div class="other" v-else>
            <p>CNode：Node.js专业中文社区</p>
            <p>当前是游客状态，您可以 <span><router-link to="/login">登录</router-link></span></p>
        </div>
    </aside>
</template>
<script>
import { mapState } from 'vuex'
export default{
    name:'Sidebar',
    props:{
        'home':{
            type:String
        },
        'loginname':{
            type:String
        }
    },
    data(){
        return {
            user:{
                avatar_url: '',
                id:'',
                create_at: '',
                githubUsername: '',
                loginname: '',
                score:''
            }
        }
    },
    computed:{
        ...mapState(['isLogin','userInfo'])
    },
    methods:{
        getUserInfo(){
            if(this.home==='true'){
                this.$store.dispatch('checkLogin').then(res=>{
                    this.$http.get(`https://cnodejs.org/api/v1/user/${this.userInfo.loginname}`)
                        .then(res=>{
                            this.user = res.data.data
                        }).catch(err=>{
                            console.log(err)
                        })
                })
            }else{
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.loginname}`)
                    .then(res=>{
                        this.user = res.data.data
                    }).catch(err=>{
                        console.log(err)
                    })
            }
        }
    },
    mounted(){
        this.getUserInfo()
    }
}
</script>
<style scoped lang="stylus">
aside
    border-radius 3px
    width 290px
    background #fff
    font-size 14px
    .top
        border-radius 3px
        padding 10px
        font-size 14px
        color #444
        background #f6f6f6
    .info
        padding 10px
        a
            display inline-block
            vertical-align middle
            color #778087
            font-size 16px
        .avatar
            width 48px
            height 48px
            border-radius 3px
            margin-right 10px
        p
            margin 8px 0
    .other>p
        padding 10px
        >span 
            color #778087
</style>