import { globalStyle, style } from '@vanilla-extract/css';

export const search = style({
  width: '600px',
  height: '60px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  padding: '0 30px',
  margin: '0 auto',
  display: 'flex',
});

export const searchVariant = {
  new: style({
    height: '50px',
    width: '600px',
    padding: '0 30px',
  }),
  large: style({
    padding: '0.625rem 30px',
  }),
  small: style({
    padding: '0.125rem 1.5rem',
  }),
};

export const searchItemGroup = style({
  flex: '1 1 0%',
  alignItems: 'center',
  gap: '0 10px',
  display: 'flex',
});

export const searchItem = style({
  selectors: {
    '&.mainL': {
      width: '20%',
    },
    '&.mainC': {
      width: '100%',
    },
    '&.mainR': {
      width: 'auto',
      marginLeft: 'auto',
      cursor: 'pointer',
    },
  },
});

globalStyle(`${searchItem} span`, {
  fontSize: '14px',
  color: '#31b31b',
  fontWeight: 900,
});

globalStyle(`${searchItem} input`, {
  width: '100%',
  border: 'none',
  fontSize: '20px',
  fontWeight: 500,
  textAlign: 'center',
});

globalStyle(`${searchItem} input::placeholder`, {
  fontSize: '18px',
});
