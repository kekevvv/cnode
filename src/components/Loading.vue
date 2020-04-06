<template>
    <div v-if="isLoading">
        <img src="../assets/loading.gif" alt="">
    </div>
</template>
<script>
export default{
    name:'Loading',
    props:{
        'isLoading':{
            type:Boolean,
            defaulte:false
        }
    }
}
</script>
<style scoped lang="stylus">
</style>