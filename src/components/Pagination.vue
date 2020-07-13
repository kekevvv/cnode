<template>
    <div class="pagination">
        <button @click="changePage('index')">首页</button>
        <button @click="changePage('prev')">上一页</button>
        <button class="pagebtn" v-if="currentPage > 4">......</button>
        <button @click="changePage(page)" v-for="page in pageArray" :class="[{'active':currentPage===page},'pagebtn']">
            {{page}}
        </button>
        <button @click="changePage('next')">下一页</button>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Pagination',
    data(){
        return{
            currentPage:1,
            pageArray:[1,2,3,4,5,'......']
        }
    },
    methods:{
        changePage(page){
            if(typeof page !== 'number'){
                switch(page){
                    case 'prev':
                        $('button.active').prev().click()
                        break
                    case 'next':
                        $('button.active').next().click()
                        break
                    case 'index':
                        this.pageArray = [1,2,3,4,5,'......']
                        this.currentPage = 1
                        break
                }
            }else{
                this.currentPage = page
                if(page === this.pageArray[4]){
                    this.pageArray.shift()
                    this.pageArray.splice(4,0,this.currentPage + 1)
                }else if(page===this.pageArray[0]&&this.currentPage !== 1){
                    this.pageArray.splice(4,1)
                    this.pageArray.unshift(this.currentPage - 1)
                }
            }
            this.$emit('handle',this.currentPage)
        }
    }

}
</script>

<style scoped>
.pagination{
    padding:10px;
    border:1px solid #ddd;
    border-radius:4px;
    margin:16px 8px;
}
button{
    background:#fff;
    color:#333;
    width: 55px;
    height: 29px;
    border:1px solid #ddd;
    border-radius:4px;
    cursor:pointer;
    outline: none;
}
.pagebtn{
    width: 40px;
    margin:2px;
}
.active{
    color: #fff;
    background: #1f1b1b;
}
</style>