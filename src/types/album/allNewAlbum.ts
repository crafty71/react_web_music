export interface IAllNewAlbum {
  total: number;
  albums: Album[];
  code: number;
}

export interface Album {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags: any;
  alias: string[];
  artists: Artist[];
  copyrightId: number;
  picId: number;
  artist: Artist2;
  briefDesc: string;
  publishTime: number;
  company: string;
  picUrl: string;
  commentThreadId: string;
  blurPicUrl: string;
  pic: number;
  companyId: number;
  description: string;
  tags: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  transNames?: string[];
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  alias: any[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist2 {
  img1v1Id: number;
  topicPerson: number;
  alias: string[];
  picId: number;
  briefDesc: string;
  musicSize: number;
  albumSize: number;
  picUrl: string;
  img1v1Url: string;
  followed: boolean;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
  picId_str?: string;
}
