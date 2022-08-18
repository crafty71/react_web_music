import { Daum } from '@/types/radio/banner';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Swiper } from 'tdesign-react';

const { SwiperItem } = Swiper;

const DJSwiper = memo(() => {
  const { DJBanner } = useSelector(
    (state: any) => ({
      DJBanner: state.getIn(['radio', 'DJBanner']),
    }),
    shallowEqual,
  );
  return (
    <div>
      <Swiper duration={300} interval={2000}>
        {DJBanner?.map((item: Daum) => {
          return (
            <SwiperItem key={item.typeTitle}>
              <div className="demo-item">
                <img src={item.pic} alt="" />
              </div>
            </SwiperItem>
          );
        })}
      </Swiper>
    </div>
  );
});

export default DJSwiper;
