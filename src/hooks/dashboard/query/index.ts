import { useQuery } from '@tanstack/react-query';

import { Get } from '@/utils/apiService';

export const FETCH_DASHBOARD_DATA = {
  FETCH_PERCENTILE_DATA: 'FETCH_PERCENTILE_DATA',
  FETCH_REPLACE_DATA: 'FETCH_REPLACE_DATA',
  SAVE_PERCENTILE_DATA: 'SAVE_PERCENTILE_DATA',
  SAVE_REPLACE_DATA: 'SAVE_REPLACE_DATA',
};

const fetchPercentileDataAction = async () => {
  const data = await Get({
    url: `/dashboard/get-percentile-data`,
  });

  return data;
};

export const useFetchPercentileData = () => {
  return useQuery({
    queryKey: [FETCH_DASHBOARD_DATA.FETCH_PERCENTILE_DATA],
    queryFn: () => fetchPercentileDataAction(),
  });
};

const fetchReplaceDataAction = async () => {
  const data = await Get({
    url: `/dashboard/get-replace-data`,
  });

  return data;
};

export const useFetchReplaceData = () => {
  return useQuery({
    queryKey: [FETCH_DASHBOARD_DATA.FETCH_REPLACE_DATA],
    queryFn: () => fetchReplaceDataAction(),
  });
};
