import { create } from 'zustand';

import { ShuffleDataTypes } from '@/app/manuscript/_component/ShuffleArticle';
import { BlogTypes } from '@/model/Blog';
import { KeywordDetailBlogTypes } from '@/model/KeywordDetail';

export type Icon = {
  icon: string;
  width?: number;
  height?: number;
  onTrackable: () => void;
};

type State = {
  Blog: BlogTypes[];
  Icons: Icon[];
  KeywordDetail: KeywordDetailBlogTypes[];
  shuffleResult: ShuffleDataTypes[][];
};

type Action = {
  setBlog: (Blog: BlogTypes[]) => void;
  setIcons: (Icons: Icon[]) => void;
  setKeywordDetail: (KeywordDetail: KeywordDetailBlogTypes[]) => void;
  setShuffleResult: (shuffleResult: ShuffleDataTypes[]) => void;
  resetShuffleList: () => void;
};

export const usePanel = create<State & Action>((set) => ({
  Blog: [],
  Icons: [],
  KeywordDetail: [],
  shuffleResult: [],

  setBlog: (Blog) => {
    set(() => ({ Blog }));
  },
  setIcons: (Icons) => {
    set(() => ({ Icons }));
  },
  setKeywordDetail: (KeywordDetail) => {
    set(() => ({ KeywordDetail }));
  },
  setShuffleResult: (shuffleResult) => {
    set((state) => ({
      shuffleResult: [shuffleResult, ...state.shuffleResult],
    }));
  },
  resetShuffleList: () => {
    set(() => ({ shuffleResult: [] }));
  },
}));
