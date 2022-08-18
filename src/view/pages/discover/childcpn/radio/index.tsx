import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Divider, Row } from 'tdesign-react';
import CateList from './cpn/cateList/cateList';
import DJRankList from './cpn/DJRankList/DJRankList';
import DJRecommend from './cpn/DJRecommend';
import PersonalDJRecommend from './cpn/personalDJRecommend';
import DJSwiper from './cpn/swiper';
import {
  getCateListAction,
  getDJBannerAction,
  getDJRankingListAction,
  getDJRecommendAction,
  getPersonalDJRecommendAction,
} from './store/actionCreators';

const RadioList = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDJBannerAction() as any);
    dispatch(getCateListAction() as any);
    dispatch(getDJRecommendAction() as any);
    dispatch(getDJRankingListAction() as any);
    dispatch(getPersonalDJRecommendAction() as any);
  }, [dispatch]);
  return (
    <div className="wrap-v2 ">
      <DJSwiper />
      <Divider></Divider>
      <CateList />
      <Divider></Divider>
      <Row gutter={16}>
        <Col span={6}>
          <div>
            <DJRecommend />
          </div>
        </Col>
        <Col span={6}>
          <div>
            <DJRankList />
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <div>
            <PersonalDJRecommend />
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default RadioList;
