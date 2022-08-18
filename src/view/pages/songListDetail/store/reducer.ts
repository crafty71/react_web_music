import { Map } from 'immutable';

import * as actionTypes from './constans';
import { storeType } from './type';

const defaultState: Map<string, storeType | Object | Array<any>> = Map({
  songListDetail: {},
  SongListDetailSongList: {},
  songListComments: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SONG_LIST_DETAIL:
      return state.set('songListDetail', action.songListDetail);
    case actionTypes.SONG_LIST_DETAIL_LIST:
      return state.set('SongListDetailSongList', action.SongListDetailSongList);
    case actionTypes.SONG_PLAYLIST_COMMENTS:
      return state.set('songListComments', action.songListComments);
    default:
      return state;
  }
}

export default reducer;
