import { yupResolver } from '@hookform/resolvers/yup';
import { MoveRight } from 'lucide-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';

import { PercentileData } from '@/hooks/dashboard/interface';

import BaseSection from '@/components/dashboard/BaseSection';

import { convertPercentileDistributionKorean } from '@/utils/transformData';

interface PercentileSectionProps {
  data: PercentileData;
  schema: ObjectSchema<PercentileData>;
  handleOnCancel: () => void;
  handleOnSave: (formData: PercentileData) => void;
}

const PercentileSection = ({
  data,
  schema,
  handleOnCancel,
  handleOnSave,
}: PercentileSectionProps) => {
  const { control, handleSubmit, clearErrors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <BaseSection
        heading='블로그 통계 분포'
        handleOnCancel={handleOnCancel}
        handleOnSave={handleSubmit((formData) => handleOnSave(formData))}
      >
        <div className='flex w-full flex-wrap items-center justify-start gap-y-4'>
          {data &&
            Object.entries(data).map(([key, value], index) => (
              <div
                key={index}
                className='relative flex w-1/3 items-center justify-start text-[13px]'
              >
                <div className='w-1/5'>
                  {convertPercentileDistributionKorean(key)}{' '}
                </div>
                <span>:</span>
                <div className='ml-4 mr-1.5 flex w-14 items-center justify-center rounded border border-solid border-[#99999980] bg-white leading-none text-[#888]'>
                  <p className='w-full rounded px-0 py-2 text-center text-[13px] leading-none'>
                    {value as string}
                  </p>
                </div>
                <span>%</span>
                <MoveRight color='#777' className='mx-4' />
                <Controller
                  control={control}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={key as any}
                  defaultValue={value}
                  render={({ field, fieldState }) => (
                    <>
                      <div className='mr-1.5 flex w-14 items-center justify-center rounded border border-solid border-[#888] bg-white leading-none'>
                        <input
                          type='text'
                          className='w-full rounded border-none px-0 py-1.5 text-center text-[13px] leading-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
                          defaultValue={field.value}
                          onChange={(props) => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            clearErrors(key as any);
                            field.onChange(props);
                          }}
                        />
                      </div>
                      {fieldState.error && (
                        <div className='absolute -bottom-5 right-[120px] text-[10px] font-semibold text-red-500'>
                          {fieldState.error.message}
                        </div>
                      )}
                    </>
                  )}
                />
                <span>%</span>
              </div>
            ))}
        </div>
      </BaseSection>
    </>
  );
};

export default PercentileSection;
