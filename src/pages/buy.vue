<template>
  <div id="root">
    <my-head default-active="3"/>
    <div class="buy_main">
      <div v-for="item in buy_list" class="buy_main_item">
        <div class="buy_item_user">
          <img :src="item.user.pic" alt="" class="user_pic"/>
          <div class="user_name">{{item.user.name}}</div>
          <div class="user_school">{{item.user.school}}</div>
          <div class="user_school">更新于{{item.date}}</div>
        </div>
        <div class="buy_item_title">{{item.title}}</div>
        <div class="buy_item_main">
          <div class="buy_item_main_left">
            <div class="buy_item_main_left_content">{{item.content}}</div>
            <div class="buy_item_main_left_contact">{{item.contact}}</div>
          </div>
          <div class="buy_item_main_right">
            <img src="../../static/picture/background.jpg" alt="" style="width: 80%;border-radius: 3px"/>
          </div>
        </div>
        <div class="buy_item_tail">
          <div v-for="item1 in item.tag" class="buy_item_tag">{{item1}}</div>
        </div>
      </div>
      <div class="next_pages">
        <button class="more" @click="more">加载更多...</button>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
  import Tail from "../components/tail";
  import MyHead from "../components/myHead";
    export default {
        name: "buy",
      data(){
          return{
            buy_list:[
              {
                user:{
                  name:'李伟泽',
                  pic:'../../../static/picture/about_pic.jpg',
                  school:'厦门大学'
                },
                date:'2020-1-6',
                title:'求购一颗王世奇的头',
                content:'求购一颗王世奇的头,1233333333333333333333333333333333333333',
                contact:'海韵二507，QQ：54188',
                tag:['头真大','头真大','头真大','头真大','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑',],
                buy_pic:''
              }
            ]
          }
      },
      components: {MyHead, Tail},
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
          // document.getElementById("root").style.position="relative";
          console.log(Width);
          console.log(Width-this.getScrollWidth());
          // if(Width>600){
          //   require('../assets/css/pages/homeStylePC.css');
          // }
          // else {
          //
          // }
        },
        jump:function(name){
          this.$router.push({name:name});
        },
        more:function(){
          this.$data.buy_list.push(
            {
              user:{
                name:'李伟泽',
                pic:'../../../static/picture/about_pic.jpg',
                school:'厦门大学'
              },
              date:'2020-1-6',
              title:'求购一颗王世奇的头',
              content:'求购一颗王世奇的头,1233333333333333333333333333333333333333',
              contact:'海韵二507，QQ：54188',
              tag:['真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑','真丑',],
              buy_pic:''
            }
          )
        }
      },
      mounted() {
        this.init();
      },

    }
</script>

<style scoped>
  .buy_main{
    min-height: 67%;
    width: 100%;
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .buy_main_item{
    min-height: 200px;
    width: 70%;
    margin-top: 20px;
    padding: 10px 15px 15px 20px;
    border-radius: 5px;
    border: #e8eaec 1px solid;
    transition: all .2s;
  }
  .buy_main_item:hover{
    box-shadow:0 0 5px #bdbfc2;
  }
  .buy_item_user{
    min-height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #07111b;
  }
  .user_pic{
    height: 30px;
  }
  .user_name{
    margin-left: 10px;
    font-size: 16px;
  }
  .user_school{
    color: #888888;
    font-size: 13px;
    margin-left: 10px;
  }
  .buy_item_title{
    min-height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: bolder;
  }
  .buy_item_main{
    width: 100%;
    min-height: 90px;
    display: flex;
  }
  .buy_item_main_left{
    width: 80%;
    height: 90px;
  }
  .buy_item_main_left_content{
    min-height: 54px;
    width: 100%;
    font-size: 14px;
    color: #616776;
    word-break:break-all;
    display: flex;
    align-items: center;
  }
  .buy_item_main_left_contact{
    min-height: 36px;
    width: 100%;
    font-size: 14px;
    color: #888;
    display: flex;
    align-items: center;
  }
  .buy_item_main_right{
    width: 20%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buy_item_tail{
    min-height: 30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .buy_item_tag{
    border-radius: 3px;
    border: #e8eaec 1px solid;
    height: 24px;
    font-size: 13px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    color: #515a6e;
    margin-top: 2px;
  }

  .next_pages{
    height: 100px;
    width: 100%;
    line-height: 100px;
    text-align: center;
  }
  .more{
    border: transparent;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 50px;
    color: #888888;
    /*color: white;*/
  }
</style>
