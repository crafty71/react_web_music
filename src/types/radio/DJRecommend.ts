export interface IDJRecommend {
  djRadios: DjRadio[];
  name: string;
  code: number;
}

export interface DjRadio {
  id: number;
  name: string;
  picUrl: string;
  programCount: number;
  subCount: number;
  createTime: number;
  categoryId: number;
  category: string;
  rcmdtext?: string;
  radioFeeType: number;
  feeScope: number;
  playCount: number;
  subed: boolean;
  dj: Dj;
  copywriter: string;
  buyed: boolean;
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
  avatarImgId_str: string;
}
