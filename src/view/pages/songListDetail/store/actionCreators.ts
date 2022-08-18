import { getSongListDetail } from '@/services/song';
import { getSongListComments, getSongListDetailSongList } from '@/services/songList';
import { ISongListComment } from '@/types/songList/songListComment';
import { ISongListDetail } from '@/types/songList/songListDetail';
import { ISongListDetailSongList } from '@/types/songList/songListDetailSongList';
import * as actionTypes from './constans';

const changeSongPlayAddress = (res: ISongListDetail) => ({
  type: actionTypes.SONG_LIST_DETAIL,
  songListDetail: res,
});

export const getSongPlayAddressAction = (id: number | string) => {
  return dispatch => {
    getSongListDetail(id).then((res: ISongListDetail) => {
      dispatch(changeSongPlayAddress(res));
    });
  };
};

const changePlayListAction = (res: ISongListDetailSongList) => ({
  type: actionTypes.SONG_LIST_DETAIL_LIST,
  SongListDetailSongList: res,
});

export const getPlayListAction = (id: number | string) => {
  return dispatch => {
    getSongListDetailSongList(id).then((res: ISongListDetailSongList) => {
      dispatch(changePlayListAction(res));
    });
  };
};

const changePlayListCommentsAction = (res: ISongListComment) => ({
  type: actionTypes.SONG_PLAYLIST_COMMENTS,
  songListComments: res,
});

export const getPlayListCommentsAction = (id: number | string, offset: number) => {
  return dispatch => {
    getSongListComments(id, offset).then((res: ISongListComment) => {
      dispatch(changePlayListCommentsAction(res));
    });
  };
};
