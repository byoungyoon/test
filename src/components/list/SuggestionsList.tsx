'use client';

import React from 'react';

import * as styles from './suggestionsList.css';

interface SuggestionListProps {
  height?: string;
  suggestions: string[];
  handleSelectionSuggestion?: (value: string) => void;
  mouseOnSuggestion?: () => void;
  mouseOffSuggestion?: () => void;
}

const SuggestionList = ({
  height,
  suggestions,
  handleSelectionSuggestion,
  mouseOnSuggestion,
  mouseOffSuggestion,
}: SuggestionListProps) => {
  const localClick = (value: string) => () => {
    handleSelectionSuggestion && handleSelectionSuggestion(value);
  };

  return (
    <div
      className={styles.suggest}
      onMouseEnter={mouseOnSuggestion}
      onMouseLeave={mouseOffSuggestion}
    >
      {suggestions &&
        suggestions.map((value: string, index: number) => (
          <div
            className={styles.suggestItem}
            key={index}
            onClick={localClick(value)}
          >
            <span className='suggestions_txt'>
              <svg
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path
                  className={height}
                  d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0'
                />
              </svg>
              {value}
            </span>

            <svg
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-up-left'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0z'
              />
            </svg>
          </div>
        ))}
    </div>
  );
};

export default React.memo(SuggestionList);
