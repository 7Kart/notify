<template>
    <div class="user_wrapper">
        <div class="user-avatar-container">
            <img :src="info.avatar_url" alt="">
        </div>
        <div class="user-info">
            <p><a :href="info.html_url" target="_blank">{{info.login}}</a></p>    
            <p>{{info.name}}</p>
        </div> 
        <div v-if="info.public_repos > 0" class="ditail-block">
            <div class="count-of-rep"> ({{info.public_repos}}) </div>
            <div :class="[showRep ? 'open-rep':'close-rep' , 'show-rep-triangle']" @click="openRepList()"> </div>
        </div>                       
    </div>
</template>

<script>
export default {
    props:{
        info: {
            type: Object,
        },
    },
    data(){
        return{
            showRep: false
        }
    },
    methods:{
        openRepList(){
            this.showRep = !this.showRep;
            this.$emit('showRep', this.showRep)
        }
    }
}
</script>

<style lang="scss" scoped>
    .user_wrapper{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        width: 400px;
        img{
            height: 60px;
            border-radius: 30px;
            border: 1px solid #dbdbdb;
        }
        div{
            margin:0 5px 0 5px;
        }
    }    

    .ditail-block{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 50px;
        div{
            margin: 0;
        }
    }

    .show-rep-triangle{
        width: 0;
        height: 0;
        cursor: pointer;
        
    }

    .close-rep{
        border-top: 10px solid #5247e7;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;        
    }

    .close-rep:hover{
        border-top: 14px solid #5247e7;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
    }

    .open-rep{
        border-bottom: 10px solid #5247e7;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }

    .open-rep:hover{
        border-bottom: 14px solid #5247e7;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
    }
</style>