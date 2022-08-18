import * as actionTypes from './constans';

import {
  getTopBanners,
  getPlaylistClassification,
  getHotRecommend,
  getNewAlbum,
  getRankingList,
} from '@/services/recommend';

import { Root } from '@/types/recommend';

import { IPlayList, Sub } from '@/types/recommend/playList';
import { IHotRecommend } from '@/types/recommend/hotrecommend';
import { INewAlbum } from '@/types/recommend/newAlbum';
import { IRankList } from '@/types/recommend/rankList';

const changeTopBannerAction = (res: Root) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then((res: Root) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changePlaylistClassificationAction = (res: IPlayList) => ({
  type: actionTypes.PlaylistClassification,
  playlistClassification: res.sub,
});

export const getPlaylistClassificationAction = () => {
  return (dispatch: (arg0: { type: string; playlistClassification: Sub[] }) => void) => {
    getPlaylistClassification().then(res => {
      dispatch(changePlaylistClassificationAction(res));
    });
  };
};

const changeHotRecommendAction = (res: IHotRecommend) => ({
  type: actionTypes.HOT_RECOMMEND,
  hotRecommends: res.playlists,
});

export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommend().then(res => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

const changeNewAlbum = (res: INewAlbum) => ({
  type: actionTypes.NEW_ALBUM,
  newAlbums: res.albums,
});

export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbum().then((res: INewAlbum) => {
      dispatch(changeNewAlbum(res));
    });
  };
};

const changeRankingListAction = (res: IRankList) => ({
  type: actionTypes.RANkING_LIST,
  rankingList: res.list,
});

export const getRankingListAction = () => {
  return dispatch => {
    getRankingList().then((res: IRankList) => {
      dispatch(changeRankingListAction(res));
    });
  };
};
