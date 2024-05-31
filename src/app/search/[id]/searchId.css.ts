import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: 'calc(100% - 150px)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
