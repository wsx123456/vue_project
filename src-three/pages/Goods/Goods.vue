<template>
  <div class="goodscon-wrap">
    <!--头部-->
    <GoodsHeader/>
    <!--轮播-->
    <GoodSwiper/>
    <!--买手的推荐列表-->
    <GoodsRecommend/>
    <!--为你推荐列表-->
    <GoodsRecom/>
    <!--十点一刻-->
    <GoodsCarve/>
    <!--严选甄品-->
    <GoodsChoose/>
    <!--严选Look-->
    <GoodLook/>
    <!--更多精彩好物-->
    <GoodFindMore/>

  </div>
</template>
<script>
  import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader.vue'
  import GoodSwiper from '../../components/Goods/GoodSwiper/GoodSwiper.vue'
  import GoodsRecommend from '../../components/Goods/GoodsRecommend/GoodsRecommend.vue'
  import GoodsRecom from '../../components/Goods/GoodsRecom/GoodsRecom.vue'
  import GoodsCarve from '../../components/Goods/GoodsCarve/GoodsCarve.vue'
  import GoodsChoose from '../../components/Goods/GoodsChoose/GoodsChoose.vue'
  import GoodLook from '../../components/Goods/GoodLook/GoodLook.vue'
  import GoodFindMore from '../../components/Goods/GoodFindMore/GoodFindMore.vue'


  export default {  //配置对象
    components:{
      GoodsHeader,
      GoodSwiper,
      GoodsRecommend,
      GoodsRecom,
      GoodsCarve,
      GoodsChoose,
      GoodLook,
      GoodFindMore
    }
  }
</script>
<style lang="less">
  @import "../../common/less/mixins";
  .goodscon-wrap{
    height:6000/@rem;
  }
</style>
