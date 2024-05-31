import CustomBlogIframe from '@/app/@panel/(.)blogs/panel/[index]/_component/CustomBlogIframe';

type Props = {
  params: {
    index: number;
  };
};

export default function Page({ params }: Props) {
  return <CustomBlogIframe index={params.index} />;
}
