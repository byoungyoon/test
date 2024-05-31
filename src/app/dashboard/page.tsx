'use client';

import { useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';

import { cn } from '@/lib/utils';
import {
  BlogScoreData,
  PercentileData,
  ReplaceData,
} from '@/hooks/dashboard/interface';
import {
  useSavePercentileData,
  useSaveReplaceData,
} from '@/hooks/dashboard/mutation';
import {
  FETCH_DASHBOARD_DATA,
  useFetchPercentileData,
  useFetchReplaceData,
} from '@/hooks/dashboard/query';

import BlogScoreSection from '@/components/dashboard/BlogScoreSection';
import ChangeStringSection from '@/components/dashboard/ChangeStringSection';
import PercentileSection from '@/components/dashboard/PercentileSection';
import TextLoader from '@/components/loaders/TextLoader';

enum EDIT_REPLACE_FIELD {
  TEXT = 'TEXT',
  REPLACE_WITH = 'REPLACE_WITH',
}

const dashboardNavList = [
  {
    id: 1,
    name: '관리자 페이지',
  },
];

const errorMessage = 'Empty Field';

const percentileSchema = yup.object({
  best1: yup.string().required(errorMessage),
  best2: yup.string().required(errorMessage),
  best3: yup.string().required(errorMessage),
  best4: yup.string().required(errorMessage),
  best5: yup.string().required(errorMessage),
  high1: yup.string().required(errorMessage),
  high2: yup.string().required(errorMessage),
  high3: yup.string().required(errorMessage),
  high4: yup.string().required(errorMessage),
  high5: yup.string().required(errorMessage),
  normal: yup.string().required(errorMessage),
});

const blogScoreSchema = yup.object({
  avg_articles_comments: yup.string().required(errorMessage),
  avg_articles_likes: yup.string().required(errorMessage),
  date_blog_created: yup.string().required(errorMessage),
  no_followers: yup.string().required(errorMessage),
  no_recent_articles: yup.string().required(errorMessage),
  visitors_accumulative: yup.string().required(errorMessage),
  visitors_average: yup.string().required(errorMessage),
  visitors_current: yup.string().required(errorMessage),
  w1: yup.string().required(errorMessage),
  w2: yup.string().required(errorMessage),
  w3: yup.string().required(errorMessage),
  w4: yup.string().required(errorMessage),
  w5: yup.string().required(errorMessage),
  w6: yup.string().required(errorMessage),
  w7: yup.string().required(errorMessage),
  w8: yup.string().required(errorMessage),
});

const AdminDashboard = () => {
  const queryClient = useQueryClient();

  const [replacedData, setReplacedData] = useState<ReplaceData[] | []>([]);
  const [replaceEditField, setReplaceEditField] = useState<
    number | undefined
  >();

  const { data: PercentileData } = useFetchPercentileData();
  const { data: FetchedReplacedData } = useFetchReplaceData();
  const { mutateAsync: savePercentileDataApi } = useSavePercentileData();
  const { mutateAsync: saveReplaceDataApi } = useSaveReplaceData();

  useEffect(() => {
    if (FetchedReplacedData) {
      setReplacedData(FetchedReplacedData);
    }
  }, [FetchedReplacedData]);

  const handleReplaceEditable = useCallback(() => {
    setReplaceEditField(undefined);
    queryClient.invalidateQueries({
      queryKey: [FETCH_DASHBOARD_DATA.FETCH_REPLACE_DATA],
    });
  }, [setReplaceEditField, queryClient]);

  const handleReplaceStringChange = useCallback(
    (value: string, key: EDIT_REPLACE_FIELD) => {
      if (key === EDIT_REPLACE_FIELD.TEXT) {
        replacedData[replaceEditField as number].text = value;
      } else {
        replacedData[replaceEditField as number].replace_with = value;
      }
    },
    [replacedData, replaceEditField]
  );

  const onEditReplaceString = useCallback(
    (id: number) => {
      setReplaceEditField(
        replaceEditField === id
          ? replacedData[id].text === '' || replacedData[id].replace_with === ''
            ? id
            : undefined
          : id
      );
    },
    [setReplaceEditField, replaceEditField, replacedData]
  );

  const handleDeleteString = useCallback(
    (id: number) => {
      setReplacedData((prev) => prev.filter((_, index) => index !== id));
    },
    [setReplacedData]
  );

  const addNewField = useCallback(() => {
    if (
      replacedData[replacedData.length - 1].text !== '' &&
      replacedData[replacedData.length - 1].replace_with !== ''
    ) {
      setReplaceEditField(replacedData.length);
      setReplacedData([...replacedData, { text: '', replace_with: '' }]);
    }
  }, [setReplacedData, setReplaceEditField, replacedData]);

  const handlePercentileCancel = useCallback(() => {
    queryClient.invalidateQueries({
      queryKey: [FETCH_DASHBOARD_DATA.FETCH_PERCENTILE_DATA],
    });
  }, [queryClient]);

  const onSavingPercentile = useCallback(
    (newPercentileData: PercentileData) => {
      savePercentileDataApi({
        ...newPercentileData,
        ...PercentileData.blog_score,
        ...PercentileData.weights,
      });
    },
    [savePercentileDataApi, PercentileData?.blog_score, PercentileData?.weights]
  );

  const onSavingBlogScore = useCallback(
    (newBlogScoreData: BlogScoreData) => {
      savePercentileDataApi({
        ...newBlogScoreData,
        ...PercentileData.percentile,
      });
    },
    [savePercentileDataApi, PercentileData?.percentile]
  );

  const onSavingReplaceData = useCallback(() => {
    saveReplaceDataApi(replacedData);
    setReplaceEditField(undefined);
  }, [replacedData, saveReplaceDataApi, setReplaceEditField]);

  return (
    <>
      <div className='flex w-full gap-x-10 bg-[#333] pl-11 text-white'>
        {dashboardNavList.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer px-[15px] py-3.5 text-center text-sm leading-3 hover:bg-[#00BFFF] ${
              1 === tab.id ? 'bg-[#00BFFF]' : ''
            }`}
            onClick={() => tab.id}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className='flex w-full justify-center'>
        <div className='min-w-[1400px] p-10 text-black'>
          <div className={cn('w-full')}>
            {PercentileData ? (
              <PercentileSection
                data={PercentileData.percentile}
                schema={percentileSchema}
                handleOnCancel={handlePercentileCancel}
                handleOnSave={onSavingPercentile}
              />
            ) : (
              <TextLoader text='블로그 통계 분포' noHeight />
            )}

            {PercentileData ? (
              <BlogScoreSection
                data={PercentileData.blog_score_percentile}
                schema={blogScoreSchema}
                handleOnCancel={handlePercentileCancel}
                handleOnSave={onSavingBlogScore}
              />
            ) : (
              <TextLoader text='블로그 점수' />
            )}

            {replacedData.length > 0 ? (
              <ChangeStringSection
                data={replacedData}
                activeField={replaceEditField}
                handleChange={handleReplaceStringChange}
                handleOnEdit={onEditReplaceString}
                handleOnDelete={handleDeleteString}
                handleOnAdd={addNewField}
                handleOnSave={onSavingReplaceData}
                handleOnCancel={handleReplaceEditable}
              />
            ) : (
              <TextLoader text='문자열 대체' />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
