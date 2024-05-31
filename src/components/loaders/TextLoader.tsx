import React from 'react';

import { cn } from '@/lib/utils';

interface TextLoaderProps {
  text: string;
  noHeight?: boolean;
}

const TextLoader = ({ text, noHeight = false }: TextLoaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-x-5 py-10',
        noHeight ? '' : 'min-h-[30vh]'
      )}
    >
      <span className='loading loading-dots loading-lg text-[#848e96]'></span>
      <div className='text-lg font-bold text-[#848e96]'>
        {text || '로드 중'}
      </div>
      <span className='loading loading-dots loading-lg text-[#848e96]'></span>
    </div>
  );
};

export default TextLoader;
