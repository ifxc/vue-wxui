<template>
    <header class="header_bar">
        <div class="left" v-link="'index'"><i class="prev"></i></div>
        <h1 class="center">HeaderBar</h1>
        <div class="right" v-link="'index'"><span>确定</span></div>
    </header>
</template>
<style lang="less">
    @import './style/base/fn';
    .header_bar {
        position: absolute;
        right: 0;
        left: 0;
        box-sizing:border-box;
        padding: 5px;
        height: 44px;
        background-color: @gColorPrimary;
        z-index: 10;
        color: #fff;
        font-size: 18px;
        .left,.right{
            position: absolute;
            top: 5px;
            bottom: 5px;
            line-height: 34px;
            i{
                font-style: normal;
                font-size: 22px;
                &:before{
                     font-family: "iconfont" !important;
                 }
            }
        }
        .left{
            left:5px;
            i.prev:before{
                content: "\E626";
            }
        }
        .right{
            right:5px;
            i.next:before{
                content: "\E628";
            }
        }
        .center{
            line-height: 34px;
            font-size: 18px;
            text-align: center;
        }
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>