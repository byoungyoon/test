import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const overflow = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  overflowY: 'auto',
  padding: '0 40px',
  margin: '30px 0 0 0',
  display: 'grid',
});

export const container = {
  air: style([
    overflow,
    {
      gridTemplateColumns: 'repeat(9, 1fr)',
      gridAutoRows: 'minmax(240px, 240px)',
      gap: '26px',
    },
  ]),
  view: style([
    overflow,
    {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(130px, 130px)',
      gap: '20px',
    },
  ]),
};

export const card = {
  air: style({
    width: '160px',
    height: '240px',
    border: '4px solid #fff',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxSizing: 'content-box',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, .05)',

    selectors: {
      '&.select': {
        borderColor: vars.color.cyan['50'],
      },
    },
  }),
  view: style({
    padding: '20px 20px 20px 15px',
    width: '100%',
    height: '130px',
    border: '1px solid #eee',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, .05)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  }),
};

export const layer = {
  air: style({
    flexGrow: 1,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  }),
  view: style({
    display: 'flex',
    flexDirection: 'column',
  }),
};

export const airLayerTitle = style({
  fontSize: '14px',
});

export const articleImageGroup = style({
  display: 'flex',
  gap: '16px',
});

export const viewLayerIndex = style({
  color: '#888888',
  fontSize: '25px',
});

export const viewLayerTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  color: '#333',
  marginBottom: '2rem',
});

globalStyle(`${viewLayerTitle} > .title`, {
  fontSize: '13px',
  color: '#888',
  fontStyle: 'italic',
});

globalStyle(`${viewLayerTitle} .date`, {
  fontSize: '13px',
  color: '#888',
});

export const viewLayerSubTitle = style({
  fontSize: '18px',
  color: '#0075ec',
  paddingBottom: '6px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  transition: 'all 0.2s',
});

export const customImage = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
});

export const customNoImage = style({
  borderRadius: 0,
  selectors: {
    'div < &': {
      borderRadius: '50%',
    },
  },
});

export const customInnerImage = style({
  borderRadius: '50%',
  border: '1px solid #ddd',
});
