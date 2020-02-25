<template>
    <div id="root">
      <div id="head" class="head">
        <div class="title">
          <div class="title1">憨子校园</div>
          <div class="title2">— 专注校园二手 —</div>
        </div>
        <div class="card">
          <el-card class="box-card1" shadow="always">
            <div class="el-card-part">
              <div class="el-card-part-name">校园二手</div>
              <div class="el-card-part-text">带不走的东西，丢不掉的记忆</div>
              <div class="el-card-part-text">让小憨子，帮它找到新的主人</div>
              <div class="el-card-part-button">
                <button class="button" @click="jump('Goods')">校园二手</button>
              </div>
            </div>
          </el-card>

          <el-card class="box-card2" shadow="always">
            <div class="el-card-part">
              <div class="el-card-part-name">校园求购</div>
              <div class="el-card-part-text">众里寻它，蓦然回首</div>
              <div class="el-card-part-text">原来它就在这里—— 憨子求购</div>
              <div class="el-card-part-button">
                <button class="button" @click="jump('Buy')">校园求购</button>
              </div>
            </div>
          </el-card>

          <el-card class="box-card3" shadow="always">
            <div class="el-card-part">
              <div class="el-card-part-name">开通学校</div>
              <div class="el-card-part-text">年华已去，梦想犹在</div>
              <div class="el-card-part-text">入驻我们，或获得属于你的平台</div>
              <div class="el-card-part-button">
                <button class="button" @click="jump('Apply')">开通学校</button>
              </div>
            </div>
          </el-card>

        </div>
      </div>
      <div id="focus" class="focus">
        <div class="focus_title">专注校园二手</div>
        <img class="focus_img" alt="" src="../../static/picture/focus.png"/>
      </div>
      <div id="pic" class="pic">
        <img class="pic_img" alt="" src="../../static/picture/pic.png"/>
      </div>
      <div id="about" class="about">
        <div class="about_title">
          <div class="about_title1">关于我们</div>
          <div class="about_title2">年华已去，梦想犹在，为了不一样的青春</div>
        </div>
        <div class="about_main">
          <div class="about_main_content">
            <div class="about_card" v-for="obj in aboutList">
              <div class="about_pic">
                <img class="about_pic_content" src="../../static/picture/about_pic.jpg" alt=""/>
              </div>
              <div class="about_name">{{obj.name}}</div>
              <div class="about_post">{{obj.post}}</div>
              <div class="about_intro">{{obj.intro}}</div>
            </div>
          </div>
        </div>
      </div>
      <tail></tail>
    </div>
</template>

<script>
    import Tail from "../components/tail";
    export default {
      name: "home",
      components: {Tail},
      data(){
        return{
          platform:'pc', //pc or mobile
          aboutList:[
            {
              name:'王世奇',
              post:'脑残',
              intro:'我是脑残'
            },
            {
              name:'李伟泽',
              post:'傻逼',
              intro:'我是傻逼'
            },
            {
              name:'唐一淞',
              post:'弱智',
              intro:'我是弱智'
            },
            {
              name:'苏天宇',
              post:'帅逼',
              intro:'贼鸡巴帅'
            },
                {
              name:'朱梓杰',
              post:'美女',
              intro:'贼几把美'
            }
          ]
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
          console.log(Width);
          console.log(Width-this.getScrollWidth());
          if(Width>600){
            require('../assets/css/pages/PC/homeStylePC.css');
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
