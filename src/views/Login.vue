<template>
    <div class="login">
        <div class="box">
            <input type="text" placeholder="Access Token" v-model.trim="accessToken">
            <p>如何获取Access Token？</p>
            <div class="sign_in" @click="login">登录</div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Login',
    data(){
        return {
            accessToken:''
        }
    },
    methods:{
        login(){
            if(!this.accessToken){
                alert('请输入您的Access Token!')
                return
            }
            this.$http.post('https://cnodejs.org/api/v1/accesstoken',{
                accesstoken:this.accessToken
            }).then(res=>{
                // console.log(res.data)
                this.$store.dispatch('login',{
                    accesstoken:this.accessToken,
                    userInfo:res.data
                })
                this.$router.go(-1)
            }).catch(err=>{
                console.log(err)
                alert('您输入的Access Token不存在!')
            })

        }
    }
}
</script>
<style scoped lang="stylus">
.login
    padding 100px
    .box
        width 300px
        background #444
        border-radius 3px
        margin 0 auto
        padding 70px 20px
        input 
            height 45px
            border none 
            border-radius 0 0 5px 5px
            outline none
            border 1px solid #e1e1e1;
            width 100%
            padding 0 0 0 8px
            font-size 16px
        p
            color #ffffff
            font-size 14px
            margin-top 15px
        .sign_in
            color #ffffff
            background #0f9c55
            cursor pointer
            font-size 16px
            padding 12px 0 
            border-radius 3px
            text-align center
            margin-top 15px
            &:hover
                color #ccc
</style>