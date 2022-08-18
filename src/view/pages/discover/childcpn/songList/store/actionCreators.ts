import { getSongList } from '@/services/songList';
import { IHotRecommend } from '@/types/recommend/hotrecommend';
import * as actionTypes from './constants';

const changeSongListAction = (res: IHotRecommend) => ({
  type: actionTypes.SONG_LIST,
  songList: res,
});

export const getSongListAction = (offset: number, cat = '全部') => {
  return dispatch => {
    getSongList(offset, cat).then((res: IHotRecommend) => {
      dispatch(changeSongListAction(res));
    });
  };
};
