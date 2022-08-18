import { getRankListComments, getRankListDetail } from '@/services/rankList';
import { getRankingList } from '@/services/recommend';
import { IRankListComments } from '@/types/rankList/comments';
import { IRankListDetail } from '@/types/rankList/rankList';
import { IRankList } from '@/types/recommend/rankList';
import * as actionTypes from './constans';

const changeRankListAction = (res: IRankList) => ({
  type: actionTypes.RANK_LIST,
  rankList: res.list,
});

export const getRankListAction = () => {
  return dispatch => {
    getRankingList().then((res: IRankList) => {
      dispatch(changeRankListAction(res));
    });
  };
};

const changeRankListDetail = (res: IRankListDetail) => ({
  type: actionTypes.RANK_LIST_DETAIL,
  rankListDetail: res.playlist,
});

export const getRankListDetailAction = (id: string | number) => {
  return dispatch => {
    getRankListDetail(id).then((res: IRankListDetail) => {
      dispatch(changeRankListDetail(res));
    });
  };
};

const changeRankListCommentsAction = (res: IRankListComments) => ({
  type: actionTypes.RANK_LIST_COMMENTS,
  rankListComments: res,
});

export const getRankListCommentsAction = (id?: string | number, offset?: string | number) => {
  return dispatch => {
    getRankListComments(id, offset).then((res: IRankListComments) => {
      dispatch(changeRankListCommentsAction(res));
    });
  };
};
