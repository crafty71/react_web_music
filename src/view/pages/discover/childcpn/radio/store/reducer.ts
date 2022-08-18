import { Map } from 'immutable';

import * as actionTypes from './constans';

const defaultState: Map<string, any> = Map({
  DJBanner: [],
  cateList: [],
  DJRecommend: {},
  DJRankingList: [],
  personalDJRecommend: [],
  radioDetails: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.DJ_BANNER:
      return state.set('DJBanner', action.DJBanner);
    case actionTypes.CATE_LIST:
      return state.set('cateList', action.cateList);
    case actionTypes.DJ_RECOMMEND:
      return state.set('DJRecommend', action.DJRecommend);
    case actionTypes.DJ_RANKING_LIST:
      return state.set('DJRankingList', action.DJRankingList);
    case actionTypes.PERSONAL_DJ_RECOMMEND:
      return state.set('personalDJRecommend', action.personalDJRecommend);
    case actionTypes.RADIO_DETAILS:
      return state.set('radioDetails', action.radioDetails);
    default:
      return state;
  }
}

export default reducer;
