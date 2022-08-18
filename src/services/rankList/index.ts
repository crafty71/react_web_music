import request from '../index';

export function getRankListDetail(id: string | number = 19723756) {
  return request.get({
    url: `/top/list?id=${id}`,
  });
}

export function getRankListComments(id: string | number = 19723756, offset: string | number = 1) {
  return request.get({
    url: `/comment/playlist?limit=${20}&offset=${offset}&id=${id}`,
  });
}
