import { List } from '@/types/recommend/rankList';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Divider, Row } from 'tdesign-react';
import { getRankListAction } from '../../store/actionCreators';
import { TopRankingWrapper } from './style';
import { useNavigate } from 'react-router-dom';

const leftAside = memo(() => {
  // store
  const { rankList } = useSelector(
    (state: any) => ({
      rankList: state.getIn(['rankList', 'rankList']),
    }),
    shallowEqual,
  );

  const rankList01 = rankList ?? [];
  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankListAction() as any);
  }, [dispatch]);
  // others
  const history = useNavigate();

  const routerPush = (item: List) => {
    history(`/discover/ranking`, { replace: false, state: { id: `${item.id}` } });
  };
  return (
    <div>
      <Row>
        {rankList01.map((item: List) => {
          return (
            <Col span={12} key={item.id}>
              <TopRankingWrapper>
                <div className="header">
                  <div className="image">
                    <img src={item.coverImgUrl} alt="" />
                    <div
                      onClick={() => {
                        routerPush(item);
                      }}
                      className="image_cover"
                    >
                      ranking
                    </div>
                  </div>
                  <div className="info">
                    <div
                      onClick={() => {
                        routerPush(item);
                      }}
                      className="title"
                    >
                      {item.name}
                    </div>
                    <div>
                      <p>{item.updateFrequency}</p>
                    </div>
                  </div>
                </div>
              </TopRankingWrapper>
              <Divider></Divider>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default leftAside;
