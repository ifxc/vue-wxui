<style lang="less">

@import "./style/base/fn";
@dialogBackgroudColor: #FAFAFC;
@dialogLineColor: @gColorTitle;
@dialogLinkColor: @gColorTitle;
.dialog {
    position: fixed;
    z-index: 13;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: @dialogBackgroudColor;
    text-align: center;
    border-radius: 3px;
    .dialog_confirm & {
        .dialog_hd {
            text-align: center;
            padding: 1.2em 20px .5em;
        }
        .dialog_bd {
            text-align: left;
        }
    }
}
.dialog_mask {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
}
.dialog_hd {
    padding: 1.2em 0 .5em;
}

.dialog_title {
    font-weight: 400;
    font-size: 17px;
}

.dialog_bd {
    padding: 0 20px;
    font-size: 15px;
    color: @globalTextColor;
}

.dialog_ft {
    position: relative;
    line-height: 42px;
    margin-top: 20px;
    font-size: 17px;
    a {
        display: block;
        color: @dialogLinkColor;
        text-decoration: none;
        .setTapColor;
        &:active,
        &:hover {
            text-decoration: none;
        }
    }
    &:after {
        content: " ";
        .setLine(@gColorHr);
    }
    .dialog_confirm & {
        a {
            position: relative;
            float: left;
            width: 50%;
            &:after {
                content: " ";
                .setLine(@dialogLineColor, V);
            }
            &:first-child {
                &:after {
                    display: none;
                }
            }
            &:last-child {
                float: none;
                width: auto;
                overflow: hidden;
                *zoom: 1;
            }
        }
    }
}

.btn_dialog {
    &.default {
        color: @gColorTitle;
    }
    &.primary {
        color: @gColorPrimary;
    }
}

@media screen and (min-width: 1024px) {
    .dialog {
        width: 35%;
    }
}

</style>

<template>

<div :class="'dialog_' + type" v-show="show">
    <div class="dialog_mask"></div>
    <div class="dialog">
        <div class="dialog_hd">
            <strong class="dialog_title">{{title}}</strong>
        </div>
        <div class="dialog_bd">
            <slot>请注意，这里可以自定义(支持html)</slot>
        </div>
        <div class="dialog_ft">
            <a href="javascript:;" class="btn_dialog default" v-if="type === 'confirm'" @click="dispatch($event,  'on-' + type + '-cancel')">{{cancelBtn}}</a>
            <a href="javascript:;" class="btn_dialog primary" @click="dispatch($event, 'on-' + type + '-confirm')">{{confirmBtn}}</a>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'Dialog',
    props: {
        //类型：alert,confirm
        type: {
            type: String,
            required: false,
            default: 'alert'
        },
        //标题
        title: {
            type: String,
            required: false,
            default: '温馨提示'
        },
        show: {
            type: Boolean,
            required: true,
            default: true
        },
        cancelBtn: {
            type: String,
            required: false,
            default: '取消'
        },
        confirmBtn: {
            type: String,
            required: false,
            default: '确定'
        }
    },
    methods: {
        // cancel() {
        //     this.show = false;
        // },
        // confirm() {
        //     this.show = false;
        // }，
        dispatch(event, eventStr) {
            this.$dispatch(eventStr);
            // this.show = false;
        }
    }
}

</script>
