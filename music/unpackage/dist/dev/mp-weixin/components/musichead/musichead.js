"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "musichead",
  data() {
    return {};
  },
  props: ["title", "icon", "color", "iconBlack"],
  methods: {
    handleToBack() {
      common_vendor.index.navigateBack();
    },
    handleToHome() {
      common_vendor.index.navigateTo({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.icon
  }, $props.icon ? {
    b: common_vendor.o((...args) => $options.handleToBack && $options.handleToBack(...args)),
    c: common_vendor.o((...args) => $options.handleToHome && $options.handleToHome(...args)),
    d: $props.iconBlack ? 1 : ""
  } : {}, {
    e: common_vendor.t($props.title),
    f: $props.color
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e0b6e5e0"], ["__file", "C:/Users/Administrator/Desktop/\u9648\u8363\u76F8\u9879\u76EE\u56DB/music/components/musichead/musichead.vue"]]);
wx.createComponent(Component);
