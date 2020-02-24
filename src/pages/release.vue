<template>
  <div id="root">
    <my-head default-active="6"/>
    <div class="bac">
      <div class="adjust">
        <div class="content">
          <div class="content-head">信息发布</div>
          <div class="line"></div>
          <div class="content-title">
            <div class="content-title-text">标题</div>
            <input class="content-title-main"/>
          </div>
          <div class="content-main">
            <div class="content-title-text">内容</div>
            <input class="content-main-main"/>
          </div>
          <div class="content-type">
            <div class="content-title-text">类目</div>
            <div class="content-type-main">
              <el-checkbox-group v-model="typeCheckboxGroup" size="mini" fill="rgb(253,192,6)">
                <el-checkbox-button v-for="type in type_list" :label="type" :key="type">{{type}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </div>
          <div class="content-tag">
            <div class="content-title-text">标签</div>
            <div class="content-type-main">
              <el-checkbox-group v-model="tagCheckboxGroup">
                <el-checkbox v-for="tag in tag_list" :label="tag.name" :key="tag.name">{{tag.name}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="content-pic">
            <div class="content-title-text">上传图片</div>
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              class="uploadPic"
            >
              <i slot="default" class="el-icon-plus"/>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"/>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"/>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"/>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </div>
          <button class="confirm">发 布</button>
        </div>
      </div>
    </div>
    <tail/>
  </div>
</template>

<script>
  import MyHead from "../components/myHead";
  import Tail from "../components/tail";
    export default {
        name: "release_goods",
      data(){
          return{
            type_list:['王世奇的头','李伟泽的头','唐一淞的头','唐一淞的肚子','唐一淞的手','唐一淞的屁股','唐一淞的头发',
              '唐一淞的菊花','唐一淞的舌头','唐一淞的水桶腰',],
            typeCheckboxGroup:[],
            tag_list:[{
              id:'10',
              name:'又大又圆',
              intro:'自带'
            }],
            tagCheckboxGroup:[],
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false
          }
      },
      components: {MyHead, Tail},
      methods: {
        getScrollWidth: function () {
          // 获取滚动条宽度
          let noScroll, scroll, oDiv = document.createElement("DIV");
          oDiv.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";
          noScroll = document.body.appendChild(oDiv).clientWidth;
          oDiv.style.overflowY = "scroll";
          scroll = oDiv.clientWidth;
          document.body.removeChild(oDiv);
          return noScroll - scroll;
        },
        init: function () {
          let Height = window.screen.availHeight;
          let Width = window.screen.availWidth;
          document.getElementById("root").style.height = Height + "px";
          document.getElementById("root").style.width = Width - this.getScrollWidth() + "px";
          console.log(Width);
          console.log(Width - this.getScrollWidth());
          // if(Width>600){
          //   require('../assets/css/pages/homeStylePC.css');
          // }
          // else {
          //
          // }
        },
        jump: function (name) {
          this.$router.push({name: name});
        },
        handleRemove(file) {
          console.log(file);
        },
        handlePictureCardPreview:function(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        handleDownload:function(file) {
          console.log(file);
        },
        getAllTags:function(){
          let _this=this;
          _this.$axios.get("/apis/tag/all").then((res)=>{
            _this.$data.tag_list.push(res.tag_list);
          })
        }
      },
      mounted() {
        this.init();
      },
      created() {
        // this.getAllTags();
      }
    }
</script>

<style scoped>
  .bac{
    width: 100%;
    min-height: 800px;
    background: url("../../static/picture/background.jpg") no-repeat;
    background-size: 100% 100%;
    padding-bottom: 50px;
  }
  .adjust{
    width: 1200px;
    min-height: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
  .content{
    min-height: 800px;
    width: 60%;
    margin-top: 20px;
    margin-left: 20%;
    box-shadow: 0 0 3px #606060;
    background: white;
  }
  .content-head{
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bolder;
  }
  .line{
    width: 85%;
    height: 1px;
    border-bottom: 1px solid #e6e6e6;
    margin: 0 auto 20px;
  }
  .content-title{
    width: 100%;
    height: 80px;
  }
  .content-title-text{
    margin-left: 10%;
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 13px;
  }
  .content-title-main{
    margin-top: 2px;
    margin-left: 10%;
    width: 80%;
    height: 30px;
    display: flex;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }
  .content-title-main:focus{
    border-color: rgb(253,192,6);
  }
  .content-main{
    width: 100%;
    height: 150px;
  }
  .content-main-main{
    margin-top: 2px;
    margin-left: 10%;
    width: 80%;
    height: 100px;
    display: flex;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
  }
  .content-main-main:focus{
    border-color: rgb(253,192,6);
  }
  .content-type{
    width: 100%;
    min-height: 80px;
  }
  .content-type-main{
    margin-top: 2px;
    margin-left: 10%;
    width: 80%;
    min-height: 55px;
    display: flex;
  }
  .content-tag{
    width: 100%;
    min-height: 80px;
  }
  .content-pic{
    width: 100%;
    height: 200px;
    overflow: auto;
  }
  .content-pic::-webkit-scrollbar {display:none}
  .confirm{
    height: 45px;
    width: 70%;
    margin-left: 15%;
    margin-top: 15px;
    border: transparent;
    background: rgb(253,192,6);
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 50px;
  }
  .uploadPic{
    margin-left: 10%;
    margin-top:2px;
  }
  /deep/ .el-checkbox-button--mini .el-checkbox-button__inner{
    border: 1px solid rgb(253,192,6);
    padding: 4px 5px;
    color: rgb(253,192,6);
    border-radius: 3px;
    margin-left: 2px;
    margin-bottom: 2px;
  }
  /deep/ .el-checkbox-button.is-checked .el-checkbox-button__inner{
    color: white;
  }

  /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    border-color: rgb(253,192,6);
    background: rgb(253,192,6);
  }
  /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
    color: rgb(253,192,6);
  }
  /deep/ .el-checkbox.is-bordered.is-checked{
    border-color: rgb(253,192,6);
  }
  /deep/ .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: rgb(253,192,6);
  }
  /deep/ .el-checkbox__input .el-checkbox__inner:hover{
    border-color: rgb(253,192,6);
  }
  /deep/ .el-upload--picture-card:hover{
    border-color: rgb(253,192,6);
    color: rgb(253,192,6);
  }
  /deep/ .el-upload:focus{
    border-color: rgb(253,192,6);
    color: rgb(253,192,6);
  }
</style>
