import React, { memo } from 'react';

import PlaylistClassification from './cpn/PlaylistClassification/PlaylistClassification';
import HotRecommends from './cpn/hotrecommend/HotRecommend';

const HotRecommend = memo(() => {
  return (
    <div>
      <PlaylistClassification />
      <HotRecommends />
    </div>
  );
});

export default HotRecommend;
