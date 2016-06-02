<template>
  <div class="weui_header">
    <div class="weui_header_left">
      <a class="weui_header_back" @click.preventDefault v-show="leftOptions.showBack" @click="onClickBack">{{leftOptions.backText}}</a>
      <slot name="left"></slot>
    </div>
    <h1 class="weui_header_title"><slot></slot></h1>
    <div class="weui_header_right">
      <a class="weui_header_more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  methods: {
    onClickBack () {
      if (this.leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        history.back()
      }
    }
  }
}
</script>

<style lang="less">
  @import url('index.less');
</style>
