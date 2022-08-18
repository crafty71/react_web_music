import request from '../index';

export function getDJBanner() {
  return request.get({
    url: '/dj/banner',
  });
}

export function getCateList() {
  return request.get({
    url: '/dj/catelist',
  });
}

export function getDJRecommend() {
  return request.get({
    url: '/dj/recommend',
  });
}

export function getDJRankingList(limit: number | string = 10, offset: number | string = 1) {
  return request.get({
    url: `/dj/program/toplist?limit=${limit}&offset=${offset}`,
  });
}

export function getPersonalDJRecommend() {
  return request.get({
    url: '/personalized/djprogram',
  });
}

export function getRadioDetails(id: string | number) {
  return request.get({
    url: `/dj/detail?rid=${id}`,
  });
}
