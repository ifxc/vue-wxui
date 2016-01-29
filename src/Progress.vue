<style lang="less">

@import "./style/base/fn.less";
.progress {
    display: flex;
    align-items: center;
}

.progress_bar {
    background-color: @progressBg;
    height: @progressHeight;
    flex: 1;
}

.progress_inner_bar {
    width: 0;
    height: 100%;
    background-color: @progressColor;
}

.progress_opr {
    display: block;
    margin-left: 15px;
    font-size: 0;
    color: @progressClose;
    i:before{
        color: @progressClose;
    }
}

</style>

<template>

<div v-if="show" class="progress">
    <div class="progress_bar">
        <div class="progress_inner_bar" :style="{ width: size + '%' }"></div>
    </div>
    <a v-if="showCloseBtn" href="javascript:;" class="progress_opr" @click="dispatch('on-progress-cancel')">
        <i class="icon i-cross"></i>
    </a>
</div>

</template>

<script>

import Icon from './Icon.vue'

export default {
    name: 'Progress',
    props: {
        //进度条长度:[1~100]
        size: {
            // type:Number,
            default: 0,
            //TODO size=0 bug
            // validator: function (value) {
            //   // console.log(value)
            //   if(value < 0){
            //     return false;
            //   }
            //   if(value > 100){
            //     return false;
            //   }
            //   return value;
            // }
        },
        showCloseBtn: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            show: true
        };
    },
    methods: {
        dispatch(eventStr) {
            this.$dispatch(eventStr);
            this.show = false;
        }
    }
}

</script>
