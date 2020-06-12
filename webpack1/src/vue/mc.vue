<template>
    <div>
        <transition>
            <h2 class="orange-text" v-if="isShow">{{ this.msg }}</h2>
        </transition>
        <button @click="change">运行</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "MyComponent",
    data() {
        return {
            msg: "我是Vue框架",
            isShow: false
        };
    },
    methods:{
        change(){
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style>
    .orange-text{
        color: orange;
    }
    h2{
        position: absolute;
        top: 20px;
    }
    
    @keyframes run {
        0%{
            left: 0px;
            color:red;
        }
        25%{
            left: 120px;
            color:rgb(214, 88, 3);
            font-size: 15px;
        }
        50%{
            left: 180px;
            color:rgb(186, 0, 233);
            font-size: 40px;
        }
        75%{
            left: 150px;
            color:rgb(64, 6, 224);
            font-size: 20px;
        }
        100%{
            left: 0px;
            color:rgb(166, 231, 14);
        }
    }
    .v-enter-active{
        animation: run 5s linear;
    }
    .v-leave-active{
        animation: run 5s linear reverse;
    }
</style>