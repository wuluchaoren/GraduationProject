<template>
    <div id="root" class="root">
      <div class="login_title">[憨子校园]</div>
      <div class="main">
        <div class="login_main">
          <div class="login_main_content">
            <div class="login_main_row">
              <div class="login_main_row_text">手机号</div>
              <input class="login_phone_input" placeholder="请输入手机号"></input>
            </div>
            <div class="login_main_row">
              <div class="login_main_row_text">验证码</div>
              <input class="login_check_input" placeholder="请输入验证码"></input>
              <button class="login_check_send">获取验证码</button>
            </div>
            <div class="login_main_row">
              <button class="login_main_button">登陆</button>
            </div>
            <div class="login_tip">首次登录将自动注册为平台用户</div>
          </div>
        </div>
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
          if(Width>600){
            require('../assets/css/pages/PC/loginStylePC.css');
          }
          else {

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
