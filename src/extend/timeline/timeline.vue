<template>
	<div class="weui_timeline">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    color: {
      type: String,
      default: '#04BE02'
    }
  },
  methods: {
    setChildProps () {
      if (!this.$children) return;
      const len = this.$children.length;
      this.$children.forEach((child, index) => {
        child.isLast = index === len - 1;
        child.isFirst = index === 0;
      })
    }
  }
}
</script>

<style lang="less">
  @import "index.less";
</style>
