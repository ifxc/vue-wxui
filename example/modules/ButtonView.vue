<template>
  <div class="page">
      <div class="hd">
          <h1 class="page_title">Button</h1>
      </div>
      <div class="bd spacing">
          <a href="javascript:;" class="btn btn_default">默认</a>
          <a href="javascript:;" class="btn btn_disabled btn_default">不可点击</a>

          <a href="javascript:;" class="btn btn_primary">按钮</a>
          <a href="javascript:;" class="btn btn_warn">警告按钮</a>

          <div class="btn_area">
              <a href="javascript:;" class="btn btn_plain_default">边框1</a>
              <a href="javascript:;" class="btn btn_plain_primary">边框2</a>

              <a href="javascript:;" class="btn btn_mini btn_default">按钮</a>
              <a href="javascript:;" class="btn btn_mini btn_disabled btn_default">按钮</a>
              <a href="javascript:;" class="btn btn_mini btn_primary">按钮</a>
              <a href="javascript:;" class="btn btn_mini btn_warn">按钮</a>
          </div>
          <!--<div class="btn_area btn_area_inline">
              <a href="javascript:;" class="btn btn_default">默认</a>
              <a href="javascript:;" class="btn btn_disabled btn_default">no</a>
              <a href="javascript:;" class="btn btn_primary">按钮</a>
              <a href="javascript:;" class="btn btn_warn">警告</a>
          </div>-->
      </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonView',
  data () {
    return {
      item: {}
    }
  }
}
</script>

<style lang="less">
@import "../../src/style/widget/button/button.less";
</style>
