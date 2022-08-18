import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getAlbumCommentsAction,
  getAlbumDetailAction,
} from '../discover/childcpn/album/store/actionCreators';

import { Comment, Divider, Pagination, PrimaryTable } from 'tdesign-react';
import { IAlbumDetail } from '@/types/album/albumDetails';
import { AlbumDetailsWrapper } from './style';
import { IAlbumComments } from '@/types/album/albumComments';
import { useLocation, useNavigate } from 'react-router-dom';

const AlbumDetails = memo(() => {
  const [offset, setOffset] = useState<number>(0);
  const { state }: any = useLocation();
  const {
    albumDetail,
    albumComments,
  }: { albumDetail: IAlbumDetail; albumComments: IAlbumComments } = useSelector(
    (state: any) => ({
      albumDetail: state.getIn(['album', 'albumDetail']),
      albumComments: state.getIn(['album', 'albumComments']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumDetailAction(state?.id) as any);
    dispatch(getAlbumCommentsAction(state?.id, offset) as any);
  }, [dispatch, offset, state?.id]);

  const columns =
    albumDetail?.songs?.map((item, index) => {
      return {
        id: item?.id,
        index: index,
        title: item?.name,
        length: item?.dt,
        singer: item?.ar?.map(item => {
          return item?.name;
        }),
        picUrl: item?.al?.picUrl,
      };
    }) ?? [];

  // others
  const onChange = (pageInfo: any) => {
    setOffset(pageInfo.current);
  };

  const history = useNavigate();

  const PlayMusic = (row: any) => {
    console.log(row);

    history(`/song`, {
      replace: false,
      state: {
        id: `${row?.row?.id}`,
        name: `${row?.row?.title}`,
        ar: `${[...row?.row?.singer]}`,
        picUrl: `${row?.row?.picUrl}`,
      },
    });
  };

  return (
    <AlbumDetailsWrapper className="wrap-v2">
      <div className="comments">
        <Comment
          avatar={albumDetail?.album?.picUrl}
          author={albumDetail?.album?.info?.commentThread?.resourceTitle}
          datetime="今天16:38"
          content={
            <>
              <p>歌手：{albumDetail?.album?.artist?.name}</p>
              <p>发行时间：{albumDetail?.album?.publishTime}</p>
              <p>发行公司：{albumDetail?.album?.company}</p>
            </>
          }
        />
        <Divider />
        <h2>专辑介绍：</h2>
        <div style={{ height: '20px' }}></div>
        <p style={{ whiteSpace: 'pre-line' }} key={albumDetail?.album?.id}>
          {albumDetail?.album?.description}
        </p>
      </div>
      <Divider />
      <h2>包含歌曲列表</h2>
      <Divider />
      <PrimaryTable
        columns={[
          {
            colKey: 'index',
            title: '',
            width: '80',
          },
          {
            colKey: 'title',
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
        ]}
        data={columns}
        size="medium"
        tableLayout="fixed"
        verticalAlign="middle"
        stripe
        rowKey={'id'}
        onCellClick={PlayMusic}
      />
      <Divider />
      <div>
        <h2>热门评论</h2>
        <Divider />
        <>
          {albumComments?.hotComments?.map(item => {
            return (
              <>
                <Comment
                  avatar={item?.user?.avatarUrl}
                  author={item?.user?.nickname}
                  datetime={item?.timeStr}
                  content={item?.content}
                />
                <Divider />
              </>
            );
          })}
        </>
        <h2>精彩评论</h2>
        <Divider />
        <>
          {albumComments?.comments?.map(item => {
            return (
              <>
                <Comment
                  avatar={item?.user?.avatarUrl}
                  author={item?.user?.nickname}
                  datetime={item?.timeStr}
                  content={item?.content}
                />
                <Divider />
              </>
            );
          })}
        </>
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
          total={albumComments?.total}
          totalContent={false}
          onChange={onChange}
        />
      </div>
    </AlbumDetailsWrapper>
  );
});

export default AlbumDetails;
