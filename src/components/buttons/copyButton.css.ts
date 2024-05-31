import { style } from '@vanilla-extract/css';

export const copyButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '3px',
  fontSize: '13px',
  lineHeight: 1.5,
  transition: 'all 0.2s',

  ':hover': {
    backgroundColor: '#eee',
  },
  ':active': {
    backgroundColor: '#eee',
  },
});
