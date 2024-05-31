import { KEYWORD_TYPE } from '@/hooks/general/interface';

export type KeywordDetailTypes = {
  keyword_type: KEYWORD_TYPE.AIR | KEYWORD_TYPE.VIEW;
  keyword_type_data: KeywordDetailBlogTypes[];
};

export type KeywordDetailBlogTypes = {
  blog: {
    id: string;
    inner_data: {
      KeywordAnalysis: Record<string, [number, number, string[]]>;
      blog_text: string;
      char_count_including_spaces: number;
      char_count_excluding_spaces: number;
      date: string;
      first_image: string;
      no_of_images: number;
      no_of_videos: number;
      purified_data: string;
      text: [];
    };
    subject: string;
    tag_data: {
      tag_name: string;
      tag_url: string;
    }[];
    url: string;
    visitants: number;
  };
  hostedImageUrl: string;
  jisoo: {
    blog_score: number;
    category: string;
    influencer_tag: string;
  };
};

export type KeywordDetailAnalysisTypes = {
  part2_data: {
    blog_wise_keyword: Record<string, Record<string, number>>;
    max: Record<string, number>;
  };
  success: boolean;
};

export type KeywordDetailAddUrlTypes = {
  data: {
    id: string;
    inner_data: {
      KeywordAnalysis: Record<string, [number, number, string[]]>;
      blog_text: string;
      char_count_including_spaces: number;
      char_count_excluding_spaces: number;
      date: string;
      first_image: string;
      no_of_images: number;
      no_of_videos: number;
      purified_data: string;
      text: [];
    };
    subject: string;
    tag_data: {
      tag_name: string;
      tag_url: string;
    }[];
    url: string;
    visitants: number;
  }[];
  jisoo: {
    blog_score: number;
    category: string;
    influencer_tag: string;
  };
};
