<template>
  <div id="root">
    <my-head default-active="7"/>
    <tail/>
  </div>
</template>

<script>
    import MyHead from "../components/myHead";
    import Tail from "../components/tail";

    export default {
      components: {MyHead, Tail},
        name: "release_buy",
      methods: {
        getScrollWidth: function () {
          // 获取滚动条宽度
          let noScroll, scroll, oDiv = document.createElement("DIV");
          oDiv.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";
          noScroll = document.body.appendChild(oDiv).clientWidth;
          oDiv.style.overflowY = "scroll";
          scroll = oDiv.clientWidth;
          document.body.removeChild(oDiv);
          return noScroll - scroll;
        },
        init: function () {
          let Height = window.screen.availHeight;
          let Width = window.screen.availWidth;
          document.getElementById("root").style.height = Height + "px";
          document.getElementById("root").style.width = Width - this.getScrollWidth() + "px";
          console.log(Width);
          console.log(Width - this.getScrollWidth());
          // if(Width>600){
          //   require('../assets/css/pages/homeStylePC.css');
          // }
          // else {
          //
          // }
        },
        jump: function (name) {
          this.$router.push({name: name});
        },
      },
      mounted() {
        this.init();
      },
    }
</script>

<style scoped>
</style>
