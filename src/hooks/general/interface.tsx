export interface ScrapeBlogsApiResponse {
  area: string[];
  date: string[];
  href: string[];
  id: string[];
  subject: string[];
  title: string[];
  visitants: string[];
}

export enum INFLUENCER_TAG {
  YES = 'Yes',
  NO = 'No',
}

export interface FetchedBlogs {
  rank: number;
  area: string;
  date: string;
  href: string;
  id: string;
  subject: string;
  title: string;
  visitants: string;
  jisoo?: {
    blog_score: number;
    category: string;
    influencer_tag: INFLUENCER_TAG.YES | INFLUENCER_TAG.NO;
  };
}

export interface ScrapeRelatedTermsApiResponse {
  Keywords: string[];
  Type: string[];
  search_intensity_PC: number[];
  search_intensity_all: number[];
  search_intensity_mo: number[];
}

export interface ScrapeRelatedTermsCustomResponse {
  keyword: string;
  type: string;
  search_intensity_pc: number;
  search_intensity_all: number;
  search_intensity_mobile: number;
}

export enum KEYWORD_TYPE {
  AIR = 'air',
  VIEW = 'view',
}

export interface ArticleData {
  article_url: string;
  image_url: string;
}

export interface KeywordAnalysisData {
  [key: string]: [number, number, string[]];
}

export interface BlogTagData {
  tag_name: string;
  tag_url?: string;
}

export interface BlogSectionStructre {
  id: number;
  label: string;
  active: boolean;
  activeUrl?: string;
}
