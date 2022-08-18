import {
  getAlbumComments,
  getAlbumDetail,
  getAllNewAlbum,
  getNewAlbumOFAlbum,
} from '@/services/album';
import { IAlbumComments } from '@/types/album/albumComments';
import { IAlbumDetail } from '@/types/album/albumDetails';
import { IAllNewAlbum } from '@/types/album/allNewAlbum';
import { INewAlbumOFAlbum } from '@/types/album/newAlbum';
import * as actionTypes from './constants';

const changeNewAlbumAction = (res: INewAlbumOFAlbum) => ({
  type: actionTypes.NEW_ALBUM,
  newAlbum: res.albums,
});

export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbumOFAlbum().then((res: INewAlbumOFAlbum) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

const changeAllNewAlbumAction = (res: IAllNewAlbum) => ({
  type: actionTypes.ALL_NEW_ALBUM,
  allNewAlbum: res,
});

export const getAllNewAlbumAction = (area: string = 'all', offset: string | number = 0) => {
  return dispatch => {
    getAllNewAlbum(area, offset).then((res: IAllNewAlbum) => {
      console.log(res);
      dispatch(changeAllNewAlbumAction(res));
    });
  };
};

const changeAlbumDetailAction = (res: IAlbumDetail) => ({
  type: actionTypes.ALBUM_DETAIL,
  albumDetail: res,
});

export const getAlbumDetailAction = (id: string | number) => {
  return dispatch => {
    getAlbumDetail(id).then((res: IAlbumDetail) => {
      dispatch(changeAlbumDetailAction(res));
    });
  };
};

const changeAlbumCommentsAction = (res: IAlbumComments) => ({
  type: actionTypes.ALBUM_COMMENTS,
  albumComments: res,
});

export const getAlbumCommentsAction = (id: string | number, offset: string | number = 0) => {
  return dispatch => {
    getAlbumComments(id, offset).then((res: IAlbumComments) => {
      dispatch(changeAlbumCommentsAction(res));
    });
  };
};
