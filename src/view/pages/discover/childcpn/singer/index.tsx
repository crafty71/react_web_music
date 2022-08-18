import { ArtistOFSingerList } from '@/types/singer/singerList';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Card, Col, Divider, Row } from 'tdesign-react';
import { getSingerListAction } from './store/actionCreators';

const Singer = memo(() => {
  // store
  const { singerList }: { singerList: ArtistOFSingerList[] } = useSelector(
    (state: any) => ({
      singerList: state.getIn(['singer', 'singerList']),
    }),
    shallowEqual,
  );

  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingerListAction(-1) as any);
  }, [dispatch]);
  const dataList = ['全部'];
  // others
  for (let i = 0; i < 26; i++) {
    dataList.push(String.fromCharCode(65 + i));
  }
  return (
    <div className="wrap-v2">
      <div style={{ height: '20px' }}></div>
      <h2>歌手列表</h2>
      <Divider></Divider>
      <div>
        {dataList.map((item: string) => {
          return (
            <>
              <Divider layout="vertical"></Divider>
              <span>{item}</span>
            </>
          );
        })}
      </div>
      <Divider></Divider>
      <Row gutter={16}>
        {singerList?.map(item => {
          return (
            <Col span={2}>
              <div>
                <Card
                  bordered
                  theme="poster2"
                  cover={item.img1v1Url}
                  footer={<h4>{item.name}</h4>}
                ></Card>
                <Divider></Divider>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default Singer;
