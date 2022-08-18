interface IHeaderLinks {
  title?: string;
  link?: string;
}

export const headerLinks: IHeaderLinks[] = [
  {
    title: '发现音乐',
    link: '/discover',
  },
  {
    title: '我的音乐',
    link: '/mine',
  },
  {
    title: '朋友',
    link: '/friend',
  },
  {
    title: '商城',
    link: 'https://music.163.com/store/product',
  },
  {
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/',
  },
  {
    title: '下载客户端',
    link: 'https://music.163.com/#/download',
  },
];

export const footerLinks: IHeaderLinks[] = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service',
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy',
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children',
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html',
  },
  {
    title: '意见反馈',
    link: '#',
  },
];

export const footerImages: IHeaderLinks[] = [
  {
    link: 'https://music.163.com/st/userbasic#/auth',
  },
  {
    link: 'https://music.163.com/recruit',
  },
  {
    link: 'https://music.163.com/web/reward',
  },
  {
    link: 'https://music.163.com/uservideo#/plan',
  },
];

// discover中的数据
export const dicoverMenu = [
  {
    title: '推荐',
    link: '/discover/recommend',
  },
  {
    title: '排行榜',
    link: '/discover/ranking',
  },
  {
    title: '歌单',
    link: '/discover/songList',
  },
  {
    title: '主播电台',
    link: '/discover/radio',
  },
  {
    title: '歌手',
    link: '/discover/singer',
  },
  {
    title: '新碟上架',
    link: '/discover/album',
  },
];
