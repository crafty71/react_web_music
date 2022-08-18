export interface IRankListDetail {
  playlist: IPlaylist;
  code: number;
}

export interface IPlaylist {
  subscribers: any[];
  subscribed: any;
  creator: Creator;
  tracks: Track[];
  videoIds: any;
  videos: any;
  trackIds: TrackId[];
  updateFrequency: any;
  backgroundCoverId: number;
  backgroundCoverUrl: any;
  titleImage: number;
  titleImageUrl: any;
  englishTitle: any;
  opRecommend: boolean;
  subscribedCount: number;
  cloudTrackCount: number;
  userId: number;
  createTime: number;
  highQuality: boolean;
  newImported: boolean;
  coverImgId: number;
  updateTime: number;
  trackCount: number;
  coverImgUrl: string;
  specialType: number;
  commentThreadId: string;
  privacy: number;
  trackUpdateTime: number;
  playCount: number;
  trackNumberUpdateTime: number;
  adType: number;
  tags: any[];
  ordered: boolean;
  description: string;
  status: number;
  name: string;
  id: number;
  shareCount: number;
  coverImgId_str: string;
  ToplistType: string;
  commentCount: number;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: any;
  experts: any;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: AvatarDetail;
  anchor: boolean;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  avatarImgId_str: string;
}

export interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

export interface Track {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia: string[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  a: any;
  cd: string;
  no: number;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  noCopyrightRcmd: any;
  rtype: number;
  rurl: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  tns?: string[];
}

export interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: string[];
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

export interface TrackId {
  id: number;
  v: number;
  at: number;
  alg: any;
  ratio: number;
  lr?: number;
}
