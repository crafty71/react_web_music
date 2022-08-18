import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Row, Col, Card, Divider, Pagination, Dropdown, Button } from 'tdesign-react';

import { SongListWrapper } from './style';
import { getSongListAction } from '../../store/actionCreators';
import { Playlist } from '@/types/recommend/hotrecommend';
import { getPlaylistClassificationAction } from '../../../recommend/store/actionCreators';
import { useNavigate } from 'react-router-dom';

const SongListItem = memo(() => {
  const [offset, setOffSet] = useState<number>(1);
  const [cat, setCat] = useState<string>('全部');

  // redux
  const { songList, playlistClassification } = useSelector(
    (state: any) => ({
      songList: state.getIn(['songList', 'songList']),
      playlistClassification: state.getIn(['recommend', 'playlistClassification']),
    }),
    shallowEqual,
  );
  const recommendList: Playlist[] = songList?.playlists ?? [];
  const total = songList?.total;

  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongListAction(offset, cat) as any);
    dispatch(getPlaylistClassificationAction() as any);
  }, [cat, dispatch, offset]);

  // others
  const playlist = playlistClassification ?? [];
  const options = playlist.map((item, index) => {
    return {
      content: item.name,
      value: index,
    };
  });
  const onChange = (pageInfo: any) => {
    setOffSet(pageInfo.current);
  };
  const clickHandler = data => {
    setCat(data.content);
  };

  const history = useNavigate();

  const singListClick = (id: number) => {
    history(`/detail`, {
      replace: false,
      state: {
        id: `${id}`,
      },
    });
  };
  return (
    <SongListWrapper>
      <div className="header">
        <h4>{cat}</h4>
        <Dropdown
          direction="right"
          hideAfterItemClick
          maxColumnWidth={100}
          maxHeight={300}
          minColumnWidth={10}
          options={options}
          placement="bottom-left"
          trigger="click"
          onClick={clickHandler}
        >
          <Button
            block={false}
            ghost={false}
            loading={false}
            shape="rectangle"
            type="button"
            variant="text"
          >
            更多分类
          </Button>
        </Dropdown>
      </div>
      <Divider></Divider>
      <div className="hotRecommend">
        <Row gutter={16}>
          {recommendList.map(item => {
            return (
              <Col span={3} key={item.name} onClick={() => singListClick(item.id)}>
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
        showPreviousAndNextBtn
        size="medium"
        theme="default"
        total={total}
        totalContent={false}
        onChange={onChange}
      />
    </SongListWrapper>
  );
});

export default SongListItem;
