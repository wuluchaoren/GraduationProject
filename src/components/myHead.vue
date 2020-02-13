<template>
  <div class="myHead">
    <img class="logo" src="../../static/picture/logo.jpg" alt="" @click="jump('Home')"/>
    <el-menu
      :default-active="active1"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#ffffff"
      style="border-bottom: transparent;"
      active-text-color="#409EFF"
      text-color="#222222"
    >
      <el-menu-item index="1" @click="jump('Home')">首页</el-menu-item>
      <el-menu-item index="2" @click="jump('Goods')">二手</el-menu-item>
      <el-menu-item index="3" @click="jump('Buy')">求购</el-menu-item>
      <el-menu-item index="4" @click="jump('Switch')">切换学校</el-menu-item>
<!--      <el-menu-item index="5">校园动态</el-menu-item>-->
      <el-submenu index="6">
        <template slot="title">更多</template>
        <el-menu-item index="6-1" style="padding-left: 10%" @click="dialogVisible = true">兼职</el-menu-item>
        <el-menu-item index="6-2" style="padding-left: 10%" @click="dialogVisible = true">优惠券</el-menu-item>
        <el-menu-item index="6-3" style="padding-left: 10%" @click="dialogVisible = true">加入我们</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="back">
      <el-menu
        :default-active="active2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#ffffff"
        style="border-bottom: transparent;"
        active-text-color="#409EFF"
        text-color="#222222"
      >
        <el-menu-item index="1" @click="dialogVisible = true">APP</el-menu-item>
        <el-submenu index="2">
          <template slot="title">发布</template>
          <el-menu-item index="2-1" style="padding-left: 10%" @click="jump('ReleaseGoods')">发布商品</el-menu-item>
          <el-menu-item index="2-2" style="padding-left: 10%" @click="jump('ReleaseBuy')">发布求购</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" @click="jump('Apply')">开通学校</el-menu-item>
      </el-menu>
      <div class="login">
        <img src="../../static/picture/about_pic.jpg" alt="" style="height: 70%;margin-right: 10px;"/>
        <div class="login_button" @click="jump('Login')">登录</div>
      </div>
    </div>
    <el-dialog
      title="下载APP获取更多功能"
      :visible.sync="dialogVisible"
      width="30%">
      // :before-close="handleClose"  对话框关闭前的确认
      <img src="../../static/picture/2dc.png" alt="" style="margin-left:2%;width: 30%"/>
      <img src="../../static/picture/2dc.png" alt="" style="margin-left:2%;width: 30%"/>
      <img src="../../static/picture/2dc.png" alt="" style="margin-left:2%;width: 30%"/>
      <span slot="footer" class="dialog-footer">
    <button class="cancel_button" @click="dialogVisible = false">取消</button>
    <button class="confirm_button" @click="dialogVisible = false">确定</button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
    export default {
      name: "myHead",
      props:{
        defaultActive:''
      },
      data(){
        return{
          active1:'',
          active2:'',
          dialogVisible:false
        }
      },
      methods:{
        init:function() {
          if(this.$props.defaultActive==='6') {
            this.$data.active1='';
            this.$data.active2='2-1';
          }
          else if(this.$props.defaultActive==='7') {
            this.$data.active1='';
            this.$data.active2='2-2';
          }
          else if(this.$props.defaultActive==='8') {
            this.$data.active1='';
            this.$data.active2='3';
          }
          else this.$data.active1=this.$props.defaultActive;
          console.log(this.$data.active1);
          console.log(this.$data.active2);
          let Width = window.screen.availWidth;
          if(Width>600){
            require("../assets/css/components/PC/headStylePC.css")
          }
          else {

          }
        },
        jump:function(name){
          this.$router.push({name:name});
        },
      },
      mounted() {
        this.init();
      }
    }
</script>

<style scoped>

</style>
