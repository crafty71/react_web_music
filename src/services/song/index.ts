import request from '../index';

export function getSongPlayAddress(id: string | number) {
  return request.get({
    url: `/song/url?id=${id}`,
  });
}

export function getSongLyric(id: string | number) {
  return request.get({
    url: `/lyric?id=${id}`,
  });
}

export function getSongComment(id: number | string, offset: number | string) {
  return request.get({
    url: `/comment/music?id=${id}&offset=${offset}`,
  });
}

export function getSongListDetail(id: number | string) {
  return request.get({
    url: `/playlist/detail?id=${id}`,
  });
}
