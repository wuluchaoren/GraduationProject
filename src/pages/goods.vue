<template>
  <div id="root">
    <my-head default-active="2"/>
    <div class="bac">
    <div class="adjust">
      <div class="goods_main">
        <div class="goods_header">
          <div class="goods_header_left">
            <div class="type_see">
              <div v-for="item in types" class="type_items" @mouseover="handleOpenSubMenu(item)" @mouseout="handleCloseSubMenu">
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
          <div class="submenu" id="submenu" v-model="activeSubMenu">
            <div v-for="i in activeSubMenu">{{i}}</div>
          </div>
          <div class="goods_header_right">
            <el-carousel :interval="5000" arrow="always" height="400px" id="car1">
              <el-carousel-item v-for="item in carousel_list" :key="item">
                <img :src="item" alt="" style="height: 100%;width: 100%;"/>
              </el-carousel-item>
            </el-carousel>
            <el-carousel :interval="5000" arrow="always" height="150px" id="car2">
            <el-carousel-item v-for="item in carousel_list" :key="item">
              <img :src="item" alt="" style="height: 100%;width: 100%;"/>
            </el-carousel-item>
          </el-carousel>
          </div>
          <div class="ads">
            <div class="ads_item" style="margin-bottom: 10px">123</div>
            <div class="ads_item">123</div>
          </div>
        </div>
<!--        <div class="goods_tag">-->
<!--          <div v-for="item in tags" class="goods_tag_item">{{item}}</div>-->
<!--        </div>-->
        <div class="mobile-type">
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
          <div class="mobile-type-item">123</div>
        </div>
        <div class="goods_order">
          <div class="goods_time">按热度↓</div>
          <div class="goods_see">按时间</div>
        </div>
        <div class="line"></div>
        <div class="goods_content">
          <div class="goods_items" v-for="item in goodsItems">
            <img class="goods_items_img" src="../../static/picture/pic.png" alt=""/>
            <div class="goods_items_content">
              <div class="items_line1">
                <div class="line1_title">{{item.title}}</div>
                <div class="line1_text">
                  <div>发布时间</div>
                  <div style="margin-top: 2px">{{item.date}}</div>
                </div>
                <div class="line1_text">
                  <div>浏览量</div>
                  <div style="margin-top: 2px">{{item.see}}</div>
                </div>
              </div>
              <div class="items_line2">
                <div class="tags" v-for="tag in item.tags">{{tag}}</div>
              </div>
              <div class="items_line3">{{item.content.substr(0,87)}}
                <span v-if="item.content.length>87">...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    <tail id="pcmtail"/>
    <bottom-router id="pcmbottomrouter" default-active="1"></bottom-router>
  </div>
</template>

<script>
    import Tail from "../components/tail";
    import MyHead from "../components/myHead";
    import BottomRouter from "../components/bottomRouter";
    export default {
        name: "goods",
      components: {BottomRouter, MyHead, Tail},
      data(){
          return{
            activeSubMenu:['a','b','c','d',],
            activeIndex:'1',
            types:[{
              name:'热门',
              submenu:['王世奇的头','王世奇的龟头']
            },{
              name:'牛头',
              submenu:['ab','王世奇的牛头']
            },{
              name:'马面',
              submenu:['bb','王世奇的马眼']
            },{
              name:'王世奇的头',
              submenu:['cb','王世奇的脑花']
            },{
              name:'李伟泽的面',
              submenu:['李伟泽的屁眼']
            },{
              name:'e',
              submenu:[]
            },{
              name:'f',
              submenu:[]
            },{
              name:'g',
              submenu:[]
            },{
              name:'h',
              submenu:[]
            },{
              name:'i',
              submenu:[]
            }],
            carousel_list:[
              '../../static/picture/carousel1.jpg',
              '../../static/picture/logo.jpg',
              '../../static/picture/background.jpg',
              '../../static/picture/login.jpg'
            ],
            tags:['所有学校','所有学校','所有学校',],
            goodsItems:[{
              title:'出售一颗王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼' +
                '王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼' +
                '王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼王世奇傻逼',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'sssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssss' +
                'ssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssss',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'sssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssss' +
                'ssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssss',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'sssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssss' +
                'ssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssss',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'sssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssss' +
                'ssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssss',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'sssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssss' +
                'ssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssss',
              date:'2020/1/19',
              see:'12333'
            },{
              title:'王世奇的头',
              tags:['王世奇傻逼','唐一淞傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼','李伟泽傻逼',],
              content:'sssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssss' +
                'ssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' +
                'sssssssssssssssssssssssssssssssss',
              date:'2020/1/19',
              see:'12333'
            }]
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
          document.getElementById("root").style.background="#f0f0f0";

          if(Width>1200){
            document.getElementById("car2").style.display="none";
            document.getElementById("pcmbottomrouter").style.display="none";
            require('../assets/css/pages/PC/goodsStylePC.css');
          }
          else {
            document.getElementById("car1").style.display="none";
            document.getElementById("pcmtail").style.display="none";
            require('../assets/css/pages/Mobile/goodsStyleMobile.css');
          }
        },
        jump:function(name){
          this.$router.push({name:name});
        },
        handleOpenSubMenu:function(item){
          if(item.submenu.length>0) {
            this.$data.activeSubMenu = [];
            for (let i = 0; i < item.submenu.length; i++) {
              this.$data.activeSubMenu.push(item.submenu[i]);
            }
            document.getElementById("submenu").style.display = "block";
          }
        },
        handleCloseSubMenu:function(){
          document.getElementById("submenu").style.display="none";
          this.$data.activeSubMenu=[];
        }
      },
      mounted() {
        this.init();
      },

    }
</script>

<style scoped>

</style>
