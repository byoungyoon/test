import { style } from '@vanilla-extract/css';

export const blogGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  paddingRight: '10px',
  width: '80%',
  flexWrap: 'wrap',
});

export const blogItemTitle = style({
  width: '90px',
});

export const blogItem = style({
  minWidth: '34px',
  background: 'none',
  border: '1px solid #ddd',
  borderRadius: '3px',
  fontSize: '13px',
  color: '#333',
  textDecoration: 'line-through',
  textAlign: 'center',
  padding: '6px 4px',
  margin: '3px 2px',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'all 0.2s linear',

  selectors: {
    '&.on': {
      backgroundColor: '#20c985',
      border: '1px solid #20c985',
      color: '#fff',
      textDecoration: 'none',
    },
  },
});
