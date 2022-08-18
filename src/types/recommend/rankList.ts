export interface IRankList {
  code: number;
  list: List[];
  artistToplist: ArtistToplist;
}

export interface List {
  subscribers: any[];
  subscribed: any;
  creator: any;
  artists: any;
  tracks: any;
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: any;
  titleImage: number;
  titleImageUrl: any;
  englishTitle: any;
  opRecommend: boolean;
  recommendInfo: any;
  adType: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  trackUpdateTime: number;
  totalDuration: number;
  trackCount: number;
  specialType: number;
  coverImgUrl: string;
  privacy: number;
  updateTime: number;
  commentThreadId: string;
  playCount: number;
  userId: number;
  coverImgId: number;
  anonimous: boolean;
  newImported: boolean;
  highQuality: boolean;
  createTime: number;
  ordered: boolean;
  tags: string[];
  description?: string;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType?: string;
}

export interface ArtistToplist {
  coverUrl: string;
  name: string;
  upateFrequency: string;
  position: number;
  updateFrequency: string;
}
