<template>
  <div class="bottom_router">
    <div class="bottom_router_see">
      <div class="bottom_router_item">
        <div class="bottom_router_item_img">
        <img id="one" src="../../static/picture/find.png" style="height: 30px" alt=""/>
      </div>
        <div class="bottom_router_item_text" id="one_text">发现</div>
      </div>
      <div class="bottom_router_item">
        <div class="bottom_router_item_img">
          <img src="../../static/picture/kind.png" style="height: 30px" alt="" id="two"/>
        </div>
        <div class="bottom_router_item_text" id="two_text">分类</div>
      </div>
      <div class="bottom_router_item">
        <div class="bottom_router_item_img">
          <img src="../../static/picture/person.png" style="height: 30px" alt="" id="three"/>
        </div>
        <div class="bottom_router_item_text" id="three_text">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bottomRouter",
      props:{
        defaultActive:''
      },
      methods:{
        init:function(){
          if(this.$props.defaultActive==='1'){
            document.getElementById("one").src="../../static/picture/find1.png";
            document.getElementById("one_text").style.color="rgb(253,192,6)";
          }
          else if(this.$props.defaultActive==='2'){
            document.getElementById("two").src="../../static/picture/kind1.png";
            document.getElementById("two_text").style.color="rgb(253,192,6)";
          }
          else if(this.$props.defaultActive==='3'){
            document.getElementById("three").src="../../static/picture/person1.png";
            document.getElementById("three_text").style.color="rgb(253,192,6)";
          }
        }
      },
      mounted() {
        this.init();
      }
    }
</script>

<style scoped>
  .bottom_router{
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: white;
    display: flex;
    justify-content: center;
  }
  .bottom_router_see{
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 100%;
  }
  .bottom_router_item{
    width: 25%;
    height: 100%;

  }
  .bottom_router_item_img{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom_router_item_text{
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #333;
  }

</style>
