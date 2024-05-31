import { style } from '@vanilla-extract/css';

export const wrap = style({
  position: 'relative',
  width: '100%',
  minWidth: '1560px',
  height: '100%',
  minHeight: '100dvh',
  overflowY: 'auto',
  display: 'table',
  flexDirection: 'column',
});

export const header = style({
  backgroundColor: '#000',
});

export const main = style({
  flex: 1,
  backgroundColor: '#f9f9f9',
  height: '100%',
});
