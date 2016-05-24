<template>
<div class="weui_cell">
  <cell-header><slot name="header"></slot></cell-header>
  <cell-body><slot name="body"></slot></cell-body>
  <cell-footer><slot name="footer"></slot></cell-footer>
</div>
</template>

<script>
import CellHeader from './cell-header.vue';
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';

export default {
  components: {
    CellHeader,
    CellBody,
    CellFooter
  }
};
</script>
