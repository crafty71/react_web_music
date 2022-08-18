import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  songList: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SONG_LIST:
      return state.set('songList', action.songList);
    default:
      return state;
  }
}

export default reducer;
