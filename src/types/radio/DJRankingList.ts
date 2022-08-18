export interface IDJRankingList {
  updateTime: number;
  toplist: IDJToplist[];
  code: number;
}

export interface IDJToplist {
  program: Program;
  rank: number;
  lastRank: number;
  score: number;
  programFeeType: number;
}

export interface Program {
  mainSong: MainSong;
  songs: any;
  dj: Dj;
  blurCoverUrl: string;
  radio: Radio;
  duration: number;
  authDTO: any;
  buyed: boolean;
  programDesc: any;
  h5Links: any;
  canReward: boolean;
  auditStatus: number;
  videoInfo: any;
  score: number;
  liveInfo: any;
  alg: any;
  disPlayStatus: any;
  auditDisPlayStatus: number;
  categoryName: any;
  secondCategoryName: any;
  existLyric: boolean;
  djPlayRecordVo: any;
  recommended: boolean;
  icon: any;
  trackCount: number;
  titbitImages: any;
  isPublish: boolean;
  pubStatus: number;
  bdAuditStatus: number;
  secondCategoryId: number;
  channels: string[];
  categoryId: number;
  createTime: number;
  createEventId: number;
  listenerCount: number;
  serialNum: number;
  scheduledPublishTime: number;
  coverId: number;
  coverUrl: string;
  smallLanguageAuditStatus: number;
  programFeeType: number;
  mainTrackId: number;
  titbits: any;
  feeScope: number;
  subscribedCount: number;
  reward: boolean;
  privacy: boolean;
  commentThreadId: string;
  description: string;
  name: string;
  id: number;
  subscribed: boolean;
  shareCount: number;
  likedCount: number;
  commentCount: number;
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
  noCopyrightRcmd: any;
  hMusic?: HMusic;
  mMusic: any;
  lMusic: LMusic;
  bMusic: BMusic;
  rtype: number;
  rurl: any;
  mvid: number;
  mp3Url: any;
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
  mark: number;
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
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
  brand: string;
}

export interface Radio {
  dj: any;
  category: string;
  secondCategory: string;
  buyed: boolean;
  price: number;
  originalPrice: number;
  discountPrice: any;
  purchaseCount: number;
  lastProgramName: any;
  videos: any;
  finished: boolean;
  underShelf: boolean;
  liveInfo: any;
  playCount: number;
  privacy: boolean;
  icon: any;
  manualTagsDTO: any;
  descPicList?: any[];
  dynamic: boolean;
  subCount: number;
  shortName?: string;
  categoryId: number;
  taskId: number;
  createTime: number;
  programCount: number;
  picId: number;
  lastProgramId: number;
  feeScope: number;
  lastProgramCreateTime: number;
  radioFeeType: number;
  intervenePicUrl: string;
  picUrl: string;
  intervenePicId: number;
  name: string;
  id: number;
  desc: string;
  subed: boolean;
}
