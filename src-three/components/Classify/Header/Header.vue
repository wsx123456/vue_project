<template>
  <div class="header-con">
    <div class="search-top">
      <div class="s-wrap">
        <span class="icon"></span>
        <span class="shops">搜索商品,共10259个好物</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang='less'>
  @import '../../../common/less/mixins';
  .header-con{
    background-color: #fff;
    z-index: 5;
    border-bottom:1/@rem solid #bbb;
     .search-top{
       padding:0 30/@rem;
       height:88/@rem;
       width:690/@rem;
       display: flex;
       justify-content: center;
       align-items: center ;
       .s-wrap{
         width:690/@rem;
         height: 56/@rem;
         border-radius: 10/@rem;
         background-color: #eee;
         display: flex;
         justify-content: center;
         align-items: center;
         .icon{
           background-image: url('./img/search.png');
           vertical-align: middle;
           background-repeat:no-repeat;
           background-size: 100% 100%;
           width:28/@rem;
           height: 28/@rem;
           margin-right: 10/@rem;
         }
         .shops{
           font-size: 28/@rem;
           margin-left: 10/@rem;
         }
       }
     }
  }
</style>
