import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Button, Divider } from 'tdesign-react';
import { getPlaylistClassificationAction } from '../../../../store/actionCreators';

import { Sub } from '@/types/recommend/playList';

import { PlayListWrapper } from './style';

const PlaylistClassification = memo(() => {
  // store
  const { playlistClassification } = useSelector(
    (state: any) => ({
      playlistClassification: state.getIn(['recommend', 'playlistClassification']),
    }),
    shallowEqual,
  );
  const playlist = playlistClassification ?? [];

  // hock
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistClassificationAction() as any);
  }, [dispatch]);

  return (
    <PlayListWrapper>
      <Divider></Divider>
      <div className="playListHeader">
        <div className="left">
          <span className="title">热门推荐</span>
          {playlist.splice(0, 6).map((item: Sub) => {
            return (
              <span key={item.name} className="playListItem">
                <span>
                  <Button theme="default" variant="text">
                    {item.name}
                  </Button>
                </span>
                <Divider layout="vertical"></Divider>
              </span>
            );
          })}
        </div>
        <div className="right">
          <Button theme="default" variant="text">
            更多
          </Button>
        </div>
      </div>
    </PlayListWrapper>
  );
});

export default PlaylistClassification;
