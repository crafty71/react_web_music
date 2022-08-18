import { IRadioDetails } from '@/types/radio/radioDetails';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Comment, Divider } from 'tdesign-react';
import { getRadioDetailsAction } from '../discover/childcpn/radio/store/actionCreators';
import { RadioDetailsWrapper } from './style';

const RadioDetails = memo(() => {
  const { radioDetails }: { radioDetails: IRadioDetails } = useSelector(
    (state: any) => ({
      radioDetails: state.getIn(['radio', 'radioDetails']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRadioDetailsAction(336355127) as any);
  }, [dispatch]);
  return (
    <RadioDetailsWrapper className="wrap-v2">
      <Comment
        className="comment"
        avatar={radioDetails?.data?.picUrl}
        author={radioDetails?.data?.name}
        content={radioDetails?.data?.rcmdText}
      />
      <Divider />
      <h2>
        {radioDetails?.data?.secondCategory} <Divider layout="vertical"></Divider>{' '}
        {radioDetails?.data?.rcmdText}
      </h2>
      <Divider />
      <h4>简介</h4>
      <div style={{ height: '20px' }}></div>
      <p>{radioDetails?.data?.dj?.signature}</p>
    </RadioDetailsWrapper>
  );
});

export default RadioDetails;
