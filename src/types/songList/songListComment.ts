export interface ISongListComment {
  isMusician: boolean;
  cnum: number;
  userId: number;
  topComments: any[];
  moreHot: boolean;
  hotComments: HotComment[];
  commentBanner: any;
  code: number;
  comments: Comment[];
  total: number;
  more: boolean;
}

export interface HotComment {
  user: User;
  beReplied: any[];
  pendantData: any;
  showFloorComment: any;
  status: number;
  commentId: number;
  content: string;
  richContent: any;
  contentResource: any;
  time: number;
  timeStr: string;
  needDisplayTime: boolean;
  likedCount: number;
  expressionUrl: any;
  commentLocationType: number;
  parentCommentId: number;
  decoration?: Decoration;
  repliedMark: any;
  grade: any;
  liked: boolean;
}

export interface User {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  commonIdentity: any;
  avatarUrl: string;
  userId: number;
  avatarDetail: any;
  userType: number;
  followed: boolean;
  mutual: boolean;
  remarkName: any;
  vipRights: any;
  nickname: string;
  authStatus: number;
  expertTags: any;
  experts: any;
  vipType: number;
}

export interface Decoration {
  repliedByAuthorCount: number;
}

export interface Comment {
  user: User2;
  beReplied: BeReplied[];
  pendantData?: PendantData;
  showFloorComment: any;
  status: number;
  commentId: number;
  content: string;
  richContent: any;
  contentResource: any;
  time: number;
  timeStr: string;
  needDisplayTime: boolean;
  likedCount: number;
  expressionUrl: any;
  commentLocationType: number;
  parentCommentId: number;
  decoration?: Decoration2;
  repliedMark: any;
  grade: any;
  liked: boolean;
}

export interface User2 {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  commonIdentity: any;
  avatarUrl: string;
  userId: number;
  avatarDetail: any;
  userType: number;
  followed: boolean;
  mutual: boolean;
  remarkName: any;
  vipRights?: VipRights;
  nickname: string;
  authStatus: number;
  expertTags: any;
  experts: any;
  vipType: number;
}

export interface VipRights {
  associator: Associator;
  musicPackage: any;
  redVipAnnualCount: number;
  redVipLevel: number;
}

export interface Associator {
  vipCode: number;
  rights: boolean;
}

export interface BeReplied {
  user: User3;
  beRepliedCommentId: number;
  content?: string;
  richContent: any;
  status: number;
  expressionUrl: any;
}

export interface User3 {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  commonIdentity: any;
  avatarUrl: string;
  userId: number;
  avatarDetail: any;
  userType: number;
  followed: boolean;
  mutual: boolean;
  remarkName: any;
  vipRights: any;
  nickname: string;
  authStatus: number;
  expertTags: any;
  experts: any;
  vipType: number;
}

export interface PendantData {
  id: number;
  imageUrl: string;
}

export interface Decoration2 {}
