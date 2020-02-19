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

          </div>
          <div class="content-tag">
            <div class="content-title-text">标签</div>

          </div>
          <div class="content-pic">
            <div class="content-title-text">上传图片</div>
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              style="margin-left: 10%;margin-top:2px"
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
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        handleDownload(file) {
          console.log(file);
        }
      },
      mounted() {
        this.init();
      },
    }
</script>

<style scoped>
  .bac{
    width: 100%;
    height: 870px;
    background: url("../../static/picture/background.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .adjust{
    width: 1200px;
    height: 870px;
    margin: 0 auto;
    overflow: hidden;
  }
  .content{
    height: 800px;
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
  .content-type{
    width: 100%;
    height: 80px;
  }
  .content-tag{
    width: 100%;
    height: 80px;

  }
  .content-pic{
    width: 100%;
    height: 200px;
  }
  .confirm{
    height: 45px;
    width: 70%;
    margin-left: 15%;
    margin-top: 15px;
    border: transparent;
    background: #3a8ee6;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
