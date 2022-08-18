import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHotRecommendAction } from '../../../../store/actionCreators';

import { Row, Col, Card, Divider } from 'tdesign-react';
import { Playlist } from '@/types/recommend/hotrecommend';
import { HotRecommendWrapper } from './style';

const HotRecommend = memo(() => {
  // redux
  const hotRecommends = useSelector(
    (state: any) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual,
  );
  const recommendList: Playlist[] = hotRecommends?.hotRecommends;

  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction() as any);
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <Divider></Divider>
      <div className="hotRecommend">
        <Row gutter={16}>
          {recommendList.slice(0, 4).map(item => {
            return (
              <Col span={3} key={item.id}>
                <Card bordered hoverShadow className="card">
                  <img src={item.coverImgUrl} alt="" className="image" />
                  <p className="rescript">{item.name}</p>
                  <p className="playCount">播放次数 {item.playCount}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
