<template>
  <div class="msg">
      <div class="icon_area"><i class="icon i-bighook"></i></div>
      <div class="text_area">
          <h2 class="msg_title">操作成功</h2>
          <p class="msg_desc">内容详情，可根据实际需要安排</p>
      </div>
      <div class="opr_area">
          <p class="btn_area">
              <a href="javascript:;" class="btn btn_primary">确定</a>
              <a href="javascript:;" class="btn btn_default">取消</a>
          </p>
      </div>
      <div class="extra_area">
          <a href="">查看详情</a>
      </div>
  </div>
</template>

<script>
// Button

export default {
  name: 'Msg',
  props: {

  }
}
</script>

<style lang="less">
@import "./style/base/fn";
// @import "./weui_button";

.msg {
    padding-top: @msgPaddingTop;
    text-align: center;

    .icon_area {
        margin-bottom: @msgIconGap;
        i:before{
            font-size: 68px;
         }
    }
    .text_area {
        margin-bottom: @msgTextGap;
        padding:0 20px;
    }
    .msg_title {
        margin-bottom: @msgTitleGap;
        font-weight: 400;
        font-size: 20px;
    }
    .msg_desc {
        font-size: 14px;
        color: @globalTextColor;
    }

    .opr_area {
        margin-bottom: @msgOprGap;
    }

    .extra_area {
        margin-bottom: @msgExtraAreaGap;
        font-size: 14px;
        color: @globalTextColor;
        a{color: @globalLinkColor;}
    }
}

@media screen and (min-height: @msgExtraAreaOfMinHeight) {
    .extra_area {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
}
</style>
