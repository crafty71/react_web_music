import { Navigate } from 'react-router-dom';

import Discover from '@/view/pages/discover/Discover';
import Friends from '@/view/pages/friend';
import Mine from '@/view/pages/mine';
import Recommend from '@/view/pages/discover/childcpn/recommend';
import Ranking from '@/view/pages/discover/childcpn/ranking';
import SongList from '@/view/pages/discover/childcpn/songList';
import RadioList from '@/view/pages/discover/childcpn/radio';
import Singer from '@/view/pages/discover/childcpn/singer';
import Album from '@/view/pages/discover/childcpn/album';
import React from 'react';
import Player from '@/view/pages/player';
import SongListDetail from '@/view/pages/songListDetail/songListDetail';
import AlbumDetails from '@/view/pages/album';
import SingerDetail from '@/view/pages/singerDetail';
import RadioDetails from '@/view/pages/radioDetail';

const routes = [
  { path: '/', element: <Navigate to="/discover/" /> }, // Redirect 重定向！
  {
    path: '/discover/',
    element: <Discover />,
    children: [
      // BasicLayout 业务页面
      { path: '/discover/', element: <Navigate to="recommend" /> },
      {
        path: 'recommend',
        element: <Recommend />,
      },
      {
        path: 'ranking',
        element: <Ranking />,
      },
      {
        path: 'songList',
        element: <SongList />,
      },
      {
        path: 'radio',
        element: <RadioList />,
      },
      {
        path: 'singer',
        element: <Singer />,
      },
      {
        path: 'album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/friend',
    element: <Friends />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/song',
    element: <Player />,
  },
  {
    path: 'detail',
    element: <SongListDetail />,
  },
  {
    path: '/albumDetail',
    element: <AlbumDetails />,
  },
  {
    path: '/singerDetail',
    element: <SingerDetail />,
  },
  {
    path: '/radioDetails',
    element: <RadioDetails />,
  },
];

export default routes;
