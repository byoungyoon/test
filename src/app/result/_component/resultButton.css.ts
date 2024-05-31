import { style } from '@vanilla-extract/css';

export const button = style({
  height: '38px',
  backgroundColor: '#888',
  borderRadius: '4px',
  fontSize: '15px',
  color: '#fff',
  textAlign: 'center',
  padding: '0 20px',

  ':hover': {
    backgroundColor: '#777',
  },
});
