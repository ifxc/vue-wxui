<template>
  <div class="loading_toast">
      <div class="mask_transparent"></div>
      <div class="toast">
          <div class="loading">
              <div v-for="n in 12" class="loading_leaf" :class="'loading_leaf_' + n"></div>
          </div>
          <p class="toast_content">数据加载中</p>
      </div>
  </div>
</template>

<script>
/**
 * 组件外部手动关闭
 */
export default {

  name: 'Loading'
}
</script>

<style lang="less">
@import "./style/base/fn";

</style>
