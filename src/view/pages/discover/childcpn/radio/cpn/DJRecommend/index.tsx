import { IDJRecommend } from '@/types/radio/DJRecommend';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Divider, Comment } from 'tdesign-react';

const DJRecommend = memo(() => {
  const { DJRecommend }: { DJRecommend: IDJRecommend } = useSelector(
    (state: any) => ({
      DJRecommend: state.getIn(['radio', 'DJRecommend']),
    }),
    shallowEqual,
  );
  return (
    <div>
      <h2>{DJRecommend?.name}</h2>
      <Divider></Divider>
      <div>
        {DJRecommend?.djRadios?.map(item => {
          return (
            <div>
              <Comment
                avatar={item?.picUrl}
                author={item?.name}
                datetime={item?.playCount}
                content={item?.rcmdtext}
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
