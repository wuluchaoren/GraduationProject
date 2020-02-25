<template>
  <div id="root">
    <my-head default-active="2"/>
    <div class="adjust">
      <div class="goods_main">
        <div class="goods_header">
          <div class="goods_header_left">

          </div>
          <div class="goods_header_right">
            <el-carousel :interval="5000" arrow="always" height="400px">
              <el-carousel-item v-for="item in carousel_list" :key="item">
                <img :src="item" alt="" style="height: 100%;width: 100%;"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="goods_tag">
          <div v-for="item in tags" class="goods_tag_item">{{item}}</div>
        </div>
        <div class="goods_order">
          <div>时间</div>
          <div>价格</div>
          <div>浏览量</div>
        </div>
        <div class="goods_content">
          <div class="goods_item_list">123</div>
          <div class="goods_item_list">123</div>
          <div class="goods_item_list">123</div>
          <div class="goods_item_list">123</div>
          <div class="goods_item_list">123</div>
        </div>

      </div>
    </div>
    <tail/>
  </div>
</template>

<script>
    import Tail from "../components/tail";
    import MyHead from "../components/myHead";
    export default {
        name: "goods",
      components: {MyHead, Tail},
      data(){
          return{
            carousel_list:[
              '../../static/picture/carousel1.jpg',
              '../../static/picture/logo.jpg',
              '../../static/picture/background.jpg',
              '../../static/picture/login.jpg'
            ],
            tags:['所有学校','所有学校','所有学校',]
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


  .adjust{
    width:1200px;
    min-height: 80%;
    margin: 0 auto;
  }
  .goods_main{
    width: 100%;
    min-height: 70%;
  }
  .goods_header{
    height: 400px;
    width: 100%;
    margin: 30px 0 10px 0;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    display: flex;
    box-shadow:0 0 10px #bdbfc2;
  }
  .goods_header_left{
    background: antiquewhite;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    width: 15%;
    height: 100%;
  }
  .goods_header_right{
    width: 85%;
    height: 100%;
  }
  .goods_tag{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .goods_tag_item{
    height: 24px;
    font-size: 13px;
    color: #515a6e;
    border: solid 1px #e8eaec;
    border-radius: 3px;
    padding: 0 5px 0 5px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    transition: all .3s;
  }
  .goods_tag_item:hover{
    box-shadow:0 0 3px #bdbfc2;
  }
  .goods_order{
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goods_content{
    display: flex;
    justify-content: space-between;
  }
  .goods_item_list{
    width: 19%;
    height: 111px;
    background: #5daf34;
    border: #3c3c3c 1px solid;
  }
</style>
