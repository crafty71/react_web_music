import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Swiper } from 'tdesign-react';
import { getTopBannerAction } from '../../store/actionCreators';

import { SwiperWrapper } from './swiper';

const { SwiperItem } = Swiper;

const SwiperList = memo(() => {
  // store
  const { topBanners } = useSelector(
    (state: any) => ({
      // topBanners: state.get("recommend").get("topBanners")
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual,
  );
  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction() as any);
  }, [dispatch]);

  return (
    <SwiperWrapper>
      <div className="swiper">
        <Swiper className="swiperList" autoplay>
          {topBanners.map((item: any) => {
            return (
              <SwiperItem key={item.imageUrl} className="item">
                <img src={item.imageUrl} alt={item.name} className="image" />
              </SwiperItem>
            );
          })}
        </Swiper>
      </div>
    </SwiperWrapper>
  );
});

export default SwiperList;
