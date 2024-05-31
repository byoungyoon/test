import {
  BlogSectionStructre,
  FetchedBlogs,
  KeywordAnalysisData,
  ScrapeBlogsApiResponse,
  ScrapeRelatedTermsApiResponse,
  ScrapeRelatedTermsCustomResponse,
} from '@/hooks/general/interface';

import { JISOO } from '@/model/Blog';

export function transformScrapedBlogsData(
  apiResponse: ScrapeBlogsApiResponse
): FetchedBlogs[] {
  const transformedData: FetchedBlogs[] = [];

  for (let i = 0; i < 10; i++) {
    const customResponse: FetchedBlogs = {
      rank: i + 1,
      area: apiResponse.area[i],
      date: apiResponse.date[i],
      href: apiResponse.href[i],
      id: apiResponse.id[i] ? apiResponse.id[i] : '',
      subject: apiResponse.subject[i],
      title: apiResponse.title[i],
      visitants: apiResponse.visitants[i] ? apiResponse.visitants[i] : '0',
    };

    transformedData.push(customResponse);
  }
  return transformedData;
}

export function transformRelatedTermsData(
  apiResponse: ScrapeRelatedTermsApiResponse
): ScrapeRelatedTermsCustomResponse[] {
  const transformedData: ScrapeRelatedTermsCustomResponse[] = [];

  for (let i = 0; i < 10; i++) {
    const customResponse: ScrapeRelatedTermsCustomResponse = {
      keyword: apiResponse.Keywords[i],
      type: apiResponse.Type[i],
      search_intensity_pc: apiResponse.search_intensity_PC[i]
        ? apiResponse.search_intensity_PC[i]
        : 0,
      search_intensity_all: apiResponse.search_intensity_all[i]
        ? apiResponse.search_intensity_all[i]
        : 0,
      search_intensity_mobile: apiResponse.search_intensity_mo[i]
        ? apiResponse.search_intensity_mo[i]
        : 0,
    };

    transformedData.push(customResponse);
  }
  return transformedData;
}

export const convertSections = (
  sections: Record<string, { activeUrl: string; isActive: number }>
): BlogSectionStructre[] => {
  return (
    sections &&
    Object.entries(sections).map(([label, { activeUrl, isActive }], index) => ({
      id: index + 1,
      label,
      active: !!isActive,
      ...(activeUrl !== 'NOT ACTIVE' && { activeUrl }),
    }))
  );
};

export const maintainKeywordAnalysisData = (data: KeywordAnalysisData) => {
  if (data) {
    const maintainedData: {
      label: string;
      count: number;
      attached_count: number;
      sub_labels: string[] | [];
    }[] = [];

    for (const [key, value] of Object.entries(data)) {
      const [count, attached_count, sub_labels] = value;
      maintainedData.push({
        label: key,
        count,
        attached_count,
        sub_labels,
      });
    }
    return maintainedData;
  } else return null;
};

export const convertPercentileDistributionKorean = (key: string) => {
  if (key.includes('best')) {
    return JISOO.BEST + key.slice(4);
  } else if (key.includes('high')) {
    return JISOO.HIGH + key.slice(4);
  } else {
    return '나쁨';
  }
};
