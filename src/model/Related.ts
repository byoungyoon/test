export enum RELATED_TYPE {
  SEARCH = '검색',
  POPULAR = '스마트블럭', //'인기 있는',
  ELSE = '인기 있는', //'연관',
}

export type RelatedTypes = {
  keyword: string;
  search_intensity_all: number;
  search_intensity_mobile: number;
  search_intensity_pc: number;
  type: RELATED_TYPE;
};
