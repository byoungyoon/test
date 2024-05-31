import { yupResolver } from '@hookform/resolvers/yup';
import { MoveRight } from 'lucide-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';

import {
  BlogScoreData,
  BlogScoreDataResponse,
} from '@/hooks/dashboard/interface';

import BaseSection from '@/components/dashboard/BaseSection';

interface BlogScoreSectionProps {
  data: BlogScoreDataResponse[];
  schema: ObjectSchema<BlogScoreData>;
  handleOnCancel: () => void;
  handleOnSave: (formData: BlogScoreData) => void;
}

const BlogScoreSection = ({
  data,
  schema,
  handleOnCancel,
  handleOnSave,
}: BlogScoreSectionProps) => {
  const { control, handleSubmit, clearErrors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <BaseSection
        heading='블로그 인덱스'
        handleOnCancel={handleOnCancel}
        handleOnSave={handleSubmit((formData) => handleOnSave(formData))}
      >
        <div className='flex w-full items-center justify-between gap-x-10'>
          <div className='flex w-2/5 items-center text-xs'>
            <div className='w-2/5' />
            <div className='flex items-center gap-x-1'>
              <div className='ml-5 mr-3 w-14 text-center'>배수</div>
              <div className='mr-1 w-14 text-center'>웨이트</div>
            </div>
            <MoveRight color='transparent' className='mx-5' />
            <div className='flex items-center justify-around gap-x-1'>
              <div className='mr-3 w-14 text-center'>배수</div>
              <div className='w-14 text-center'>웨이트</div>
            </div>
          </div>
          <div className='flex w-2/5 items-center text-xs'>
            <div className='w-2/5' />
            <div className='flex items-center gap-x-1'>
              <div className='ml-5 mr-3 w-14 text-center'>배수</div>
              <div className='mr-1 w-14 text-center'>웨이트</div>
            </div>
            <MoveRight color='transparent' className='mx-5' />
            <div className='flex items-center justify-around gap-x-1'>
              <div className='mr-3 w-14 text-center'>배수</div>
              <div className='w-14 text-center'>웨이트</div>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-wrap items-center justify-between gap-x-10 gap-y-4'>
          {data &&
            data.map(
              (
                {
                  multiple_key,
                  multiple,
                  weight_key,
                  weight,
                }: BlogScoreDataResponse,
                index: number
              ) => (
                <div
                  key={index}
                  className='flex w-2/5 items-center text-[13px] '
                >
                  <div className='w-2/5'>{multiple_key} </div>
                  <span>:</span>
                  <div className='ml-4 flex w-14 items-center justify-center rounded border border-solid border-[#99999980] bg-white leading-none text-[#888]'>
                    <p className='w-full rounded px-0 py-2 text-center text-[13px] leading-none'>
                      {multiple}
                    </p>
                  </div>
                  <div className='ml-3 mr-1.5 flex w-14 items-center justify-center rounded border border-solid border-[#99999980] bg-white leading-none text-[#888]'>
                    <p className='w-full rounded px-0 py-2 text-center text-[13px] leading-none'>
                      {weight}
                    </p>
                  </div>
                  <span>%</span>
                  <MoveRight color='#777' className='mx-4' />
                  <Controller
                    control={control}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    name={multiple_key as any}
                    defaultValue={multiple}
                    render={({ field, fieldState }) => (
                      <>
                        <div className='flex w-14 items-center justify-center rounded border border-solid border-[#888] bg-white leading-none'>
                          <input
                            type='text'
                            defaultValue={field.value}
                            className='w-full rounded border-none px-0 py-1.5 text-center text-[13px] leading-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
                            onChange={(props) => {
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              clearErrors(multiple_key as any);
                              field.onChange(props);
                            }}
                          />
                        </div>
                        {fieldState.error && (
                          <div className='absolute bottom-0 right-10 mt-1 text-xs text-red-500'>
                            {fieldState.error.message}
                          </div>
                        )}
                      </>
                    )}
                  />
                  <Controller
                    control={control}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    name={weight_key as any}
                    defaultValue={weight}
                    render={({ field, fieldState }) => (
                      <>
                        <div className='ml-3 mr-1.5 flex w-14 items-center justify-center rounded border border-solid border-[#888] bg-white leading-none'>
                          <input
                            type='text'
                            defaultValue={field.value}
                            className='w-full rounded border-none px-0 py-1.5 text-center text-[13px] leading-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
                            onChange={(props) => {
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              clearErrors(weight_key as any);
                              field.onChange(props);
                            }}
                          />
                        </div>
                        {fieldState.error && (
                          <div className='absolute bottom-0 right-10 mt-1 text-xs text-red-500'>
                            {fieldState.error.message}
                          </div>
                        )}
                      </>
                    )}
                  />
                  <span>%</span>
                </div>
              )
            )}
        </div>
      </BaseSection>
    </>
  );
};

export default BlogScoreSection;
