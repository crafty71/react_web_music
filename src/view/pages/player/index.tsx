import { ICommentOfSong } from '@/types/song/songComment';
import React, { memo, useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Avatar, Divider, Layout, Comment, Pagination } from 'tdesign-react';
import {
  getSongCommentAction,
  getSongPlayAddressAction,
  getSongPlayLyric,
} from './store/actionCreators';
import { PlayerWrapper } from './style';
const { Content, Aside } = Layout;

const Player = memo(() => {
  const { state }: any = useLocation();
  const [offset, setOffset] = useState<number>(0);

  const { songPlayAddress, songLyric, songComment } = useSelector(
    (state: any) => ({
      songPlayAddress: state.getIn(['song', 'songPlayAddress']),
      songLyric: state.getIn(['song', 'songLyric']),
      songComment: state.getIn(['song', 'songComment']),
    }),
    shallowEqual,
  );
  const songAddress = songPlayAddress ? songPlayAddress[0] : [];
  const songCommentItem: ICommentOfSong[] = songComment?.comments;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongPlayAddressAction(state?.id) as any);
    dispatch(getSongPlayLyric(state?.id) as any);
    dispatch(getSongCommentAction(state?.id, offset) as any);
  }, [dispatch, offset, state?.id]);

  const onChange = (pageInfo: any) => {
    setOffset(pageInfo.current);
  };

  return (
    <PlayerWrapper className="wrap-v1">
      <Layout>
        <Aside className="avatar">
          <Avatar size="100px" image={state?.picUrl} className="avatarItem"></Avatar>
        </Aside>
        <Layout>
          <Content className="content">
            <div className="songInformation">
              <h2>{state?.name}</h2>
              <h4>{state?.ar}</h4>
            </div>
            <p style={{ whiteSpace: 'pre-line' }}>{songLyric?.lrc?.lyric.replace('\n', ' \n ')}</p>
          </Content>
        </Layout>
      </Layout>
      <Divider></Divider>
      <div className="comments">
        <h2>精彩评论</h2>
        {songCommentItem?.map(item => {
          return (
            <div key={item.commentId}>
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
          showPreviousAndNextBtn
          size="medium"
          theme="default"
          total={songComment?.total}
          onChange={onChange}
          totalContent={false}
        />
        <Divider></Divider>
      </div>
      <AudioPlayer
        className="player"
        header={
          <h4>
            <img
              src={state?.picUrl}
              alt=""
              style={{ width: '50px', height: '50px', paddingRight: '20px' }}
            />
            歌曲名：{state?.name} 作者：{state?.ar}
          </h4>
        }
        src={songAddress?.url}
        layout="horizontal"
      />
    </PlayerWrapper>
  );
});

export default Player;
