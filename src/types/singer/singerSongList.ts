export interface ISingerSongList {
  artist: Artist
  hotSongs: HotSong[]
  more: boolean
  code: number
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  trans: string
  briefDesc: string
  alias: string[]
  picId: number
  musicSize: number
  albumSize: number
  followed: boolean
  picUrl: string
  img1v1Url: string
  name: string
  id: number
  publishTime: number
  picId_str: string
  img1v1Id_str: string
  mvSize: number
}

export interface HotSong {
  rtUrls: any[]
  ar: Ar[]
  al: Al
  st: number
  noCopyrightRcmd: any
  songJumpInfo: any
  no: number
  fee: number
  djId: number
  mv: number
  t: number
  v: number
  h?: H
  l?: L
  sq?: Sq
  hr: any
  cd: string
  alia: string[]
  pst: number
  rtype: number
  rurl: any
  pop: number
  rt?: string
  mst: number
  cp: number
  crbt: any
  cf: string
  dt: number
  rtUrl: any
  ftype: number
  a: any
  m?: M
  name: string
  id: number
  privilege: Privilege
  eq?: string
}

export interface Ar {
  id: number
  name: string
  alia?: string[]
}

export interface Al {
  id: number
  name: string
  picUrl?: string
  pic_str: string
  pic: number
  alia?: string[]
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}
