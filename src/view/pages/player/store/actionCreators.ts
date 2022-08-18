import * as actionTypes from './constans';

import { getSongComment, getSongLyric, getSongPlayAddress } from '@/services/song';
import { ISongPlayAddress } from '@/types/song';
import { ISongLyric } from '@/types/song/songLyric';
import { ISongComment } from '@/types/song/songComment';

const changeSongPlayAddress = (res: ISongPlayAddress) => ({
  type: actionTypes.SONG_PLAY_ADDRESS,
  songPlayAddress: res.data,
});

export const getSongPlayAddressAction = (id: number | string) => {
  return dispatch => {
    getSongPlayAddress(id).then((res: ISongPlayAddress) => {
      dispatch(changeSongPlayAddress(res));
    });
  };
};

const changeSongPlayLyric = (res: ISongLyric) => ({
  type: actionTypes.SONG_LYRIC,
  songLyric: res,
});

export const getSongPlayLyric = (id: number | string) => {
  return dispatch => {
    getSongLyric(id).then((res: ISongLyric) => {
      dispatch(changeSongPlayLyric(res));
    });
  };
};

const changeSongCommentAction = (res: ISongComment) => ({
  type: actionTypes.SONG_COMMENT,
  songComment: res,
});

export const getSongCommentAction = (id: number | string, offset: number | string = 1) => {
  return dispatch => {
    getSongComment(id, offset).then((res: ISongComment) => {
      dispatch(changeSongCommentAction(res));
    });
  };
};
