<template>
    <footer class="footer">
        <a v-link="'toast'"><i><img src="../example/images/icon_nav_toast.png"></i><span>toast</span></a>
        <a v-link="'dialog'"><i><img src="../example/images/icon_nav_dialog.png"></i><span>dialog</span></a>
        <a v-link="'msg'"><i><img src="../example/images/icon_nav_msg.png"></i><span>msg</span></a>
    </footer>
</template>
<style lang="less">
    @import './style/base/fn';
    .footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        box-sizing:border-box;
        padding: 0 5px;
        height: 44px;
        background-color: @gColorPrimary;
        z-index: 10;
        color: #fff;
        a {
            position: relative;
            float: left;
            padding: 5px 10px;
            width: 33.33333333%;
            box-sizing: border-box;
            text-overflow: ellipsis;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            font-size: 12px;
            line-height: 100%;
            color: #ffffff;
            i{
                display: inline-block;
                width:22px;
                height:22px;
                img{
                    width: 100%;
                }
                &:before{
                     text-align: center;
                     color: #ffffff;
                 }
            }
        }
        a:active {
            background-color: @gColorAidBule;
            color: #ffffff;
        }
        span{
            display: block;
        }
    }
    .footer:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #D9D9D9;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    .footer:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        border-left: 1px solid #D9D9D9;
        transform-origin: 0 0;
        transform: scaleX(0.5);
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{}
    }
</script>