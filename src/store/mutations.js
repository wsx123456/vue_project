import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMNS,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS
} from './mutation-type'

export default {
  [RECEIVE_HEADCATES](state,{headCates}){
    state.headCates=headCates;
  },
  [RECEIVE_FOCUSLISTS](state,{focusList}){
    state.focusList=focusList;
  },
  [RECEIVE_TAGLISTS](state,{tagLists}){
    state.tagLists=tagLists
  },
  [RECEIVE_NEWITEMLISTS](state,{newItemList}){
    state.newItemList=newItemList
  },
  [RECEIVE_POPULARITEMLISTS](state,{popularList}){
    state.popularList=popularList
  },
  [RECEIVE_FLASHSALEINDEXVO](state,{limitItem}){
    state.limitItem=limitItem
  },
  [RECEIVE_TOPICLISTS](state,{picklist}){
    state.picklist=picklist
  },
  [RECEIVE_CATELISTS](state,{goodList}){
    state.goodList=goodList
  },
  [RECEIVE_COLUMNS](state,{columns}){
    state.columns=columns
  },
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend=recommend
  },
  [RECEIVE_TENFIFTEENS](state,{tenfifteens}){
    state.tenfifteens=tenfifteens
  },
  [RECEIVE_ZHENPIN](state,{choosezhenpin}){
    state.choosezhenpin=choosezhenpin
  },
  [RECEIVE_YXLOOK](state,{yxLook}){
    state.yxLook=yxLook
  },
  [RECEIVE_FINDMORES](state,{findMores}){
    state.findMores=findMores
  },
  [RECEIVE_CATEGORYS](state,{cateDetails}){
    state.cateDetails=cateDetails
  },
  
}
