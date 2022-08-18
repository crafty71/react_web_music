import { IAllNewAlbum } from '@/types/album/allNewAlbum';
import { IAlbumOFAlbum } from '@/types/album/newAlbum';
import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Divider, Row, Comment, Pagination } from 'tdesign-react';
import { areaConfig } from './areaConfig';
import { getAllNewAlbumAction, getNewAlbumAction } from './store/actionCreators';

const Album = memo(() => {
  const [offset, setOffset] = useState<number>(0);
  const [key, setKey] = useState<string>('全部');
  // store
  const { newAlbum, allNewAlbum }: { newAlbum: IAlbumOFAlbum[]; allNewAlbum: IAllNewAlbum } =
    useSelector(
      (state: any) => ({
        newAlbum: state.getIn(['album', 'newAlbum']),
        allNewAlbum: state.getIn(['album', 'allNewAlbum']),
      }),
      shallowEqual,
    );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction() as any);
    dispatch(getAllNewAlbumAction(key, offset) as any);
  }, [dispatch, key, offset]);

  const onChange = (pageInfo: any) => {
    setOffset(pageInfo.current);
  };

  function changeArea(key: string) {
    setKey(key);
  }

  const history = useNavigate();

  const albumClick = (id: number | string) => {
    history(`/albumDetail`, {
      replace: false,
      state: {
        id: `${id}`,
      },
    });
  };

  return (
    <div className="wrap-v2">
      <div style={{ height: '30px' }}></div>
      <h2>新碟上架</h2>
      <Divider></Divider>
      <Row gutter={16}>
        {newAlbum.map(item => {
          return (
            <Col
              span={3}
              onClick={() => {
                albumClick(item.id);
              }}
            >
              <Card
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                bordered
                theme="poster2"
                cover={item.picUrl}
                footer={<Comment author={item.name} content={item.artist.name}></Comment>}
              ></Card>
              <Divider />
            </Col>
          );
        })}
      </Row>
      <Divider></Divider>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <h2>新碟上架</h2>
        <div style={{ marginLeft: '20px' }}>
          {areaConfig.map(item => {
            return (
              <>
                <span
                  onClick={() => {
                    changeArea(item.key);
                  }}
                >
                  {item.value}
                </span>
                <Divider layout="vertical"></Divider>
              </>
            );
          })}
        </div>
      </div>

      <Divider></Divider>
      <Row gutter={16}>
        {allNewAlbum?.albums?.map(item => {
          return (
            <Col
              span={3}
              onClick={() => {
                albumClick(item.id);
              }}
            >
              <Card
                bordered
                theme="poster2"
                cover={item.picUrl}
                footer={<Comment author={item.name} content={item.artist.name}></Comment>}
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              ></Card>
              <Divider />
            </Col>
          );
        })}
      </Row>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={10}
        foldedMaxPageBtn={5}
        maxPageBtn={10}
        pageEllipsisMode="mid"
        pageSizeOptions={[5, 10, 20, 50]}
        showFirstAndLastPageBtn={false}
        showJumper={false}
        showPageNumber
        showPageSize={false}
        showPreviousAndNextBtn={false}
        size="medium"
        theme="default"
        total={allNewAlbum.total}
        totalContent={false}
        onChange={onChange}
      />
      <Divider />
    </div>
  );
});

export default Album;
