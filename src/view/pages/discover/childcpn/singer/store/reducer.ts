import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  singerList: [],
  singerDetail: {},
  singerSongList: {},
  singerAlbum: {}
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SINGER_LIST:
      return state.set('singerList', action.singerList);
    case actionTypes.SINGER_DETAIL:
      return state.set('singerDetail', action.singerDetail);
    case actionTypes.SINGER_SONG_LIST:
      return state.set('singerSongList', action.singerSongList);
    case actionTypes.SINGER_ALBUM:
      return state.set('singerAlbum', action.singerAlbum);
    default:
      return state;
  }
}

export default reducer;
