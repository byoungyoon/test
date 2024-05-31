import { globalStyle, style } from '@vanilla-extract/css';

import { sectionGroup } from '@/app/manuscript/manuscript.css';

export const blogArticle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const blogGroup = {
  root: style({
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
  }),

  title: style({
    width: '7%',
    fontSize: '14px',
  }),

  content: style({
    width: '93%',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    borderRadius: '4px',

    fontSize: '13px',
    lineHeight: 1.6,
    textAlign: 'left',
    padding: '10px',
    display: 'block',

    '::-webkit-scrollbar': {
      display: ' none',
    },
  }),
};

export const shuffleArticle = style({
  marginTop: '20px',
  display: 'flex',
});

export const shuffleArticleTitle = style({
  width: '7%',
  marginTop: '6px',
  fontSize: '14px',
  color: '#2e9bf9',
  fontWeight: 600,
});

export const shuffleArticleContent = style({
  flex: 1,
});

export const menuGroup = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

globalStyle(`${menuGroup} > ul`, {
  display: 'flex',
  gap: '30px',
  alignItems: 'center',
});

export const selectGroup = style({
  display: 'flex',
  gap: '10px',
  justifyContent: 'right',
});

globalStyle(`${sectionGroup} > select`, {
  border: '1px solid #2e9bf9',
});

export const copyButton = style({
  padding: '7px 16px',
});

export const wordGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});

globalStyle(`${wordGroup} > div`, {
  display: 'flex',
  gap: '30px',
});

export const wordGroupMargin = style({
  marginRight: '5px',
});

export const bulletGrid = style({
  width: '9px',
  height: '9px',
  borderRadius: '50%',

  selectors: {
    '&.red': {
      backgroundColor: '#e54444',
    },
    '&.blue': {
      backgroundColor: '#2e9bf9',
    },
  },
});

export const shuffleBox = style({
  width: '100%',
  border: '1px solid #2e9bf9',
  backgroundColor: 'white',
  borderRadius: '6px',
  fontSize: '13px',
  color: '#333',
  lineHeight: '26px',
  padding: '15px 20px',
  overflow: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  userSelect: 'none',
});

export const wordBlock = style({
  lineHeight: 1.4,
  padding: '2px 5px',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '5px',
  userSelect: 'none',
});
