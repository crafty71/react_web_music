import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  newAlbum: [],
  allNewAlbum: {},
  albumDetail: {},
  albumComments: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum);
    case actionTypes.ALL_NEW_ALBUM:
      return state.set('allNewAlbum', action.allNewAlbum);
    case actionTypes.ALBUM_DETAIL:
      return state.set('albumDetail', action.albumDetail);
    case actionTypes.ALBUM_COMMENTS:
      return state.set('albumComments', action.albumComments);
    default:
      return state;
  }
}

export default reducer;
