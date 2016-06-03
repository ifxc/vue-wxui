<template>
    <div v-show="show" transition="fade" class="weui_popup">
        <div class="weui_popup_mask" @click="change()"></div>
        <div v-show="show" transition="popup" class="weui_popup_dialog" :style="{height:height}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            show: {
                type: Boolean,
                default: false,
                twoWay: true
            },
            height: {
                type: String,
                default: 'auto'
            }
        },
        methods: {
            change() {
                this.show = !this.show;
            }
        }
    }
</script>
<style>
    .weui_popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }
    .weui_popup_dialog {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #eee;
        box-shadow: 0 -1px 3px #666;
    }
    .weui_popup_mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        tap-highlight-color: rgba(0,0,0,0);
    }
    .fade-transition{
        transition-property: opacity;
        transition-duration: 200ms;
        transition-timing-function: ease-in;
    }
    .popup-transition {
        transition-property: transform;
        transition-duration: 200ms;
    }
    .popup-enter, .popup-leave {
        transform: translate3d(0, 100%, 0);
    }
    .popup-enter{
        transition-timing-function: ease-out;
    }
    .popup-leave{
        transition-timing-function: ease-in;
    }
    .fade-enter,
    .fade-leave{
        opacity: 0;
    }
</style>