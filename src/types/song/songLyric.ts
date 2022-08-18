export interface ISongLyric {
  sgc: boolean;
  sfy: boolean;
  qfy: boolean;
  transUser: TransUser;
  lrc: Lrc;
  klyric: Klyric;
  tlyric: Tlyric;
  romalrc: Romalrc;
  code: number;
}

export interface TransUser {
  id: number;
  status: number;
  demand: number;
  userid: number;
  nickname: string;
  uptime: number;
}

export interface Lrc {
  version: number;
  lyric: string;
}

export interface Klyric {
  version: number;
  lyric: string;
}

export interface Tlyric {
  version: number;
  lyric: string;
}

export interface Romalrc {
  version: number;
  lyric: string;
}
