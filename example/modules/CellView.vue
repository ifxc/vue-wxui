<template>
  <div class="page">
    <div class="hd">
        <h1 class="page_title">Cell</h1>
    </div>
    <div class="bd">
        <div class="cells_title">带说明的列表项</div>
        <div class="cells">
            <div class="cell">
                <div class="cell_bd cell_primary">
                    <p>标题文字</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </div>
        </div>
        <div class="cells_title">带图标、说明的列表项</div>
        <div class="cells cells_split">
            <div class="cell">
                <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="cell_bd cell_primary">
                    <p>标题文字</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </div>
            <div class="cell">
                <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="cell_bd cell_primary">
                    <p>标题文字</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </div>
        </div>

        <div class="cells_title">带跳转的列表项</div>
        <div class="cells cells_access">
            <a class="cell" href="javascript:;">
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                </div>
            </a>
            <a class="cell" href="javascript:;">
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                </div>
            </a>
        </div>

        <div class="cells_title">带说明、跳转的列表项</div>
        <div class="cells cells_access">
            <a class="cell" href="javascript:;">
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </a>
            <a class="cell" href="javascript:;">
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </a>

        </div>

        <div class="cells_title">带图标、说明、跳转的列表项</div>
        <div class="cells cells_access">

            <a class="cell" href="javascript:;">
                <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </a>
            <a class="cell" href="javascript:;">
                <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                    说明文字
                </div>
            </a>
        </div>

        <div class="cells_title">单选列表项</div>
        <div class="cells cells_radio">
            <label class="cell check_label" for="x11">
                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                    <input type="radio" class="check" name="radio1" id="x11">
                    <span class="icon i_checked"></span>
                </div>
            </label>
            <label class="cell check_label" for="x12">

                <div class="cell_bd cell_primary">
                    <p>cell standard</p>
                </div>
                <div class="cell_ft">
                    <input type="radio" name="radio1" class="check" id="x12" checked="checked">
                    <span class="icon i_checked"></span>
                </div>
            </label>
        </div>
        <div class="cells_title">复选列表项</div>
        <div class="cells cells_checkbox">
            <label class="cell check_label" for="s11">
                <div class="cell_hd">
                    <input type="checkbox" class="check" name="checkbox1" id="s11" checked="checked">
                    <i class="icon i_checked"></i>
                </div>
                <div class="cell_bd cell_primary">
                    <p>standard is dealt for u.</p>
                </div>
            </label>
            <label class="cell check_label" for="s12">
                <div class="cell_hd">
                    <input type="checkbox" name="checkbox1" class="check" id="s12">
                    <i class="icon i_checked"></i>
                </div>
                <div class="cell_bd cell_primary">
                    <p>standard is dealicient for u.</p>
                </div>
            </label>
        </div>

        <div class="cells_title">开关</div>
        <div class="cells cells_form">
            <div class="cell cell_switch">
                <div class="cell_hd cell_primary">标题文字</div>
                <div class="cell_ft">
                    <input class="switch" type="checkbox"/>
                </div>
            </div>
        </div>

        <div class="cells_title">表单</div>
        <div class="cells cells_form">
            <div class="cell">
                <div class="cell_hd"><label class="label">qq</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="number" placeholder="请输入qq号"/>
                </div>
            </div>
            <div class="cell vcode">
                <div class="cell_hd"><label class="label">验证码</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="number" placeholder="请输入验证码"/>
                </div>
                <div class="cell_ft">
                    <img src="/example/images/vcode.jpg" />
                </div>
            </div>
            <div class="cell">
                <div class="cell_hd"><label class="label">银行卡</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="number" placeholder="请输入银行卡号"/>
                </div>
            </div>
            <div class="cell vcode cell_warn">
                <div class="cell_hd"><label class="label">验证码</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="number" placeholder="请输入验证码"/>
                </div>
                <div class="cell_ft">
                    <i class="icon i-roundwarning"></i>
                    <img src="/example/images/vcode.jpg" />
                </div>
            </div>
        </div>
        <div class="cells_tips">底部说明文字底部说明文字</div>
        <div class="btn_area">
            <a class="btn btn_primary" href="javascript:">确定</a>
        </div>
        <div class="cells_title">上传</div>
        <div class="cells cells_form">
            <div class="cell">
                <div class="cell_bd cell_primary">
                    <div class="uploader">
                        <div class="uploader_hd cell">
                            <div class="cell_bd cell_primary">图片上传</div>
                            <div class="cell_ft">0/2</div>
                        </div>
                        <div class="uploader_bd">
                            <ul class="uploader_files">
                                <li class="uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                                <li class="uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                                <li class="uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                                <li class="uploader_file uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
                                    <div class="uploader_status_content">
                                        <i class="icon i-roundwarning"></i> 
                                    </div>
                                </li>
                                <li class="uploader_file uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
                                    <div class="uploader_status_content">50%</div>
                                </li>
                            </ul>
                            <div class="uploader_input_wrp">
                                <input class="uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cells_title">文本域</div>
        <div class="cells cells_form">
            <div class="cell">
                <div class="cell_bd cell_primary">
                    <textarea class="textarea" placeholder="请输入评论" rows="3"></textarea>
                    <div class="textarea_counter"><span>0</span>/200</div>
                </div>
            </div>
        </div>
        <div class="cells_title">表单报错</div>
        <div class="cells cells_form">
            <div class="cell cell_warn">
                <div class="cell_hd"><label for="" class="label">卡号</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="tel" value="weui input error" placeholder="请输入卡号"/>
                </div>
                <div class="cell_ft">
                    <i class="icon i-roundwarning"></i>
                </div>
            </div>
            <div class="cell">
                <div class="cell_hd"><label for="" class="label">日期</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="date" value=""/>
                </div>
            </div>
            <div class="cell">
                <div class="cell_hd"><label for="" class="label">时间</label></div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="datetime-local" value="" placeholder=""/>
                </div>
            </div>
        </div>
        <div class="cells_title">选择</div>
        <div class="cells cells_split">

            <div class="cell cell_select select_before">
                <div class="cell_hd">
                  <we-select :options="areaCodeOptions" :selected.sync="areaCodeSelected"></we-select>
                </div>
                <div class="cell_bd cell_primary">
                    <input class="input" type="text" placeholder="请输入号码"/>
                </div>
            </div>
        </div>
        <div class="cells_title">选择</div>
        <div class="cells cells_split">
            <div class="cell cell_select">
                <div class="cell_bd cell_primary">
                    <we-select :options="contactOptions" :selected.sync="contactSelected"></we-select>
                </div>
            </div>
            <div class="cell cell_select select_after">
                <div class="cell_hd">
                    国家/地区{{nationSelected}}
                </div>
                <div class="cell_bd cell_primary">
                    <we-select :after="true" :options="nationOptions" :selected.sync="nationSelected">
                        <span slot="header">国家/地区</span>
                    </we-select>
                </div>
            </div>
        </div>
        <Tooltips :text.sync="tooltipsWarn" :type="'warn'"></Tooltips>
    </div>
  </div>
</template>

<script>
import WeSelect from './../../src/Select.vue'
import Tooltips from './../../src/Tooltips.vue'

export default {
  name: 'CellView',
  components: {
    WeSelect,
    Tooltips
  },
  data() {
    return{
      areaCodeOptions: ['+86', '+80', '+84', '+87'],
      areaCodeSelected: 1,
      contactOptions: ['微信号', 'QQ号', 'Email'],
      contactSelected: 2,
      nationOptions:['中国', '美国', '英国'],
      nationSelected: 1,
      errorCount: 3,
      errorTooltips: false,
      tooltipsWarn: ''
    }
  },
  ready() {
    this.tooltipsWarn = '温馨提示：你写错啦你知不知道';
    const handler = setInterval(() => {
    if (this.errorCount === 1) {
      clearInterval(handler);
    }
     this.errorCount -= 1;
    }, 1000);
 }
}
</script>

<style lang="less">
@import "../../src/style/widget/cell/cell_global";

@import "../../src/style/widget/cell/access";
@import "../../src/style/widget/cell/check";
@import "../../src/style/widget/cell/form";
@import "../../src/style/widget/cell/switch";
@import "../../src/style/widget/cell/uploader";
</style>
