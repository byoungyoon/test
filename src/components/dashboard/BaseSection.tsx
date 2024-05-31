import { Button } from '@mantine/core';
import React from 'react';

interface BaseSectionProps {
  heading: string;
  children: React.ReactNode;
  handleOnCancel: () => void;
  handleOnSave: () => void;
}

const BaseSection = ({
  heading,
  children,
  handleOnCancel,
  handleOnSave,
}: BaseSectionProps) => {
  return (
    <div className='shadow-mine mb-8 w-full rounded-xl border border-solid border-[#C5C5C5] bg-[#dddddd50] px-8 py-5'>
      <h3 className='mb-3 text-base font-semibold'>{heading}</h3>
      {children}
      <div className='mt-6 flex w-full justify-end'>
        <div className='flex gap-x-3'>
          <Button
            className='flex w-[130px] items-center justify-center gap-x-4 rounded-md border-none bg-[#444] px-2.5 py-2 text-center text-white outline-none ring-0 hover:border-none hover:bg-[#222] hover:outline-none hover:ring-0'
            onClick={handleOnCancel}
          >
            <span className='text-sm'>Cancel</span>
          </Button>
          <Button
            className='flex w-[130px] items-center justify-center gap-x-4 rounded-md border-none bg-[#32b31bd0] px-2.5 py-2 text-center text-white outline-none ring-0 hover:border-none hover:bg-[#32b31b] hover:outline-none hover:ring-0'
            onClick={handleOnSave}
          >
            <span className='text-sm'>Save</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BaseSection;
