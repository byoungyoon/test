export type TextDuplicateTypes = {
  // 블로그의 보낸 키의 데이터를 짜른 단어의 중복수
  duplicated_words: {
    ['1_duplicated']: string[];
    ['2_duplicated']: string[];
    ['3_duplicated']: string[];
    ['4_duplicated']: string[];
  };

  // 블로그의 보낸 키의 데이터를 짜른 단어의 카운트
  duplication_counts: {
    ['1_duplicated']: number;
    ['2_duplicated']: number;
    ['3_duplicated']: number;
    ['4_duplicated']: number;
  };

  // 블로그의 보낸 키의 데이터를 짜른 단어
  post_specific_duplicated: {
    [key: string]: string[];
  };
};
