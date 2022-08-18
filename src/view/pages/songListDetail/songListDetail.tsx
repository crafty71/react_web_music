import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getPlayListAction,
  getPlayListCommentsAction,
  getSongPlayAddressAction,
} from './store/actionCreators';

import { Avatar, Layout, Comment, PrimaryTable, Divider, Pagination } from 'tdesign-react';
import { ISongListDetail } from '@/types/songList/songListDetail';
import { SongDetailWrapper } from './style';
import { ISongListDetailSongList } from '@/types/songList/songListDetailSongList';
import { ISongListComment } from '@/types/songList/songListComment';
import { useLocation, useNavigate } from 'react-router-dom';

const { Content, Aside } = Layout;

const SongListDetail = memo(() => {
  const { state }: any = useLocation();
  const [offset, setOffset] = useState<number>(1);

  const { songListDetail, SongListDetailSongList, songListComments } = useSelector(
    (state: any) => ({
      songListDetail: state.getIn(['songListDetail', 'songListDetail']),
      SongListDetailSongList: state.getIn(['songListDetail', 'SongListDetailSongList']),
      songListComments: state.getIn(['songListDetail', 'songListComments']),
    }),
    shallowEqual,
  );

  const songListDetails: ISongListDetail = songListDetail ?? {};

  const SongListDetailSongLists: ISongListDetailSongList = SongListDetailSongList ?? [];

  const songListComment: ISongListComment = songListComments ?? [];

  const data =
    SongListDetailSongLists?.songs?.map((item, index) => {
      return {
        id: item.id,
        index: index + 1,
        name: item?.name,
        length: item?.m?.size,
        singer: item?.ar[0]?.name,
        al: item.al.name,
        picUrl: item.al.picUrl,
      };
    }) ?? [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongPlayAddressAction(state?.id) as any);
    dispatch(getPlayListAction(state?.id) as any);
    dispatch(getPlayListCommentsAction(state?.id, offset) as any);
  }, [dispatch, offset, state?.id]);

  // others
  const onChange = (pageInfo: any) => {
    setOffset(pageInfo.current);
  };

  const history = useNavigate();
  const PlayMusic = (row: any) => {
    history(`/song`, {
      replace: false,
      state: {
        id: `${row?.row?.id}`,
        name: `${row?.row?.name}`,
        ar: `${row?.row?.singer}`,
        picUrl: `${row?.row?.picUrl}`,
      },
    });
  };

  return (
    <SongDetailWrapper className="wrap-v2">
      <Layout>
        <Aside className="songListDetailLeft">
          <Avatar
            shape="round"
            size="100px"
            image={songListDetails?.playlist?.coverImgUrl}
            className="avatars"
          ></Avatar>
        </Aside>
        <Layout>
          <Content className="songListDetailRight">
            <h4>{songListDetails?.playlist?.name}</h4>
            <Comment
              avatar={songListDetails?.playlist?.creator?.avatarUrl}
              author={songListDetails?.playlist?.creator?.nickname}
              datetime={songListDetails?.playlist?.createTime}
              content={songListDetails?.playlist?.description}
              style={{ background: '#ffffff', whiteSpace: 'pre-line' }}
            />
          </Content>
        </Layout>
      </Layout>
      <Divider></Divider>
      <PrimaryTable
        columns={[
          {
            colKey: 'index',
            title: '排名',
            width: '80',
          },
          {
            colKey: 'name',
            title: '歌曲标题',
          },
          {
            colKey: 'length',
            title: '时长',
          },
          {
            colKey: 'singer',
            title: '歌手',
          },
          {
            colKey: 'al',
            title: '专辑',
          },
        ]}
        data={data}
        size="medium"
        stripe
        tableLayout="fixed"
        verticalAlign="middle"
        rowKey={'id'}
        onCellClick={PlayMusic}
      />

      <div>
        <Divider></Divider>
        <h2>歌单评论</h2>
        <Divider></Divider>
        {songListComment?.comments?.map(item => {
          return (
            <div>
              <Comment
                avatar={item?.user?.avatarUrl}
                author={item?.user?.nickname}
                datetime={item?.timeStr}
                content={item?.content}
              />
              <Divider></Divider>
            </div>
          );
        })}
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
          total={songListComment?.total}
          totalContent={false}
          onChange={onChange}
        />
      </div>
    </SongDetailWrapper>
  );
});

export default SongListDetail;
