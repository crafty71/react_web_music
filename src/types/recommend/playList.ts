export interface IPlayList {
  code: number;
  all: All;
  sub: Sub[];
  categories: Categories;
}

export interface All {
  name: string;
  resourceCount: number;
  imgId: number;
  imgUrl: any;
  type: number;
  category: number;
  resourceType: number;
  hot: boolean;
  activity: boolean;
}

export interface Sub {
  name: string;
  resourceCount: number;
  imgId: number;
  imgUrl: any;
  type: number;
  category: number;
  resourceType: number;
  hot: boolean;
  activity: boolean;
}

export interface Categories {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
}
