import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { getKeywordDetail } from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_lib/getKeywordDetail';

type Props = {
  search: string;
  keyword: string[];
  limit: number;
  children: ReactNode;
};

export default async function KeywordDetailSuspense({
  search,
  keyword,
  limit,
  children,
}: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_POPULAR_KEYWORDS_DETAILED_DATA,
      search,
      keyword,
      limit,
    ],
    queryFn: getKeywordDetail,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
