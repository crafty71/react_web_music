export interface ICateList {
  categories: Category[];
  code: number;
}

export interface Category {
  pic56x56IdStr: string;
  pic56x56Url: string;
  pic96x96IdStr: string;
  pic96x96Url: string;
  pic84x84IdUrl: string;
  picPCWhiteStr: string;
  picPCWhiteUrl: string;
  picPCBlackStr: string;
  picPCBlackUrl: string;
  picWebStr: string;
  picWebUrl: string;
  picMacId: string;
  picMacUrl: string;
  picUWPId: string;
  picUWPUrl: string;
  picIPadStr: string;
  picIPadUrl: string;
  picPCWhite: number;
  picPCBlack: number;
  picWeb: number;
  picIPad: number;
  pic84x84Id: number;
  pic56x56Id: number;
  pic96x96Id: number;
  name: string;
  id: number;
}
