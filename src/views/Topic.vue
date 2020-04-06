<template>
  <div>
    <Loading :isLoading="isLoading" v-if="isLoading"></Loading>
    <main v-else>
      <div class="sidebar">
        <Sidebar home="false" :loginname="detail.author.loginname"></Sidebar>
      </div>
      <div class=topic>
        <header>
          <h1>{{detail.title}}</h1>
          <ul>
            <li>&bull; 发布于 {{detail.create_at | formatDate}}</li>
            <li>&bull; 作者 <span>{{detail.author.loginname}}</span></li>
            <li>&bull; {{detail.visit_count}} 次浏览</li>
            <li>&bull; 来自 {{detail | formatTab}}</li>
          </ul>
        </header>
        <article class="markdown-body" v-html="detail.content"></article>
      </div>
      <div class="topic_reply">
        <div class="top">{{detail.reply_count}} 回复</div>
        <div class="replies">
          <ul>
            <li class="reply" v-for="(item,i) in detail.replies">
              <router-link :to="{name:'user',params:{loginname:item.author.loginname}}">
                <img class="reply_avatar" :src="item.author.avatar_url" alt="">
              </router-link>
              <div class="reply_text">
                {{i + 1}}楼
                <router-link :to="{name:'user',params:{loginname:item.author.loginname}}">
                  <span>{{item.author.loginname}}</span>
                </router-link>
                {{item.create_at | formatDate}}
                <div class="markdown-body" v-html="item.content"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar'
export default{
    name:'Topic',
    data(){
        return {
          isLoading:false,
          detail:{}
        }
    },
    computed:{
        
    },
    methods:{
        fetchTopic(){
          this.$http.get(`https://cnodejs.org/api/v1//topic/${this.$route.params.id}`)
            .then(res=>{
              this.detail = res.data.data
              this.isLoading = false
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
      this.isLoading = true
      this.fetchTopic()
    },
    components:{
      Loading,Sidebar
    }
}
</script>
<style scoped lang="stylus">
@import url('../assets/github-markdown.css');
main
  width 90%
  margin 15px auto
  .topic
    width calc(100% - 310px)
    background #FFFFFF
    border-radius 3px
    header
      padding 18px
      border-bottom 1px solid #ccc
      h1
        font-size 22px
      ul
        margin-top 4px
        li
          display inline-block
          font-size 12px
          color #838383
    article
      padding 0 12px
  .sidebar
    float right
  .topic_reply
    margin-top 10px
    width calc(100% - 310px)
    background #FFFFFF
    border-radius 3px
    .top
      border-radius 3px
      padding: 10px;
      font-size: 14px;
      color: #444;
      background: #f6f6f6;
    .reply
      padding 16px
      border-bottom 1px solid #ccc
      font-size 14px
      .reply_avatar
        width 50px
        height 50px
        border-radius 3px
      .reply_text
        display inline-block
        margin-left 10px
        vertical-align top
        width: calc(100% - 74px);
</style>
