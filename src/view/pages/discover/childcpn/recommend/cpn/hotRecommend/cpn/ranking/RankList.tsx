import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Divider, Row } from 'tdesign-react';
import { getRankingListAction } from '../../../../store/actionCreators';
import { List } from '@/types/recommend/rankList';
import { TopRankingWrapper } from './style';

const RankList = memo(() => {
  // store
  const { rankingList } = useSelector(
    (state: any) => ({
      rankingList: state.getIn(['recommend', 'rankingList']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingListAction() as any);
  }, [dispatch]);
  return (
    <div>
      <Divider></Divider>
      <h2 className="rankingList">排行榜</h2>
      <Divider></Divider>
      <Row gutter={16}>
        {rankingList.map((item: List, index: React.Key) => {
          return (
            <Col span={4}>
              <TopRankingWrapper key={index}>
                <div className="header">
                  <div className="image">
                    <img src={item.coverImgUrl} alt="" />
                    <a href="/todo" className="image_cover">
                      ranking
                    </a>
                  </div>
                  <div className="info">
                    <a href="/todo" className="title">
                      {item.name}
                    </a>
                    <div>
                      <button className="btn play sprite_02"></button>
                      <button className="btn favor sprite_02"></button>
                    </div>
                  </div>
                </div>
              </TopRankingWrapper>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default RankList;
