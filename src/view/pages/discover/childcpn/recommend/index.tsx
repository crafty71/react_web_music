import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SwiperList from './cpn/swiper/SwiperList';
import { getTopBannerAction } from './store/actionCreators';
import HotRecommend from './cpn/hotRecommend/HotRecommend';
import NewAlbum from './cpn/hotRecommend/cpn/newalbum/NewAlbum';
import RankList from './cpn/hotRecommend/cpn/ranking/RankList';

const Recommend = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction() as any);
  });
  return (
    <div className="wrap-v2">
      <SwiperList />
      <HotRecommend />
      <NewAlbum />
      <RankList />
    </div>
  );
});

export default Recommend;
