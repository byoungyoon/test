import { EditIcon, MoveRight, PlusCircleIcon, Trash2Icon } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';
import { EDIT_REPLACE_FIELD, ReplaceData } from '@/hooks/dashboard/interface';

import BaseSection from '@/components/dashboard/BaseSection';

interface ChangeStringSectionProps {
  data: ReplaceData[];
  activeField: number | undefined;
  handleChange: (value: string, field: EDIT_REPLACE_FIELD) => void;
  handleOnEdit: (id: number) => void;
  handleOnDelete: (id: number) => void;
  handleOnAdd: () => void;
  handleOnCancel: () => void;
  handleOnSave: () => void;
}

const ChangeStringSection = ({
  data,
  activeField,
  handleChange,
  handleOnEdit,
  handleOnDelete,
  handleOnAdd,
  handleOnCancel,
  handleOnSave,
}: ChangeStringSectionProps) => {
  return (
    <>
      <BaseSection
        heading='문자열 대체'
        handleOnCancel={handleOnCancel}
        handleOnSave={handleOnSave}
      >
        <div className='flex w-full flex-col flex-wrap items-center justify-between gap-y-4'>
          <div className='flex w-1/3 items-center justify-center gap-x-7 text-[13px]'>
            <div className='w-28 text-center'>Target String</div>
            <span>
              <MoveRight color='#dddddd50' />
            </span>
            <div className='w-28 text-center'>Replace String</div>
            <div className='flex items-center gap-x-3'>
              <div>
                <EditIcon size={18} color='#dddddd50' />
              </div>
              <div>
                <Trash2Icon size={18} color='#dddddd50' />
              </div>
            </div>
          </div>
          {data &&
            data.map(({ text, replace_with }: ReplaceData, index: number) => (
              <div
                key={index}
                className='flex w-1/3 items-center justify-center gap-x-7 text-[13px]'
              >
                <div
                  className={cn(
                    'flex w-28 items-center justify-center rounded border border-solid bg-white leading-none',
                    activeField === index
                      ? 'border-[#007fff]'
                      : 'border-[#99999980]'
                  )}
                >
                  <input
                    type='text'
                    defaultValue={text}
                    className='w-full rounded border-none px-0 py-1.5 text-center text-[13px] leading-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
                    disabled={activeField === index ? false : true}
                    onChange={(e) =>
                      handleChange(e.target.value, EDIT_REPLACE_FIELD.TEXT)
                    }
                  />
                </div>
                <span>
                  <MoveRight color='#777' />
                </span>
                <div
                  className={cn(
                    'flex w-28 items-center justify-center rounded border border-solid bg-white leading-none',
                    activeField === index
                      ? 'border-[#007fff]'
                      : 'border-[#99999980]'
                  )}
                >
                  <input
                    type='text'
                    defaultValue={replace_with}
                    className='w-full rounded border-none px-0 py-1.5 text-center text-[13px] leading-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0'
                    disabled={activeField === index ? false : true}
                    onChange={(e) =>
                      handleChange(
                        e.target.value,
                        EDIT_REPLACE_FIELD.REPLACE_WITH
                      )
                    }
                  />
                </div>
                <div className='flex items-center gap-x-3'>
                  <div onClick={() => handleOnEdit(index)}>
                    <EditIcon
                      size={18}
                      color='#007FFF'
                      className='cursor-pointer'
                    />
                  </div>
                  <div onClick={() => handleOnDelete(index)}>
                    <Trash2Icon
                      size={18}
                      color='#DE3163'
                      className='cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            ))}
          <div className='mt-2 flex w-full items-center justify-center pr-20'>
            <div onClick={handleOnAdd}>
              <PlusCircleIcon color='#888' size={30} cursor='pointer' />
            </div>
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default ChangeStringSection;
