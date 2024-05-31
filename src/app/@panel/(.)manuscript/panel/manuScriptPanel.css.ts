import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const overflow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: '30px',
  backgroundColor: '#f8f8f8',
  overflow: 'hidden',
  overflowY: 'auto',
});
