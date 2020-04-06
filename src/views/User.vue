<template>
    <div>
        <Loading :isLoading="isLoading" v-if="isLoading"></Loading>
        <div class="homepage" v-else>
            <section>
                <div class="top">个人主页</div>
                <div class="userinfo">
                    <img class="avatar" :src="UserInfo.avatar_url" alt="">{{UserInfo.loginname}}
                    <p>{{UserInfo.score}} 积分</p>
                    <p>注册于 {{UserInfo.create_at | formatDate}}</p>
                </div>
            </section>
            <section>
                <div class="top">最近创建的话题</div>
                <div class="none" v-if="UserInfo.recent_topics.length === 0">暂无数据！</div>
                <ul class="recent_topics" v-else>
                    <li v-for="item in UserInfo.recent_topics">
                        <router-link :to="{name:'user',params:{loginname:item.author.loginname}}">
                            <img class="avatar" :src="item.author.avatar_url" alt="">
                        </router-link>
                        <router-link :to="{name:'topic',params:{id:item.id}}">
                            <span class="title">{{item.title}}</span>
                        </router-link>
                        <span class="time">{{item.last_reply_at | formatDate}}</span>
                    </li>
                </ul>
            </section>
            <section>
                <div class="top">最近参与的话题</div>
                <div class="none" v-if="UserInfo.recent_replies.length === 0">暂无数据！</div>
                <ul class="recent_replies" v-else>
                    <li v-for="item in UserInfo.recent_replies">
                        <router-link :to="{name:'user',params:{loginname:item.author.loginname}}">
                            <img class="avatar" :src="item.author.avatar_url" alt="">
                        </router-link>
                        <router-link :to="{name:'topic',params:{id:item.id}}">
                            <span class="title">{{item.title}}</span>
                        </router-link>
                        <span class="time">{{item.last_reply_at | formatDate}}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
import Loading from '@/components/Loading'
export default{
    name:'User',
    data(){
        return {
            UserInfo:{},
            isLoading:false
        }
    },
    methods:{
        fetchUserInfo(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`)
                .then(res=>{
                    this.isLoading = false
                    this.UserInfo = res.data.data
                }).catch(err=>{
                    console.log(err)
                })
        }
    },
    created(){
        this.isLoading = true
        this.fetchUserInfo()
    },
    watch:{
        $route(to,from){
            if(to.name !== this.$route.name) return
            this.fetchUserInfo()
        }
    },
    components:{
        Loading
    }
}
</script>
<style scoped lang="stylus">
.homepage
    width 70%
    margin 15px auto
section 
    background #fff
    border-radius 3px
    margin-top 12px
    .avatar
        width 48px
        height 48px
        border-radius 3px
        margin-right 10px
        vertical-align middle
    ul 
        font-size 14px
        overflow hidden
        li 
            padding 12px
            border-bottom 1px solid #eee
            .time
                display inline-block
                float right
                padding 8px
                color #778087
            .title
                display inline-block
                width 60%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                &:hover
                    color #666
.none
    padding 10px
.top
    border-radius 3px
    padding 10px
    font-size 14px
    color #444
    background #f6f6f6
.userinfo
    padding 16px
    p
        margin-top 6px
        font-size 14px
        color #666
</style>