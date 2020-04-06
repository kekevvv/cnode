<template>
  <div id="app">
    <Header></Header>
    <div class="mainbody"><router-view></router-view></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default{
  name:'App',
  components:{
    Header,Footer
  }
}
</script>
<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box
ol,ul
  list-style none
.clearfix::after
  content ''
  display block
  clear both
a
  color inherit
  text-decoration none
#app
  background #E1E1E1
.mainbody
  min-height 80vh
header,section,footer,asdie,nav,article
  display block
</style>
