export interface IBanner {
  data: Daum[];
  code: number;
}

export interface Daum {
  targetId: number;
  targetType: number;
  pic: string;
  url: string;
  typeTitle: string;
  exclusive: boolean;
}
