import { memo } from 'react';
import { headerLinks } from '@/common/local-data';
import { Input } from 'tdesign-react';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import React from 'react';

import { NavLink } from 'react-router-dom';

const AppHeader = memo(() => {
  // 页面代码
  const showSelectItem = (item: any, index: number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href="#/" className="logo sprite_01">
              网易云音乐
            </a>
            <div className="select-list">
              {headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                );
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input className="search" value="音乐/视频/电台/用户" />
            <div className="center">创作者中心</div>
            <div>登录</div>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
});

export default AppHeader;
