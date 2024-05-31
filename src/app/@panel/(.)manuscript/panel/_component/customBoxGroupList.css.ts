import { style } from '@vanilla-extract/css';

export const shuffleArticle = style({
  paddingBottom: '20px',
  borderBottom: '1px solid #ddd',

  ':last-child': {
    border: 0,
  },
});

export const titleLayer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
});

export const title = style({
  fontSize: '17px',
  fontWeight: 400,
});

export const copyButton = style({
  padding: '7px 16px',
});

export const shuffleBox = style({
  marginTop: '8px',
  width: '100%',
  height: '150px',
  overflow: 'hidden',
  overflowY: 'auto',

  border: '1px solid #ddd',
  backgroundColor: '#fff',
  borderRadius: '6px',
  fontSize: '13px',
  lineHeight: '26px',
  padding: '15px 25px',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '2px',
});

export const wordBlock = style({
  lineHeight: 1.4,
  padding: '1px 3px',
  borderRadius: '4px',
});
