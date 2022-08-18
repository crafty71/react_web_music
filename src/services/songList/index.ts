import request from '../index';

export function getSongList(offset: number = 1, cat = '全部') {
  return request.get({
    url: `/top/playlist?limit=20&offset=${offset}&cat=${cat}`,
  });
}

export function getSongListDetailSongList(id: string | number) {
  return request.get({
    url: `/playlist/track/all?id=${id}&limit=20&offset=1`,
  });
}

export function getSongListComments(id: string | number, offset: number = 1) {
  return request.get({
    url: `/comment/playlist?id=${id}&limit=20&offset=${offset}`,
  });
}
