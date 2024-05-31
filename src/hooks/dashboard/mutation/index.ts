import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  BlogScoreData,
  PercentileData,
  ReplaceData,
} from '@/hooks/dashboard/interface';
import { FETCH_DASHBOARD_DATA } from '@/hooks/dashboard/query';

import { Post } from '@/utils/apiService';

const savePercentileDataAction = async (
  body: PercentileData | BlogScoreData
) => {
  const data = await Post({
    url: `/dashboard/save-percentile-data`,
    body: {
      data: body,
    },
  });
  return data;
};

export const useSavePercentileData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [FETCH_DASHBOARD_DATA.SAVE_PERCENTILE_DATA],
    mutationFn: (body: PercentileData | BlogScoreData) =>
      savePercentileDataAction(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [FETCH_DASHBOARD_DATA.FETCH_PERCENTILE_DATA],
      });
    },
  });
};

const saveReplaceDataAction = async (body: ReplaceData[]) => {
  const data = await Post({
    url: `/dashboard/save-replace-data`,
    body,
  });
  return data;
};

export const useSaveReplaceData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [FETCH_DASHBOARD_DATA.SAVE_REPLACE_DATA],
    mutationFn: (body: ReplaceData[]) => saveReplaceDataAction(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [FETCH_DASHBOARD_DATA.FETCH_REPLACE_DATA],
      });
    },
  });
};
