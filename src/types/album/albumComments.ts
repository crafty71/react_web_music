export interface IAlbumComments {
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
  userId: number;
  avatarUrl: string;
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
  associator?: Associator;
  musicPackage?: MusicPackage;
  redVipAnnualCount: number;
  redVipLevel: number;
}

export interface Associator {
  vipCode: number;
  rights: boolean;
}

export interface MusicPackage {
  vipCode: number;
  rights: boolean;
}

export interface BeReplied {
  user: User2;
  beRepliedCommentId: number;
  content: string;
  richContent: any;
  status: number;
  expressionUrl: any;
}

export interface User2 {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  commonIdentity: any;
  userId: number;
  avatarUrl: string;
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

export interface Decoration {}

export interface Comment {
  user: User3;
  beReplied: BeReplied2[];
  pendantData?: PendantData2;
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
  decoration: Decoration2;
  repliedMark: any;
  grade: any;
  liked: boolean;
}

export interface User3 {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  commonIdentity: any;
  userId: number;
  avatarUrl: string;
  avatarDetail?: AvatarDetail;
  userType: number;
  followed: boolean;
  mutual: boolean;
  remarkName: any;
  vipRights?: VipRights2;
  nickname: string;
  authStatus: number;
  expertTags: any;
  experts: any;
  vipType: number;
}

export interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

export interface VipRights2 {
  associator: Associator2;
  musicPackage: any;
  redVipAnnualCount: number;
  redVipLevel: number;
}

export interface Associator2 {
  vipCode: number;
  rights: boolean;
}

export interface BeReplied2 {
  user: User4;
  beRepliedCommentId: number;
  content: string;
  richContent: any;
  status: number;
  expressionUrl: any;
}

export interface User4 {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  commonIdentity: any;
  userId: number;
  avatarUrl: string;
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

export interface PendantData2 {
  id: number;
  imageUrl: string;
}

export interface Decoration2 {}
