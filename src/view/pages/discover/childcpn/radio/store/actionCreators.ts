import {
  getCateList,
  getDJBanner,
  getDJRankingList,
  getDJRecommend,
  getPersonalDJRecommend,
  getRadioDetails,
} from '@/services/radio';
import { IBanner } from '@/types/radio/banner';
import { ICateList } from '@/types/radio/cateList';
import { IDJRankingList } from '@/types/radio/DJRankingList';
import { IDJRecommend } from '@/types/radio/DJRecommend';
import { IPersonalDJRecommend } from '@/types/radio/personalDJRecommend';
import { IRadioDetails } from '@/types/radio/radioDetails';
import * as actionTypes from './constans';

const changeDJBannerAction = (res: IBanner) => ({
  type: actionTypes.DJ_BANNER,
  DJBanner: res.data,
});

export const getDJBannerAction = () => {
  return dispatch => {
    getDJBanner().then((res: IBanner) => {
      dispatch(changeDJBannerAction(res));
    });
  };
};

const changeCateListAction = (res: ICateList) => ({
  type: actionTypes.CATE_LIST,
  cateList: res.categories,
});

export const getCateListAction = () => {
  return dispatch => {
    getCateList().then((res: ICateList) => {
      dispatch(changeCateListAction(res));
    });
  };
};

const changeDJRecommendAction = (res: IDJRecommend) => ({
  type: actionTypes.DJ_RECOMMEND,
  DJRecommend: res,
});

export const getDJRecommendAction = () => {
  return dispatch => {
    getDJRecommend().then((res: IDJRecommend) => {
      dispatch(changeDJRecommendAction(res));
    });
  };
};

const changeDJRankingListAction = (res: IDJRankingList) => ({
  type: actionTypes.DJ_RANKING_LIST,
  DJRankingList: res.toplist,
});

export const getDJRankingListAction = () => {
  return dispatch => {
    getDJRankingList().then((res: IDJRankingList) => {
      dispatch(changeDJRankingListAction(res));
    });
  };
};

const changePersonalDJRecommendAction = (res: IPersonalDJRecommend) => ({
  type: actionTypes.PERSONAL_DJ_RECOMMEND,
  personalDJRecommend: res.result,
});

export const getPersonalDJRecommendAction = () => {
  return dispatch => {
    getPersonalDJRecommend().then((res: IPersonalDJRecommend) => {
      dispatch(changePersonalDJRecommendAction(res));
    });
  };
};

const changeRadioDetailsAction = (res: IRadioDetails) => ({
  type: actionTypes.RADIO_DETAILS,
  radioDetails: res,
});

export const getRadioDetailsAction = (id: number | string) => {
  return dispatch => {
    getRadioDetails(id).then((res: IRadioDetails) => {
      dispatch(changeRadioDetailsAction(res));
    });
  };
};
