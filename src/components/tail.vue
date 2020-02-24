<template>
  <div id="tail" class="tail">
    <div class="tail-adjust">
      <div class="tail_main">
        <div class="tail_main_content">
          <div class="tail_main_contact">
            <div style="font-weight: bolder">联系我们 / contact us</div>
            <div>Q群：12312312312</div>
            <div>QQ：999999999</div>
            <div>地址：王世奇1厘米</div>
          </div>
          <div class="tail_main_2dc">
            <img src="../../static/picture/2dc.png" alt=""/>
            <div>关注微信公众平台</div>
          </div>
          <div class="tail_main_tel">
            <div class="tail_main_tel_content">TEL：54188</div>
            <div class="tail_main_tel_tag">24小时在线客服</div>
            <div class="tail_main_tel_icon">
              <img class="tail_main_tel_icon_content" src="../../static/picture/icon.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tail_copyright">版权所有 © All Rights Reserved，憨ICP备1234567号-999</div>
  </div>
</template>

<script>
    export default {
      name: "tail",
      methods:{
        init:function() {
          let Width = window.screen.availWidth;
          if(Width>1200){
            require("../assets/css/components/PC/tailStylePC.css");
          }
          else {

          }
        },
      },
      mounted() {
        this.init();
      }
    }
</script>

<style scoped>
</style>
