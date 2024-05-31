import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { postBlogSectionVolume } from '@/app/_lib/postBlogSectionVolume';
import { getKeyword } from '@/app/keyword-analysis/[search]/_lib/getKeyword';

type Props = {
  search: string;
  children: ReactNode;
};

export default async function KeywordSuspense({ search, children }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_POPULAR_TERM_IMAGES,
      search,
    ],
    queryFn: getKeyword,
  });
  await queryClient.prefetchQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_BLOG_SEARCH_VOLUME_DATA, search],
    queryFn: postBlogSectionVolume,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
