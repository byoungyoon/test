export enum BLOG_INFLUENCER_TAG {
  YES = 'Yes',
  NO = 'No',
}

export enum AREA {
  BLOG = 'blog',
  POST = 'post',
  CAFE = 'cafe',
}

export enum JISOO {
  HIGH = '준최',
  BEST = '최적',
  NORMAL = '일반',
}

export enum TYPE {
  SEARCH = '검색',
  POPULAR = '스마트블럭', //'인기 있는',
  ELSE = '인기 있는', //'연관',
}

export type JisooTypes = {
  blog_score: number;
  category: string;
  influencer_tag: BLOG_INFLUENCER_TAG;
};

export type BlogTypes = {
  area: string;
  blog_name: string;
  date: string;
  href: string;
  id: string;
  is_influencer: boolean;
  jisoo: JisooTypes;
  rank: number;
  subject: string;
  title: string;
  visitants: string;
};
