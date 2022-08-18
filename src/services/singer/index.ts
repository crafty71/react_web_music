import request from '../index';

export function getSingerList(initial: string | number = -1) {
  return request.get({
    url: `/artist/list?type=-1&area=-1&limit=100&offset=4&initial=${initial}`,
  });
}

export function getSingerListDetail(id: number | string) {
  return request.get({
    url: `/artist/detail?id=${id}`,
  });
}

export function getSingerSongList(id: number | string) {
  return request.get({
    url: `/artists?id=${id}`,
  });
}

export function getSingerAlbum(id: number | string, offset: number | string = 0) {
 return request.get({
   url: `/artist/album?id=${id}&limit=10&offset=${offset}`
 })
}

