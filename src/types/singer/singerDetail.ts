export interface ISingerDetail {
  code: number;
  message: string;
  data: Data;
}

export interface Data {
  videoCount: number;
  identify: Identify;
  artist: Artist;
  blacklist: boolean;
  preferShow: number;
  showPriMsg: boolean;
  secondaryExpertIdentiy: SecondaryExpertIdentiy[];
}

export interface Identify {
  imageUrl: any;
  imageDesc: string;
  actionUrl: string;
}

export interface Artist {
  id: number;
  cover: string;
  name: string;
  transNames: any[];
  identities: string[];
  identifyTag: any;
  briefDesc: string;
  rank: Rank;
  albumSize: number;
  musicSize: number;
  mvSize: number;
}

export interface Rank {
  rank: number;
  type: number;
}

export interface SecondaryExpertIdentiy {
  expertIdentiyId: number;
  expertIdentiyName: string;
  expertIdentiyCount: number;
}
