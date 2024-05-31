import { style } from '@vanilla-extract/css';

import { sectionBox } from '@/app/result/result.css';

export const box = style([
  sectionBox,
  {
    padding: '20px',
    overflow: 'hidden',
  },
]);

export const titleLayer = style({
  paddingBottom: '10px',
});

export const titleLayerTop = style({
  borderBottom: '1px solid #ccc',
  paddingBottom: '6px',
  display: 'flex',
  alignItems: 'center',
});

export const titleLayerBottom = style({
  padding: '6px 0',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 500,
});

export const subTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  margin: '2px 0 0 25px',
});

export const subTitleCount = style({
  width: '40px',
  height: '25px',
  border: 'none',
  backgroundColor: '#bbb',
  borderRadius: '4px',
  fontSize: '14px',
  color: '#fff',
  fontWeight: 500,
  padding: '3px 0 4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const helper = style({
  fontSize: '12px',
  color: '#666',
  lineHeight: '18px',
  paddingTop: '10px',
});

export const contentLayer = style({
  height: '109px',
  overflow: 'hidden auto',
  display: 'flex',
  alignItems: 'flex-start',
  flexFlow: 'row wrap',
  gap: '22px 10px',
});

export const contentLayerText = style({
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '13px',
  color: '#000',
  textAlign: 'center',
  padding: '4px 8px',
  transition: 'all 0.2s linear',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#eee',
  },

  selectors: {
    '&.on': {
      backgroundColor: '#20c985',
      border: '1px solid #20c985',
      color: '#fff',
    },
  },
});
