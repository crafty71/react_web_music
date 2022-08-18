export interface ISongComment {
  isMusician: boolean;
  cnum: number;
  userId: number;
  topComments: any[];
  code: number;
  comments: ICommentOfSong[];
  total: number;
  more: boolean;
}

export interface ICommentOfSong {
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
  decoration: Decoration;
  repliedMark: any;
  grade: any;
  liked: boolean;
}

export interface User {
  locationInfo: any;
  liveInfo: any;
  anonym: number;
  userId: number;
  commonIdentity: any;
  avatarDetail: any;
  userType: number;
  avatarUrl: string;
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

export interface Decoration {}
