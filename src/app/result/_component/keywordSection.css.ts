import { globalStyle, style } from '@vanilla-extract/css';

import { sectionBox } from '@/app/result/result.css';

export const title = style({
  padding: '0 0 10px 0',
  fontSize: '20px',
  fontWeight: 500,
});

export const box = style([
  sectionBox,
  {
    padding: '15px 20px 25px',
  },
]);

export const table = style({
  width: '100%',
});

globalStyle(`${table} th`, {
  height: '30px',
  borderBottom: '1px solid #666',
  fontSize: '14px',
  fontWeight: 500,
  textAlign: 'center',
  padding: '10px',
});

globalStyle(`${table} td`, {
  height: '32px',
  borderBottom: '1px solid #ddd',
  fontSize: '13px',
  fontWeight: 500,
  padding: '9px 10px',
});

export const list = style({
  paddingTop: '25px',
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '10px',
});

export const listItem = style({
  transition: 'all 0.2s linear',
  cursor: 'pointer',
  width: '80px',
  height: '50px',
  borderRadius: '8px',
  padding: '6px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  overflow: 'hidden',
  overflowY: 'auto',
  outline: 'none',

  selectors: {
    '&.add': {
      border: '2px dashed #888',
    },
  },
});

export const button = style({
  marginTop: '10px',
  width: '100%',
  backgroundColor: '#229afc',
  borderRadius: '5px',
  fontSize: '16px',
  color: '#fff',
  fontWeight: 500,
  textAlign: 'center',
  padding: '14px 0',

  ':hover': {
    backgroundColor: '#007add',
  },
});
