<template>
	<li class="timeline_item">
		<div :class=" {'timeline_item_head': !isFirst,'timeline_item_head_first': isFirst }" :style="headStyle">
			<icon v-show="isFirst" name="success_no_circle" :class="'timeline_item_checked'"></icon>
		</div>
		<div class="timeline_item_tail" :style="tailStyle"></div>
		<div class="timeline_item_content">
			<slot></slot>
		</div>
	</li>
</template>

<script type="text/ecmascript-6">
import Icon from '../../components/icon/icon.vue'
export default {
  data () {
    return {
      isLast: true,
      isFirst: true,
      headStyle: { backgroundColor: this.$parent.color }
    }
  },
  ready () {
    this.$parent.setChildProps()
  },
  beforeDestroy () {
    // this will be null
    const $parent = this.$parent;
    this.$nextTick(() => {
      $parent.setChildProps()
    })
  },
  components: {
    Icon
  },
  computed: {
    tailStyle () {
      return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color }
    }
  }
}
</script>

