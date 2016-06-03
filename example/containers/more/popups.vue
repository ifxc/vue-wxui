<template>
    <div class="page popups">
        <div class="hd">
            <h1 class="page_title">Popups</h1>
        </div>
        <div class="bd">
            <weui-button type="primary" @click="change()">打开Popups</weui-button>
            <popups :show.sync="show" :height="'40%'">
                <weui-button type="primary" @click="change()">关闭Popups</weui-button>
            </popups>
        </div>
    </div>
</template>

<script>
    import {Popups, Button} from 'vue-wxui'
    export default{
        data() {
            return {
                show: false
            }
        },
        methods: {
            change() {
                this.show = !this.show;
            }
        },
        components:{Popups, 'weui-button': Button}
    }
</script>

<style>
    .weui_btn{
        margin-top: 20px;
        width: 80%;
    }
</style>