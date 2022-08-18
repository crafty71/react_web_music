import { ISingerDetail } from '@/types/singer/singerDetail';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Divider } from 'tdesign-react';
import {
  getSingerAlbumAction,
  getSingerDetailAction,
  getSingerSongListAction,
} from '../discover/childcpn/singer/store/actionCreators';
import HeaderMane from './cpn/HeaderMane';
import { SingerDetailWrapper } from './style';

const SingerDetail = memo(() => {
  // hock
  const { singerDetail }: { singerDetail: ISingerDetail } = useSelector(
    (state: any) => ({
      singerDetail: state.getIn(['singer', 'singerDetail']),
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingerDetailAction(6452) as any);
    dispatch(getSingerSongListAction(6452) as any);
    dispatch(getSingerAlbumAction(6452) as any)
  }, [dispatch]);
  return (
    <SingerDetailWrapper className="wrap-v2">
      <div style={{ height: '20px' }}></div>
      <h2>{singerDetail?.data?.artist?.name}</h2>
      <Divider />
      <img src={singerDetail?.data?.artist?.cover} alt="" className="cover" />
      <HeaderMane />
      <Divider />
    </SingerDetailWrapper>
  );
});

export default SingerDetail;
