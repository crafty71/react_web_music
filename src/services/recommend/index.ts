import request from '../index';

export function getTopBanners() {
  return request.get({
    url: '/banner?type=0',
  });
}

export function getPlaylistClassification() {
  return request.get({
    url: '/playlist/catlist',
  });
}

export function getHotRecommend() {
  return request.get({
    url: '/top/playlist',
  });
}

export function getNewAlbum() {
  return request.get({
    url: '/album/newest',
  });
}

export function getRankingList() {
  return request.get({
    url: '/toplist',
  });
}
