<template>
  <div class="cart-wrap">
    <div class="header-cart">
      <span class="title">购物车</span>
      <span class="quan">领券</span>
    </div>
    <div class="cart-con">
      <div class="list-info">
        <span class="info">
          <span class="icon"></span>
          <span class="text">30天无忧退货</span>
        </span>
        <span class="info">
          <span class="icon"></span>
          <span class="text">48小时快速退款</span>
        </span>
        <span class="info">
          <span class="icon"></span>
          <span class="text">满88元减邮费</span>
        </span>
      </div>
      <div class="cart-logo">
        <div class="shop-car"></div>
        <div class="text">去添加点什么吧`</div>
        <div class="login">
          <div class="inner">
            登录
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {  //配置对象

  }
</script>
<style lang="less">
  @import '../../common/less/mixins';

  .cart-wrap{
    height:1334/@rem;
    background-color: #eeeeee;
    overflow: hidden;
    .header-cart{
      height:88/@rem;
      width:690/@rem;
      background-color: #fff;
      line-height: 88/@rem;
      text-align: center;
      padding:0 30/@rem;
      overflow: hidden;
      .title{
        font-size: 34/@rem;
      }
      .quan{
        font-size: 32/@rem;
        color: #B4282D;
        float: right;
      }
    }
    .cart-con{
      .list-info{
        width: 690/@rem;
        height:70/@rem;
        padding:0 30/@rem;
        display: flex;
        .info{
          flex: 1;
          display: flex;
          line-height: 70/@rem;
          align-items: center;
          justify-content: center;
          .icon{
            display: inline-block;
            background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png');
            background-size:100% 100%;
            width:10/@rem;
            height:10/@rem;
            background-repeat:no-repeat;
            vertical-align: middle;
            line-height: 70/@rem;
            margin-right: 8/@rem;
          }
          .text{
            font-size: 26/@rem;
            line-height: 70/@rem;
          }
        }
      }
      .cart-logo{
        height:300/@rem;
        margin:300/@rem 0;
        text-align: center;
        .shop-car{
          display: inline-block;
          background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
          background-size:100% 100%;
          margin-bottom: 8/@rem;
          width:248/@rem;
          height:248/@rem;
          vertical-align: middle;
        }
        .text{
          font-size: 28/@rem;
          margin-bottom: 50/@rem;
          height:28/@rem;
          text-align: center;
          color: #888;
        }
        .login{
          text-align: center;
          .inner{
            display: inline-block;
            color: #ffffff;
            background-color: #B4282D;
            height:92/@rem;
            width:482/@rem;
            margin:-45/@rem 0 0 0;
            border-radius: 6/@rem;
            font-size: 34/@rem;
            line-height: 92/@rem;
          }
        }
      }

    }
  }


</style>
