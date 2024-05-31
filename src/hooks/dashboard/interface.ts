export interface ReplaceData {
  replace_with: string;
  text: string;
}

export interface PercentileData {
  high1: string;
  high2: string;
  high3: string;
  high4: string;
  high5: string;
  best1: string;
  best2: string;
  best3: string;
  best4: string;
  best5: string;
  normal: string;
}

export interface BlogScoreData {
  avg_articles_comments: string;
  avg_articles_likes: string;
  date_blog_created: string;
  no_followers: string;
  no_recent_articles: string;
  visitors_accumulative: string;
  visitors_average: string;
  visitors_current: string;
  w1: string;
  w2: string;
  w3: string;
  w4: string;
  w5: string;
  w6: string;
  w7: string;
  w8: string;
}

export interface BlogScoreDataResponse {
  multiple_key: string;
  multiple: string;
  weight_key: string;
  weight: string;
}

export enum EDIT_REPLACE_FIELD {
  TEXT = 'TEXT',
  REPLACE_WITH = 'REPLACE_WITH',
}
