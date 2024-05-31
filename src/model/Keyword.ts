import { KEYWORD_TYPE } from '@/hooks/general/interface';

interface IKeyword {
  keyword_type: KEYWORD_TYPE.AIR | KEYWORD_TYPE.VIEW;
}

export type KeywordAirDataTypes = {
  article_data: {
    article_url: string;
    image_url: string;
  }[];
  keyword: string;
  keyword_url: string;
};

interface IKeywordAir extends IKeyword {
  keyword_type: KEYWORD_TYPE.AIR;
  air_data: KeywordAirDataTypes[];
}

export type KeywordViewDataTypes = {
  blog_url: string;
  blogger_name: string;
  date: string;
  description: string;
  image_url: string;
  title: string;
};

interface IKeywordView extends IKeyword {
  keyword_type: KEYWORD_TYPE.VIEW;
  blog_data: KeywordViewDataTypes[];
}

export type KeywordTypes = IKeywordAir | IKeywordView;
