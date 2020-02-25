<template>


    <div id="root" class="root">
      <div class="logo">
         <button type="button" class="logoimg"></button>
           <p class="login_title">HANZI CAMPUS</p>
      </div>
      <div class="intro">
        <p id="big">HELLO,ITEMS.</p>
        <p id="small">We provide school goods trading platform in order to enhance the value of the items.<br>The way items should be.</p>
          <button type="button" class="logoimg2"></button>
      </div>
      <div class="main">
        <div class="login_main">
          <div class="login_main_content">
            <div class="login_main_row">
              <!-- <div class="login_main_row_text">手机号</div> -->
              <input class="login_phone_input" placeholder="请输入手机号"></input>
               <button class="login_check_send">获取验证码</button>
            </div>
            <div class="login_main_row">
              <!-- <div class="login_main_row_text">验证码</div> -->
              <input class="login_check_input" placeholder="请输入验证码"></input>
             
            </div>
            <div class="login_main_row">
              <button class="login_main_button">登陆</button>
            </div>
                 <div class="login_tip">首次登录将自动注册为平台用户</div>
                   <!-- <div class="order">
   	                <span class="line"></span>
   	                <span class="txt">使用其他方式登录</span>
   	                <span class="line"></span>
                   <div>
          <button type="button" class="sina"></button>
         <button type="button" class="qq"></button>
         <button type="button" class="wechat"></button> -->
                   </div>
                   </div> 
          </div>
        </div>
          <!-- <div class="loginother">
            <div class="fastlogin">
            <p class="fastlogintitle">快捷登陆方式</p>
           <img class="erweima" src="../../static/picture/2dc.png" style="width:80px;height:80px;" alt=""/>
         </div>
         </div> -->
      </div> 
  </div>

  
   
</template>

<script>
    export default {
      name: "login",
      data(){
        return{
          login_form:[{
            phone:'',
            check:''
          }]
        }
      },
      methods:{
        init:function() {
          let Width = window.screen.availWidth;
          document.getElementById("root").style.width = Width+"px";
          if(Width>1200){
            require('../assets/css/pages/PC/loginStylePC.css');
          }
          else {
            require('../assets/css/pages/Mobile/loginStyleMobile.css')
          }
        },
        jump:function(name){
          this.$router.push({name:name});
        }
      },
      mounted() {
        this.init();
      },
    }
</script>

<style scoped>

</style>
