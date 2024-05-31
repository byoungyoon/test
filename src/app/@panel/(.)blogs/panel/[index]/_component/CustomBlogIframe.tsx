'use client';

import { useRouter } from 'next/navigation';

import { usePanel } from '@/store/usePanel';

import CustomIframe from '@/app/@panel/_component/CustomIframe';

type Props = {
  index: number;
};

export default function CustomBlogIframe({ index }: Props) {
  const { Blog } = usePanel();
  const router = useRouter();

  const src =
    (Blog && Blog[index].href) ??
    'https://blog.naver.com/modellien/223225477442';

  const onTrackableMove = (currIndex: number) => () => {
    if (Blog && Blog[currIndex]) {
      if (currIndex < 0 || currIndex >= Blog.length) return;

      router.replace(`/blogs/panel/${currIndex}`);
    }
  };

  return (
    <CustomIframe
      index={index}
      src={src}
      onTrackableNext={onTrackableMove(+index + 1)}
      onTrackablePre={onTrackableMove(+index - 1)}
    />
  );
}
