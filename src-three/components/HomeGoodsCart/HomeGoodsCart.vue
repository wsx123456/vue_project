<template>
  <div class="detailCon">
    <div class="container">
      <header class="title">
        {{good.name}}
      </header>
      <div class="wrap-goods">
        <ul class="list" >
          <li class="item" v-for="(goodItem,index) in good.itemList" :key="index">
            <a href="javascript:;" class="goods">
              <div class="top">
                <img :src="goodItem.primaryPicUrl" alt="">
                <div class="detail">{{goodItem.simpleDesc}}</div>
              </div>
              <div class="tagw">
                <span class="tag">满额减</span>
              </div>
              <div class="name">{{goodItem.name}}</div>
              <div class="price">￥{{goodItem.couponPrice}}</div>
            </a>
          </li>
          <li class="item more">
            <a href="javascript:;" class="goods">
              <p class="text">更多 居家好物</p>
              <i class="right-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    props:{
      good:Object
    },
    computed:{

    }
  }
</script>
<style lang='less'>
  @import '../../common/less/mixins';
  .detailCon{
    margin-bottom: 20/@rem;
    background-color: #fff;
    .container{
      background-color: #f4f4f4;
      .title{
        text-align: center;
        font-size: 28/@rem;
        line-height: 120/@rem;
        color: #333;
        background-color: #fff;

      }
      .wrap-goods{
        background-color: #fff;
        .list{
          overflow: hidden; //解决高度塌陷
          .item{
            box-sizing: border-box;
            padding:0 15/@rem 33/@rem 15/@rem;
            float: left;
            width:50%;
            &.more{
              .goods{
                background-color: #f4f4f4;
                padding:132/@rem 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .text{
                  color: #333;
                  font-size: 30/@rem;
                  margin-bottom: 60/@rem;
                }
                .right-icon{
                  display: inline-block;
                  background-image: url('./img/right.png');
                  background-size:100% 100% ;
                  background-repeat:no-repeat;
                  width: 67/@rem;
                  height:67/@rem;
                }
              }
            }
            .goods{
              .top{
                background-color: #f4f4f4;
                position: relative;
                padding-bottom: 20/@rem;
                border-radius: 4/@rem;
                img{
                  display: inline-block;
                  height:345/@rem;
                  width:100%;
                }
                .detail{
                  box-sizing: border-box;
                  position: absolute;
                  bottom: 0;
                  width:100%;
                  font-size:24/@rem ;
                  line-height: 29/@rem;
                  padding:20/@rem 10/@rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  background-color: #F1ECE2;
                  color: #9F8A60;
                  border-radius: 0 0 4/@rem 4/@rem;
                }

              }
              .tagw{
                padding-left: 10/@rem;
                height:30/@rem;
                margin:20/@rem 0 0 4/@rem;
                font-size: 0;
                .tag{
                  color: #fff;
                  background-color: #f48f18;
                  font-size: 20/@rem;
                  line-height: 20/@rem;
                  padding:5/@rem 16/@rem;
                  text-align: center;
                  vertical-align: middle;
                  display: inline-block;
                }

              }
              .name{
                font-size: 28/@rem;
                line-height: 48/@rem;
                padding:0 10/@rem;
                margin-top: 10/@rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
              .price{
                padding:0 10/@rem;
                color: #b4282d;
                font-size: 32/@rem;
              }
            }
          }
        }
      }
    }
  }

</style>
