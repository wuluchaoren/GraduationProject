<template>
    <div id="root">
      <my-head default-active="8"></my-head>
      <div class="apply_main">
        <div class="apply_main_content">
          <img src="../../static/picture/apply.png" alt="" class="apply_pic"/>
          <div class="apply_input">
            <div class="apply_input_row">
              <div class="apply_input_row_text">学校</div>
              <input class="apply_input_row_content" placeholder="填写学校名称"></input>
            </div>
            <div class="apply_input_row">
              <div class="apply_input_row_text">姓名</div>
              <input class="apply_input_row_content" placeholder="填写您的姓名"></input>
            </div>
            <div class="apply_input_row">
              <div class="apply_input_row_text">QQ</div>
              <input class="apply_input_row_content" placeholder="联系方式至少填写一项"></input>
            </div>
            <div class="apply_input_row">
              <div class="apply_input_row_text">微信</div>
              <input class="apply_input_row_content" placeholder="联系方式至少填写一项"></input>
            </div>
            <div class="apply_input_row">
              <div class="apply_input_row_text">电话</div>
              <input class="apply_input_row_content" placeholder="联系方式至少填写一项"></input>
            </div>
            <button class="apply_input_button">提交</button>
          </div>
        </div>
      </div>
      <tail></tail>
    </div>
</template>

<script>
  import Tail from '../components/tail'
  import MyHead from "../components/myHead";
    export default {
        name: "apply",
      components:{MyHead, Tail},
      data(){
          return{
            activeIndex2:'1',
          }
      },
      methods:{
        getScrollWidth:function () {
          // 获取滚动条宽度
          let noScroll, scroll, oDiv = document.createElement("DIV");
          oDiv.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";
          noScroll = document.body.appendChild(oDiv).clientWidth;
          oDiv.style.overflowY = "scroll";
          scroll = oDiv.clientWidth;
          document.body.removeChild(oDiv);
          return noScroll - scroll;
        },
        init:function() {
          let Height = window.screen.availHeight;
          let Width = window.screen.availWidth;
          document.getElementById("root").style.height = Height + "px";
          if(Width>1500);
          document.getElementById("root").style.width = Width-this.getScrollWidth() + "px";
          // if(Width>600){
          //   require('../assets/css/pages/homeStylePC.css');
          // }
          // else {
          //
          // }
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
  .apply_main{
    height: 1000px;
    width: 100%;
  }
  .apply_main_content{
    width: 30%;
    margin-left: 35%;
    height: 1000px;
  }
  .apply_pic{
    width: 100%;
  }
  .apply_input{
    width: 100%;
    height: 800px;
  }
  .apply_input_row{
    height: 6%;
    margin-top: 5%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .apply_input_button{
    margin-top: 7%;
    margin-left: 20%;
    width: 80%;
    height: 5%;
    border: transparent;
    background: #2d8cf0;
    color: white;
    border-radius: 4px;
  }
  .apply_input_row_text{
    width: 20%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80%;
    color: #515a6e;
  }
  .apply_input_row_content{
    width: 80%;
    height: 60%;
    background: white;
    border-radius: 4px;
    border: #dcdee2 1px solid;
    color: #515a6e;
    font-size: 100%;
    padding-left: 1%;
  }
  input::-webkit-input-placeholder {
    color: #dcdee2;
    font-size: 90%;
  }
</style>
