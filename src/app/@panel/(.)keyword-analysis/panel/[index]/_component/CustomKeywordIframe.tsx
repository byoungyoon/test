'use client';

import { useRouter } from 'next/navigation';

import { usePanel } from '@/store/usePanel';

import CustomIframe from '@/app/@panel/_component/CustomIframe';

type Props = {
  index: number;
};

export default function CustomKeywordIframe({ index }: Props) {
  const { KeywordDetail } = usePanel();
  const router = useRouter();

  const data = KeywordDetail[index];

  const onTrackableMove = (currIndex: number) => () => {
    if (currIndex < 0 || currIndex >= KeywordDetail.length) return;

    router.replace(`/keyword-analysis/panel/${currIndex}`);
  };

  return (
    <CustomIframe
      index={index}
      src={data.blog.url}
      onTrackableNext={onTrackableMove(+index + 1)}
      onTrackablePre={onTrackableMove(+index - 1)}
    />
  );
}
