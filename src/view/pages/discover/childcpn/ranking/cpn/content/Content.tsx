import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ContentWrapper } from './style';
import { Comment, Divider, PrimaryTable } from 'tdesign-react';
import { Track } from '@/types/rankList/rankList';
import { IRankListComments } from '@/types/rankList/comments';
import PlayCircle from 'tdesign-icons-react/lib/components/play-circle';
import { useNavigate } from 'react-router-dom';

const Contents = memo(() => {
  const { rankListDetails, rankListComments } = useSelector(
    (state: any) => ({
      rankListDetails: state.getIn(['rankList', 'rankListDetail']),
      rankListComments: state.getIn(['rankList', 'rankListComments']),
    }),
    shallowEqual,
  );

  const tracks = rankListDetails?.tracks ?? [];
  const tableData = tracks.map((item: Track, index: number) => {
    return {
      index: index + 1,
      name: item?.name,
      ar: item?.ar[0]?.name,
      length: item?.h?.br,
      id: item?.id,
      picUrl: item?.al?.picUrl,
    };
  });

  const columns = [
    {
      colKey: 'index',
      title: '排名',
      width: '100',
    },
    {
      colKey: 'name',
      title: '标题',
    },
    {
      colKey: 'ar',
      title: '歌手',
    },
    {
      colKey: 'length',
      title: '时间',
    },
    {
      colKey: 'platform',
      title: '播放',
      cell: () => (
        <span>
          <PlayCircle />
        </span>
      ),
    },
  ];

  const [rankListComment, setRankListComment] = useState<IRankListComments>();
  useEffect(() => {
    setRankListComment(rankListComments);
  }, [rankListComments]);

  const history = useNavigate();

  const PlayMusic = (row: any) => {
    history(`/song`, {
      replace: false,
      state: {
        id: `${row?.row?.id}`,
        name: `${row?.row?.name}`,
        ar: `${row?.row?.ar}`,
        picUrl: `${row?.row?.picUrl}`,
      },
    });
  };

  return (
    <ContentWrapper>
      <div className="header">
        <Comment
          avatar={rankListDetails?.coverImgUrl}
          author={rankListDetails?.name}
          datetime={`更新时间${rankListDetails?.updateTime}`}
          content={rankListDetails?.description}
        />
      </div>
      <Divider></Divider>
      <div className="table">
        <PrimaryTable
          columns={columns}
          data={tableData}
          rowKey={'id'}
          stripe
          onCellClick={PlayMusic}
        />
      </div>
      <Divider></Divider>
      <h4>用户评论</h4>
      <div>
        {rankListComment?.comments?.map(item => {
          return (
            <div key={item.commentId}>
              <Divider></Divider>
              <Comment
                avatar={item.user.avatarUrl}
                author={item.user.nickname}
                datetime={item.time}
                content={item.content}
              />
              <Divider></Divider>
            </div>
          );
        })}
      </div>
    </ContentWrapper>
  );
});

export default Contents;
