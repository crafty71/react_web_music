import { Map } from 'immutable';

import * as actionTypes from './constans';

const defaultState: Map<string, any> = Map({
  rankList: [],
  rankListDetail: {},
  rankListComments: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.RANK_LIST:
      return state.set('rankList', action.rankList);
    case actionTypes.RANK_LIST_DETAIL:
      return state.set('rankListDetail', action.rankListDetail);
    case actionTypes.RANK_LIST_COMMENTS:
      return state.set('rankListComments', action.rankListComments);
    default:
      return state;
  }
}

export default reducer;
