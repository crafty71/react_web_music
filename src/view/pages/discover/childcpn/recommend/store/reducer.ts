import { Map } from 'immutable';

import * as actionTypes from './constans';

const defaultState = Map({
  topBanners: [],
  playlistClassification: [],
  hotRecommends: [],
  newAlbums: [],
  rankingList: [],
  // upRanking: {},
  // newRanking: {},
  // originRanking: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners);
    case actionTypes.PlaylistClassification:
      return state.set('playlistClassification', action.playlistClassification);
    case actionTypes.HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums);
    case actionTypes.RANkING_LIST:
      return state.set('rankingList', action.rankingList);
    default:
      return state;
  }
}

export default reducer;
