<template>
  <div id="root">
    <my-head default-active="4"></my-head>
    <div class="switch_main">
      <div v-for="item in switch_school" class="switch_main_row" v-if="item.school_list[0].name!==''">
        <div class="switch_main_row_label">
          <span class="switch_line"></span>
          <span class="switch_content">{{item.label}}</span>
          <span class="switch_line"></span>
        </div>
        <div class="switch_main_row_content">
          <div v-for="item1 in item.school_list" class="switch_main_row_item">
            <div class="switch_main_row_item_title">{{item1.name}}</div>
            <div class="switch_main_row_item_intro">{{item1.intro}}</div>
          </div>
        </div>
      </div>
      <div class="apply_school">
        <div class="apply_school_line"></div>
        <div class="apply_school_tip">如果找不到您的学校，可申请开通</div>
        <button class="apply_school_button" @click="jump('Apply')">申请开通</button>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
  import Tail from "../components/tail";
  import MyHead from "../components/myHead";
    export default {
        name: "switchSchool",
      data(){
          return{
            switch_school:[
              {
                label:'精选',
                school_list:[
                  {
                    name:'所有学校',
                    intro:'全国高校，一览无余',
                    pic:''
                  },
                  {
                    name:'自营',
                    intro:'平台自营，官方保证',
                    pic:''
                  },
                  {
                    name:'自营',
                    intro:'平台自营，官方保证',
                    pic:''
                  }
                ]
              },
              {
                label:'首字母 【A】',
                school_list:[
                  {
                    name:'阿帕奇大学',
                    intro:'789',
                    pic:''
                  },
                  {
                    name:'阿西吧大学',
                    intro:'阿西巴西巴',
                    pic:''
                  },
                  {
                    name:'自营',
                    intro:'平台自营，官方保证',
                    pic:''
                  },
                  {
                    name:'自营',
                    intro:'平台自营，官方保证',
                    pic:''
                  }
                ]
              },
              {
                label:'首字母 【B】',
                school_list:[
                  {
                    name:'北京大学',
                    intro:'你瞅啥',
                    pic:''
                  }
                ]
              },
              {
                label:'首字母 【C】',
                school_list:[
                  {
                    name:'',
                    intro:'',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【D】',
                school_list:[
                  {
                    name:'',
                    intro:'',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【E】',
                school_list:[
                  {
                    name:'',
                    intro:'',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【F】',
                school_list:[
                  {
                    name:'',
                    intro:'',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【G】',
                school_list:[
                  {
                    name:'哥哥大学',
                    intro:'哥哥巨大',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【H】',
                school_list:[
                  {
                    name:'',
                    intro:'',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【I】',
                school_list:[
                  {
                    name:'',
                    intro:'',
                    pic:''
                  }
                ]
              },{
                label:'首字母 【J】',
                school_list:[
                  {
                    name:'鸡鸡大学',
                    intro:'鸡鸡巨大',
                    pic:''
                  }
                ]
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
          if(Width>600){
            require('../assets/css/pages/PC/switchStylePC.css');
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
