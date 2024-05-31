'use client';

import React from 'react';

import { useStore } from '@/store/useStore';

import CustomFooter from '@/app/_component/CustomFooter';

export default function CustomManuscriptFooter() {
  const { shuffleResult } = useStore();

  return (
    <CustomFooter
      isNext
      isPre
      nextUrl='/result'
      isNextDisabled={shuffleResult.length !== 0}
    >
      <></>
    </CustomFooter>
  );
}
