import { ISongListComment } from '@/types/songList/songListComment';
import { ISongListDetail } from '@/types/songList/songListDetail';
import { ISongListDetailSongList } from '@/types/songList/songListDetailSongList';

export interface storeType {
  songListDetail: ISongListDetail;
  SongListDetailSongList: ISongListDetailSongList,
  songListComments: ISongListComment
}
