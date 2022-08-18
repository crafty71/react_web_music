import React, { memo } from 'react';

import { SongListWrapper } from './style';
import SongListItem from './cpn/songList/SongList';

const SongList = memo(() => {
  return (
    <SongListWrapper className="wrap-v2">
      <SongListItem />
    </SongListWrapper>
  );
});

export default SongList;
