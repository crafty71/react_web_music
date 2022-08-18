import { Album } from '@/types/recommend/newAlbum';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Card, Divider, Swiper } from 'tdesign-react';
import SwiperItem from 'tdesign-react/es/swiper/SwiperItem';
import { getNewAlbumAction } from '../../../../store/actionCreators';
import { NewAlbumWrapper } from './styled';

const NewAlbum = memo(() => {
  const { newAlbums } = useSelector(
    (state: any) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction() as any);
  }, [dispatch]);
  return (
    <NewAlbumWrapper className="newAlbum">
      <Divider></Divider>
      <h2 className="newAlbum">新碟推荐</h2>
      <Divider></Divider>
      <div className="swiper">
        <Swiper type={'card'} height={300} theme="dark">
          {newAlbums.map((item: Album) => {
            return (
              <SwiperItem key={item.name}>
                <Card bordered hoverShadow>
                  <div className="item">
                    <img src={item.blurPicUrl} alt="" className="image" />
                    <p className="singer">{item.name}</p>
                    <p className="rescript">{item.artist.name}</p>
                  </div>
                </Card>
              </SwiperItem>
            );
          })}
        </Swiper>
      </div>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
