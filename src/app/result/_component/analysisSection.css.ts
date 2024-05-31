import { globalStyle, style } from '@vanilla-extract/css';

import { sectionBox } from '@/app/result/result.css';

export const box = style([
  sectionBox,
  {
    padding: '28px 35px',
    overflow: 'hidden',
  },
]);

globalStyle(`${box} > span`, {
  fontSize: '13px',
  lineHeight: '30px',
  display: 'inline-block',
  minWidth: '4px',
});

export const titleLayer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '10px',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 500,
});

export const wordLength = style({
  display: 'flex',
  gap: '20px',
});

export const wordLengthText = style({
  position: 'relative',
  paddingLeft: '13px',

  ':before': {
    content: '',
    position: 'absolute',
    top: '6px',
    left: 0,
    width: '9px',
    height: '9px',
  },
});

export const wordLengthBlue = style([
  wordLengthText,
  {
    ':before': {
      backgroundColor: '#2e9bf9',
    },
  },
]);

export const wordLengthRed = style([
  wordLengthText,
  {
    ':before': {
      backgroundColor: '#e54444',
    },
  },
]);
