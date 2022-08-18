import React, {  memo } from 'react';

import { Tabs } from 'tdesign-react';
import PopularWorks from '@/view/pages/singerDetail/cpn/PopularWorks';
import SingerAlbum from '@/view/pages/singerDetail/cpn/singerAlbum';

const { TabPanel } = Tabs;



const HeaderMane = memo(() => {

  return (
    <Tabs placement={'top'} size={'medium'} defaultValue={'1'}>
      <TabPanel value="1" label="热门作品">
        <div className="tabs-content" style={{ margin: 20 }}>
          <PopularWorks/>
        </div>
      </TabPanel>
      <TabPanel value="2" label="所有专辑">
        <div className="tabs-content" style={{ margin: 20 }}>
          <SingerAlbum/>
        </div>
      </TabPanel>
      <TabPanel value="3" label="相关MV">
        <div className="tabs-content" style={{ margin: 20 }}>
          选项卡3内容区
        </div>
      </TabPanel>
      <TabPanel value="4" label="艺人介绍">
        <div className="tabs-content" style={{ margin: 20 }}>
          选项卡4内容区
        </div>
      </TabPanel>
    </Tabs>
  );
});

export default HeaderMane;
