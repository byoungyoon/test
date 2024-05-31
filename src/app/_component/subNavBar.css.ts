import { style } from '@vanilla-extract/css';

export const menu = style({
  position: 'relative',
  width: '100%',
  height: '40px',
  backgroundColor: '#2c2c2c',
});

export const menuItem = style({
  height: '100%',
  alignItems: 'center',
  display: 'flex',
  paddingLeft: '50px',
});

export const menuItemText = style({
  height: '100%',
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.8)',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 25px',
  display: 'flex',
  cursor: 'pointer',
  transition: 'all 0.2s linear',

  ':hover': {
    backgroundColor: '#3c3c3c',
  },
});

export const on = style({
  backgroundColor: '#229afc',
  color: '#fff',

  ':hover': {
    backgroundColor: '#229afc',
  },
});
