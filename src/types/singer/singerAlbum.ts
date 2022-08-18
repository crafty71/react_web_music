export interface ISingerAlbum {
  artist: Artist
  hotAlbums: HotAlbum[]
  more: boolean
  code: number
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  followed: boolean
  alias: string[]
  picId: number
  musicSize: number
  albumSize: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  trans: string
  name: string
  id: number
  picId_str: string
  img1v1Id_str: string
}

export interface HotAlbum {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  companyId: number
  blurPicUrl: string
  alias: string[]
  artists: Artist2[]
  copyrightId: number
  artist: Artist3
  picId: number
  briefDesc: string
  publishTime: number
  company: string
  picUrl: string
  commentThreadId: string
  pic: number
  tags: string
  description: string
  status: number
  subType: string
  name: string
  id: number
  type: string
  size: number
  picId_str?: string
  transNames?: string[]
}

export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  followed: boolean
  alias: any[]
  picId: number
  musicSize: number
  albumSize: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  trans: string
  name: string
  id: number
  img1v1Id_str: string
}

export interface Artist3 {
  img1v1Id: number
  topicPerson: number
  followed: boolean
  alias: string[]
  picId: number
  musicSize: number
  albumSize: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  trans: string
  name: string
  id: number
  picId_str?: string
  img1v1Id_str: string
}
