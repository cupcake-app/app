(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bf6adb5"],{"163b":function(t,i,n){"use strict";var a=n("a8f2"),e=n.n(a);e.a},2687:function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"user-feedback",style:t.style},[n("div",{staticClass:"com-title-bar"},[n("div",{staticClass:"box"},[n("div",{staticClass:"back",on:{click:t.$routerBack}}),n("div",{staticClass:"title"},[t._v("意见反馈")]),t._m(0)])]),n("div",{staticClass:"option"},[n("div",{staticClass:"box"},[n("div",{staticClass:"item",class:0===t.option.active?"active":"",on:{click:function(i){return t.optionHandel(0,"无法播放")}}},[t._v("无法播放")]),n("div",{staticClass:"item",class:1===t.option.active?"active":"",on:{click:function(i){return t.optionHandel(1,"播放卡顿")}}},[t._v("播放卡顿")]),n("div",{staticClass:"item",class:2===t.option.active?"active":"",on:{click:function(i){return t.optionHandel(2,"搜索不准")}}},[t._v("搜索不准")]),n("div",{staticClass:"item",class:3===t.option.active?"active":"",on:{click:function(i){return t.optionHandel(3,"推荐不准")}}},[t._v("推荐不准")]),n("div",{staticClass:"item",class:4===t.option.active?"active":"",on:{click:function(i){return t.optionHandel(4,"无法下载")}}},[t._v("无法下载")]),n("div",{staticClass:"item",class:5===t.option.active?"active":"",on:{click:function(i){return t.optionHandel(5,"其他")}}},[t._v("其他")])])]),n("div",{staticClass:"content"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"描述问题"},domProps:{value:t.content},on:{input:function(i){i.target.composing||(t.content=i.target.value)}}})]),n("div",{staticClass:"x-button"},[n("div",{staticClass:"submit",on:{click:t.submitHandel}},[t._v("提交")])])])},e=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"action"},[n("div",{staticClass:"button"})])}],s=(n("a481"),{data:function(){return{style:{height:"0px"},option:{active:0,text:"无法播放"},content:""}},mounted:function(){var t=window.innerHeight;this.style.height=t+"px"},methods:{optionHandel:function(t,i){this.option.active=t,this.option.text=i},submitHandel:function(){var t=this;""!==this.content?(this.$toast.loading({mask:!1,message:"提交中...",duration:0,forbidClick:!0}),this.$axios.post("/api/app/user/feedback/create",{option:this.option.text,content:this.content}).then((function(i){var n=i.data.code;200===n&&(t.$toast.clear(),t.$dialog.alert({title:"提示",message:"感谢您的反馈，我们会努力完善~"}).then((function(){t.$router.replace("/user/index")})))}))):this.$toast("请输入反馈内容")}}}),o=s,c=(n("163b"),n("2877")),l=Object(c["a"])(o,a,e,!1,null,"37c86a9a",null);i["default"]=l.exports},a8f2:function(t,i,n){}}]);
//# sourceMappingURL=chunk-5bf6adb5.f5d4cc82.js.map