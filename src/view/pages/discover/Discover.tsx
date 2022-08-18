import React, { memo } from 'react';

import DiscoverList from './childcpn/discoverList';

const Discover = memo(() => {
  return (
    <div>
      <DiscoverList />
    </div>
  );
});

export default Discover;
