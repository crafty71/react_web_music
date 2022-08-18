import React, { memo } from 'react';

import { dicoverMenu } from '@/common/local-data';

import { DiscoverWrapper, TopMenu } from './style';

import { NavLink } from 'react-router-dom';

import { Outlet } from 'react-router-dom'; // Outlet用于渲染children

const DiscoverList = memo(() => {
  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {dicoverMenu.map(item => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })}
          </TopMenu>
        </div>
      </DiscoverWrapper>
      <Outlet />
    </div>
  );
});

export default DiscoverList;
