import { IDJToplist } from '@/types/radio/DJRankingList';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Divider, Comment } from 'tdesign-react';

const DJRecommend = memo(() => {
  const { DJRankingList }: { DJRankingList: IDJToplist[] } = useSelector(
    (state: any) => ({
      DJRankingList: state.getIn(['radio', 'DJRankingList']),
    }),
    shallowEqual,
  );

  return (
    <div>
      <h2>节目排行榜</h2>
      <Divider></Divider>
      <div>
        {DJRankingList?.map(item => {
          return (
            <div>
              <Comment
                avatar={item?.program?.blurCoverUrl}
                author={item?.program?.name}
                datetime={item?.program?.createTime}
                content={item?.program?.name}
              />
              <Divider></Divider>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default DJRecommend;
