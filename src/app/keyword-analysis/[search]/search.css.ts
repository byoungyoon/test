import { style } from '@vanilla-extract/css';

export const container = {
  root: style({
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: '30px 0',
    flexDirection: 'column',
  }),

  search: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  list: style({
    flex: 1,
    position: 'relative',
  }),
};

export const searchLayer = style({
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const searchLayerGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});
