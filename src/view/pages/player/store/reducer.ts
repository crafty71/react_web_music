import { Map } from 'immutable';

import * as actionTypes from './constans';

const defaultState = Map({
  songPlayAddress: {},
  songLyric: {},
  songComment: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SONG_PLAY_ADDRESS:
      return state.set('songPlayAddress', action.songPlayAddress);
    case actionTypes.SONG_LYRIC:
      return state.set('songLyric', action.songLyric);
    case actionTypes.SONG_COMMENT:
      return state.set('songComment', action.songComment);
    default:
      return state;
  }
}

export default reducer;
