import request from '../index';

export function getNewAlbumOFAlbum() {
  return request.get({
    url: '/album/newest',
  });
}

export function getAllNewAlbum(area: string = 'all', offset: string | number = 0) {
  return request.get({
    url: `/album/new?area=${area}&limit=20&offset=${offset}`,
  });
}

export function getAlbumDetail(id: number | string) {
  return request.get({
    url: `/album?id=${id}`,
  });
}

export function getAlbumComments(id: string | number, offset: string | number = 0) {
  return request.get({
    url: `/comment/album?id=${id}&offset=${offset}`,
  });
}
