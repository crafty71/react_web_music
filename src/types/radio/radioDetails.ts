export interface IRadioDetails {
  code: number;
  msg: any;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  dj: Dj;
  picId: number;
  picUrl: string;
  desc: string;
  subCount: number;
  shareCount: number;
  likedCount: number;
  programCount: number;
  commentCount: number;
  createTime: number;
  categoryId: number;
  category: string;
  secondCategoryId: number;
  secondCategory: string;
  radioFeeType: number;
  feeScope: number;
  lastProgramCreateTime: number;
  lastProgramId: number;
  rcmdText: string;
  subed: boolean;
  commentDatas: CommentData[];
  feeInfo: any;
  unlockInfo: any;
  original: boolean;
  playCount: number;
  privacy: boolean;
  disableShare: boolean;
  icon: any;
  activityInfo: any;
  toplistInfo: any;
  dynamic: boolean;
  labelDto: any;
  labels: any;
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
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: any;
  experts: any;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: any;
  anchor: boolean;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  rewardCount: number;
  canReward: boolean;
}

export interface CommentData {
  userProfile: UserProfile;
  content: string;
  programName: string;
  programId: number;
  commentId: number;
}

export interface UserProfile {
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
  avatarDetail: any;
  anchor: boolean;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  avatarImgId_str: string;
}
