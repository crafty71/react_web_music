import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../view/pages/discover/childcpn/recommend/store/index';
import { reducer as songListReducer } from '../view/pages/discover/childcpn/songList/store/index';

import { reducer as rankListReducer } from '../view/pages/discover/childcpn/ranking/store/index';

import { reducer as radioReducer } from '../view/pages/discover/childcpn/radio/store/index';

import { reducer as songReducer } from '../view/pages/player/store/index';

import { reducer as songListDetailReducer } from '../view/pages/songListDetail/store/index';

import { reducer as singerReducer } from '../view/pages/discover/childcpn/singer/store/index';

import { reducer as albumReducer } from '../view/pages/discover/childcpn/album/store/index';

const cReducer = combineReducers({
  recommend: recommendReducer,
  songList: songListReducer,
  rankList: rankListReducer,
  radio: radioReducer,
  song: songReducer,
  songListDetail: songListDetailReducer,
  singer: singerReducer,
  album: albumReducer,
});

export default cReducer;
