import { getSingerAlbum, getSingerList, getSingerListDetail, getSingerSongList } from '@/services/singer';
import { ISingerDetail } from '@/types/singer/singerDetail';
import { ISingerList } from '@/types/singer/singerList';
import * as actionTypes from './constants';
import { ISingerSongList } from '@/types/singer/singerSongList';
import { ISingerAlbum } from '@/types/singer/singerAlbum';

const changeSingerListAction = (res: ISingerList) => ({
  type: actionTypes.SINGER_LIST,
  singerList: res.artists,
});

export const getSingerListAction = (initial: number | string) => {
  return dispatch => {
    getSingerList(initial).then((res: ISingerList) => {
      dispatch(changeSingerListAction(res));
    });
  };
};

const changeSingerDetailAction = (res: ISingerDetail) => ({
  type: actionTypes.SINGER_DETAIL,
  singerDetail: res,
});

export const getSingerDetailAction = (id: number | string) => {
  return dispatch => {
    getSingerListDetail(id).then((res: ISingerDetail) => {
      dispatch(changeSingerDetailAction(res));
    });
  };
};

const changeSingerSongListAction = (res: ISingerSongList) => ({
  type: actionTypes.SINGER_SONG_LIST,
  singerSongList: res,
});

export const getSingerSongListAction = (id: number | string) => {
  return dispatch => {
    getSingerSongList(id).then((res: ISingerSongList) => {
      dispatch(changeSingerSongListAction(res));
    });
  };
};

const changeSingerAlbumAction = (res: ISingerAlbum) => ({
  type: actionTypes.SINGER_ALBUM,
  singerAlbum: res,
});

export const getSingerAlbumAction = (id: number | string, offset: number | string = 0) => {
  return dispatch => {
    getSingerAlbum(id, offset).then((res: ISingerAlbum) => {
      dispatch(changeSingerAlbumAction(res));
    });
  };
};

