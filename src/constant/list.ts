import { SUB_MENU_STATUS } from './status';

export const topNavTabList = [
  {
    id: 1,
    target: ['/test'],
    name: '작업 관리',
    path: '/1',
  },
  {
    id: 2,
    target: ['/'],
    name: '마케팅TOOL',
    path: '/search',
  },
];

export const subNavTabList = [
  {
    id: SUB_MENU_STATUS.BLOG,
    target: ['/search/blog', '/blogs'],
    name: '키워드 조회(통합분석)',
    path: '/search/blog',
  },
  {
    id: SUB_MENU_STATUS.ANALYSIS,
    target: ['/search/analysis', '/keyword-analysis'],
    name: '키워드 분석',
    path: '/search/analysis',
  },
  {
    id: SUB_MENU_STATUS.MANUSCRIPT,
    target: ['/manuscript'],
    name: '원고 생성',
    path: '/search/analysis',
  },
  {
    id: SUB_MENU_STATUS.MANUSCRIPT_ANALYSIS,
    target: ['/result'],
    name: '원고 분석',
    path: '/search/analysis',
  },
];
