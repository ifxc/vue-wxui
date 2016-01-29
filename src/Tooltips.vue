<style lang="less">

.toptips {
  display: block;
}
.toptips.weui_success {
  background-color: #039702;
}
</style>

<template>

<div v-show="text"
  :class="{
    'toptips': true,
    'warn': (type == 'warn'),
    'success': (type == 'success')
  }">{{text}}</div>

</template>

<script>

export default {
    name: 'Tooltips',
    props: {
      text: {
        type: String
      },
      // 类型：warn,success
      type: {
        type: String,
        default: 'warn'

      },
      // 持续时间(毫秒)
      duration: {
        type: Number,
        default: 3000
      }
    },
    watch: {
      text(val) {
        if (this._timeout) clearTimeout(this._timeout);
        if (val && !!this.duration) {
          this._timeout = setTimeout(()=> this.text = '', this.duration);
        }
      }
    }
}

</script>
