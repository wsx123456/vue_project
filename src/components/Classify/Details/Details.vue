<template>
  <div>
    <div class="detail-con" v-if="detail.bannerUrl">
      <div class="head-img">
        <img :src="detail.bannerUrl" alt="">
      </div>
      <div class="cate-list">
        <div class="classify">
        <span class="title">
          <span class="title-left">{{detail.name}}</span>
          <span class="title-right">分类</span>
        </span>
        </div>
        <ul class="list-con">
          <li class="item" v-for="(itemGood,index) in detail.subCateList" :key="index" >
            <a href="/" class="inner-wrap">
              <div class="item-img">
                <img :src="itemGood.wapBannerUrl" alt="">
              </div>
              <div class="text">{{itemGood.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-con" v-else>
      <div class="head-img" >
        <img :src="activeDetail.bannerUrl" alt="">
      </div>
      <div class="cate-list">
        <div class="classify">
        <span class="title">
          <span class="title-left">{{activeDetail.name}}</span>
          <span class="title-right">分类</span>
        </span>
        </div>
        <ul class="list-con">
          <li class="item" v-for="(activeDetail,index) in activeDetail.subCateList" :key="index" >
            <a href="/" class="inner-wrap">
              <div class="item-img">
                <img :src="activeDetail.wapBannerUrl" alt="">
              </div>
              <div class="text">{{activeDetail.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>

  export default {
    props:{
      detail:Object,
      activeDetail:Object
    }
  }

</script>
<style lang='less'>
  @import "../../../common/less/mixins";
  .detail-con{
    margin-top: 88/@rem;
    background-color: #fff;
    width:528/@rem;
    padding:30/@rem;
    margin-left: 162/@rem;
    margin-bottom: 30/@rem;
    .head-img{
      height:192/@rem;
      img{
        width:100%;
        height:100%;
        border-radius: 6/@rem;
      }
    }
    .cate-list{
      .classify{
        height:108/@rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .title{
          font-size: 26/@rem;
          width:200/@rem;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content:center;
          &::before{
            content: '';
            display: block;
            width: 30/@rem;
            height: 1px;
            line-height: 26/@rem;
            background-color: rgba(0,0,0,0.2);
          }
          &::after{
            content: '';
            display: block;
            width: 30/@rem;
            height: 1px;
            line-height: 26/@rem;
            background-color: rgba(0,0,0,0.2);
          }
          .title-left{
            margin-left: 10/@rem;
          }
          .title-right{
            margin-right: 10/@rem;
          }

        }

      }
      .list-con{
          .item{
            display: inline-block;
            width:144/@rem;
            height:216/@rem;
            margin-right: 34/@rem;
            /*background-color: peachpuff;*/
            .inner-wrap{
              display: block;
              .item-img{
                width:144/@rem;
                height: 144/@rem;
                img{
                  width:100%;
                  height:100%;
                  border-radius: 50%;
                  /*background-color: gold;*/
                }
              }
              .text{
                font-size: 24/@rem;
                height:72/@rem;
                line-height: 30/@rem;
                text-align: center;
              }
            }
          }
          .item:nth-child(3n){
            margin-right: 0;
          }
      }
    }
  }
</style>
