<template>
    <div>
        <Loading :isLoading="isLoading" v-if="isLoading"></Loading>
        <main v-else>
            <div class="sidebar">
                <Sidebar home="true"></Sidebar>
            </div>
            <div class="content">
                <router-link :to="{name:'test',params:{msg:'hhh'}}"></router-link>
                <nav>
                    <router-link to="/" :class="{'active':!$route.query.tab}">全部</router-link>
                    <router-link to="/?tab=good" :class="{'active':$route.query.tab==='good'}">精华</router-link>
                    <router-link to="/?tab=share" :class="{'active':$route.query.tab==='share'}">分享</router-link>
                    <router-link to="/?tab=ask" :class="{'active':$route.query.tab==='ask'}">问答</router-link>
                    <router-link to="/?tab=job" :class="{'active':$route.query.tab==='job'}">招聘</router-link>
                    <router-link to="/?tab=dev" :class="{'active':$route.query.tab==='dev'}">客户端测试</router-link>
                </nav>
                <ul class="topicList">
                    <li v-for="topic in topics">
                        <router-link :to="{name:'user',params:{loginname:topic.author.loginname}}">
                            <img :src="topic.author.avatar_url" alt="">
                        </router-link>
                        <span class="count">
                            <span class="reply_count">{{topic.reply_count}}</span>/<span class="visit_count">{{topic.visit_count}}</span>
                        </span>
                        <span :class="{'top':topic.top||topic.good,'tab':!topic.good&&!topic.top}">{{topic | formatTab}}</span>
                        <span class="title"><router-link :to="{name:'topic',params:{id:topic.id}}">{{topic.title}}</router-link></span>
                        <span class="last_reply_time">{{topic.last_reply_at | formatDate}}</span>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>
<script>
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar'
export default{
  name:'Home',
  data(){
      return {
          isLoading:false,
          topics:[]
      }
  },
  created(){
      this.isLoading = true
      this.fetchTopics()
  },
  methods:{
      fetchTopics(){
          this.$http.get('https://cnodejs.org/api/v1/topics',{
              params:{
                    limit:30,
                    page:1,
                    tab:this.$route.query.tab
              }
          })
          .then((res)=>{
              this.isLoading = false
              this.topics = res.data.data
          })
          .catch((err)=>{
              console.log(err)
          })
      }
  },
  watch:{
      '$route'(to,from){
          if(to.name !== 'home')
            return 
          this.isLoading = true
          this.fetchTopics()
      }
  },
  components:{
    Loading,Sidebar
  },
}
</script>
<style scoped lang="stylus">
img
    width 30px
    height 30px
    border-radius 3px
    vertical-align middle
main
    margin-top 100px
    width 90%
    margin 15px auto
    .content
        width calc(100% - 310px)
        background #FFFFFF
        nav 
            border-radius 3px
            padding 10px
            font-size 14px
            background #F6F6F6
            >a
                padding 2px 4px
                color #80bd01
                margin 8px
                &:hover
                    color #005580
                &.active
                    background #80bd01
                    color #fff
                    border-radius 3px
        li
            border-bottom 1px solid #e5e5e5
            padding 10px
            overflow hidden
            &:hover
                background #F5F5F5
            >span 
                display inline-block
            .count
                text-align center
                font-size 12px
                min-width 70px
                .reply_count
                    color #9e78c0 
                .visit_count
                    color #b4b4b4
            .top
                background #80BD01
                color #FFFFFF
                font-size 12px
                padding 2px 4px
                border-radius 3px
            .tab
                background #E5E5E5
                color #999999
                font-size 12px
                display inline-block
                padding 2px 4px
                border-radius 3px
            .title
                color #333333
                display inline-block
                margin-left 10px
                width 60%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                vertical-align middle
            .last_reply_time
                float right
                display inline-block
                padding 6px
                font-size 12px
                color #778087
    .sidebar
        float right
</style>