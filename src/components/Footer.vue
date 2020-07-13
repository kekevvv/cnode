<template>
    <footer>
            <ul>
                <li>
                    <a href="https://github.com/kekevvv/cnode" target="_blank">源码地址</a>
                </li>
                <li>
                    <a href="https://cnodejs.org" target="_blank">
                        <img src="../assets/cnodejs_light.svg" alt="cnode">
                    </a>
                </li>
            </ul>
    </footer>
</template>
<script>
export default{
    name:'Header'
}
</script>
<style scoped lang="stylus">
footer
    height 139px
    background #444444
    color #ccc
    position: relative;
    bottom: 0;
    width: 100%;
    img
        margin 8px
        max-width 100px
        cursor pointer
        vertical-align middle
    ul
        padding 35px 10px
        text-align center
</style>