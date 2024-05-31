import { create } from 'zustand';

import { ShuffleDataTypes } from '@/app/manuscript/_component/ShuffleArticle';
import { KeywordDetailBlogTypes } from '@/model/KeywordDetail';

type ShuffleTypes = {
  /**
   * /manuscript 의 위의 section 단어셔플한 결과물
   */
  wordData: string[];

  /**
   * 키워드 분석한 카드 text, avg
   */
  keywords: Record<string, number>;
};

type State = {
  /**
   * 처음 검색한 키워드
   */
  selectKeyword: string;
  /**
   * 주제 입력한 키워드 배열
   */
  selectDetailKeyword: string[];
  /**
   * 테이블의 전체 데이터, 선택된 테이블만 select가 true
   */
  KeywordDetail: (KeywordDetailBlogTypes & { select: boolean })[];
  Shuffle: ShuffleTypes;
  /**
   * 셔플 클릭시 나오는 결과물에 대한 text, backgroundColor
   */
  shuffleResult: ShuffleDataTypes[];
  /**
   * 원고분석 키워드
   */
  analysisKeyword: Record<string, number>;
  /**
   * 최종 결과
   */
  analysisResult: {
    hashTags: string[];
    word: string;
  };
};

type Action = {
  /**
   * set keyword
   * @param selectKeyword
   */
  setKeyword: (selectKeyword: string) => void;
  /**
   * set keyword detail
   * @param selectDetailKeyword
   */
  setSelectDetailKeyword: (selectDetailKeyword: string[]) => void;
  /**
   * set keyword detail table
   * @param KeywordDetail
   */
  setKeywordDetail: (
    KeywordDetail: (KeywordDetailBlogTypes & { select: boolean })[]
  ) => void;
  /**
   * set keyword detail table select
   * @param index
   */
  setKeywordDetailSelect: (index: number[]) => void;
  /**
   * set word shuffle data
   * @param wordData
   */
  setShuffleWordData: (wordData: string[]) => void;
  /**
   * set keyword card data
   * @param keywords
   */
  setShuffleKeywords: (keywords: Record<string, number>) => void;
  /**
   * set shuffle result data
   * @param shuffleResult
   */
  setShuffleResult: (shuffleResult: ShuffleDataTypes[]) => void;
  /**
   * set analysis keyword
   * @param analysisKeyword
   */
  setAnalysisKeyword: (analysisKeyword: Record<string, number>) => void;
  /**
   * set analysis result hashTags
   * @param hashTags
   */
  setAnalysisHashTag: (hashTags: string[]) => void;
  /**
   * set analysis result word
   * @param word
   */
  setAnalysisWord: (word: string) => void;
};

export const useStore = create<State & Action>((set, get) => ({
  selectKeyword: '',
  selectDetailKeyword: [],
  KeywordDetail: [],
  Shuffle: {
    wordData: [],
    keywords: {},
  },
  shuffleResult: [],
  analysisKeyword: {},
  analysisResult: {
    hashTags: [],
    word: '',
  },

  setKeyword(selectKeyword: string) {
    set(() => ({ selectKeyword }));
  },

  setSelectDetailKeyword(selectDetailKeyword) {
    set(() => ({ selectDetailKeyword }));
  },

  setKeywordDetail(KeywordDetail) {
    set(() => ({ KeywordDetail }));
  },

  setKeywordDetailSelect(index) {
    const { KeywordDetail } = get();

    const nKeywordDetail = KeywordDetail.map((value, sIndex) => {
      return { ...value, select: index.includes(sIndex) };
    });

    set(() => ({ KeywordDetail: nKeywordDetail }));
  },

  setShuffleWordData(wordData) {
    set((state) => ({ Shuffle: { ...state.Shuffle, wordData } }));
  },

  setShuffleKeywords(keywords) {
    set((state) => ({ Shuffle: { ...state.Shuffle, keywords } }));
  },

  setShuffleResult(shuffleResult) {
    set(() => ({ shuffleResult }));
  },

  setAnalysisKeyword(analysisKeyword) {
    set(() => ({ analysisKeyword }));
  },

  setAnalysisHashTag(hashTags) {
    set((state) => ({ analysisResult: { ...state.analysisResult, hashTags } }));
  },

  setAnalysisWord(word) {
    set((state) => ({ analysisResult: { ...state.analysisResult, word } }));
  },
}));
