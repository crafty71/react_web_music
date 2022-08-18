import { IPersonalDJRecommendResult } from '@/types/radio/personalDJRecommend';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Col, Divider, Row, Comment } from 'tdesign-react';

const PersonalDJRecommend = memo(() => {
  const { personalDJRecommend }: { personalDJRecommend: IPersonalDJRecommendResult[] } =
    useSelector(
      (state: any) => ({
        personalDJRecommend: state.getIn(['radio', 'personalDJRecommend']),
      }),
      shallowEqual,
    );
  return (
    <div>
      <h2>音乐推荐·电台</h2>
      <Divider></Divider>
      <Row gutter={16}>
        {personalDJRecommend?.map(item => {
          return (
            <Col span={6}>
              <Comment avatar={item?.picUrl} author={item?.copywriter} content={item.name} />
              <Divider></Divider>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default PersonalDJRecommend;
