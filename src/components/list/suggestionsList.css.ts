import { globalStyle, style } from '@vanilla-extract/css';

export const suggest = style({
  minWidth: '600px',
  maxHeight: '300px',
  marginTop: '4px',
  position: 'absolute',
  top: '60px',
  zIndex: 40,
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
  overscrollBehaviorX: 'contain',
  overflow: 'auto',
});

export const suggestItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '0.625rem',
  borderStyle: 'none',
  padding: '1rem',

  ':hover': {
    backgroundColor: 'rgb(243 244 246)',
    transition: 'all 0.2s',
  },
});

globalStyle(`${suggestItem} span`, {
  display: 'flex',
  flexDirection: 'row',
  columnGap: '1.25rem',
  fontSize: '16px',
});
