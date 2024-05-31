import Image, { ImageProps } from 'next/image';

import { APP_IMAGES } from '@/constant/images';

type Props = {
  isInner?: boolean;

  innerClassName?: string;
  outlineClassName?: string;
};

export default function CustomImage(props: ImageProps & Props) {
  const {
    alt,
    src,
    isInner,
    innerClassName,
    outlineClassName,
    style,
    className,
    ...prop
  } = props;

  if (isInner)
    return (
      <div className={outlineClassName}>
        <Image
          alt={alt}
          src={src === '' ? APP_IMAGES.noImage : src}
          style={{ ...style, padding: '7px' }}
          className={isInner ? innerClassName : className}
          {...prop}
        />
      </div>
    );

  return (
    <Image
      alt={alt}
      src={src === '' ? APP_IMAGES.noImage : src}
      className={className}
      {...prop}
    />
  );
}
