import { style } from '@vanilla-extract/css';

export const menu = style({
  height: '38px',
  paddingLeft: '50px',
  alignItems: 'center',
  display: 'flex',
});

export const menuItem = style({
  fontSize: '16px',
  color: '#aaa',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  padding: '0 60px',
  cursor: 'pointer',
  transition: 'all 0.2s linear',

  ':hover': {
    color: '#fff',
  },
});

export const on = style({
  height: '100%',
  backgroundColor: '#2c2c2c',
  color: '#fff',
});

export const logout = style([
  {
    position: 'absolute',
    top: '6px',
    right: '15px',
    padding: 0,
    cursor: 'pointer',

    fontSize: '12px',
    color: '#999',

    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  },
]);

export const logoutImage = style({
  opacity: '0.8',
});
