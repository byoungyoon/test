import { useCallback, useEffect } from 'react';

import { usePanel } from '@/store/usePanel';

import { APP_IMAGES } from '@/constant/images';

type Props = {
  index: number;
  src: string;

  onTrackableNext: () => void;
  onTrackablePre: () => void;
};

export default function CustomIframe({
  index,
  src,
  onTrackableNext,
  onTrackablePre,
}: Props) {
  const { setIcons } = usePanel();

  const onTrackableWindow = useCallback(() => {
    window.open(
      src,
      'Webpage Pop-up',
      'width=800, height=600, top=100, left=100, resizable=yes, scrollbars=yes'
    );
  }, [src]);

  useEffect(() => {
    setIcons([
      {
        icon: APP_IMAGES.blogWindow,
        onTrackable: onTrackableWindow,
      },
      {
        icon: APP_IMAGES.blogPrev,
        height: 12,
        onTrackable: onTrackablePre,
      },
      {
        icon: APP_IMAGES.blogNext,
        height: 12,
        onTrackable: onTrackableNext,
      },
    ]);

    // TODO onTrackablePre, onTrackableNext => infinite render
    // eslint-disable-next-line
  }, [onTrackableWindow, setIcons, index]);

  return <iframe src={src} width='100%' height='100%' />;
}
