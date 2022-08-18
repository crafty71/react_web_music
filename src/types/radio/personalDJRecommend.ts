export interface IPersonalDJRecommend {
  code: number;
  category: number;
  result: IPersonalDJRecommendResult[];
}

export interface IPersonalDJRecommendResult {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: any;
  program: Program;
  alg: string;
}

export interface Program {
  mainSong: MainSong;
  songs: any;
  dj: Dj;
  blurCoverUrl: string;
  radio: Radio;
  subscribedCount: number;
  reward: boolean;
  mainTrackId: number;
  serialNum: number;
  listenerCount: number;
  name: string;
  id: number;
  createTime: number;
  description: string;
  userId: number;
  coverUrl: string;
  commentThreadId: string;
  channels: string[];
  titbits: any;
  titbitImages: any;
  pubStatus: number;
  trackCount: number;
  bdAuditStatus: number;
  programFeeType: number;
  buyed: boolean;
  programDesc: any;
  h5Links: any[];
  coverId: number;
  adjustedPlayCount: number;
  canReward: boolean;
  auditStatus: number;
  publish: boolean;
  duration: number;
  shareCount: number;
  subscribed: boolean;
  likedCount: number;
  commentCount: number;
  isPublish: boolean;
}

export interface MainSong {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist[];
  album: Album;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  sqMusic: any;
  hrMusic: any;
  ringtone: string;
  crbt: any;
  audition: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName: any;
  sign: any;
  mark: number;
  originCoverType: number;
  originSongSimpleData: any;
  single: number;
  noCopyrightRcmd: any;
  rurl: any;
  maid: number;
  bMusic: BMusic;
  mp3Url: any;
  rtype: number;
  hMusic?: HMusic;
  mMusic: any;
  lMusic: LMusic;
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Album {
  name: string;
  id: number;
  type: any;
  size: number;
  picId: number;
  blurPicUrl?: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: any;
  briefDesc: string;
  artist: Artist2;
  songs: any[];
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist3[];
  subType: any;
  transName: any;
  onSale: boolean;
  mark: number;
  gasless: number;
  picId_str?: string;
}

export interface Artist2 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Artist3 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface BMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface HMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface LMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface Dj {
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
  backgroundUrl?: string;
  authority: number;
  mutual: boolean;
  expertTags: any;
  experts: any;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
  brand: string;
}

export interface Radio {
  id: number;
  dj: any;
  name: string;
  picUrl: string;
  desc: string;
  subCount: number;
  programCount: number;
  createTime: number;
  categoryId: number;
  category: string;
  radioFeeType: number;
  feeScope: number;
  buyed: boolean;
  videos: any;
  finished: boolean;
  underShelf: boolean;
  purchaseCount: number;
  price: number;
  originalPrice: number;
  discountPrice: any;
  lastProgramCreateTime: number;
  lastProgramName: any;
  lastProgramId: number;
  picId: number;
  rcmdText?: string;
  hightQuality: boolean;
  whiteList: boolean;
  composeVideo: boolean;
  subed: boolean;
}
