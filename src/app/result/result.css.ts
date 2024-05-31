import { style } from '@vanilla-extract/css';

export const container = style({
  flex: '0 0 100%',
  padding: '30px 0 90px',
  marginBottom: 'auto',
  justifyContent: 'center',
  display: 'flex',
});

export const sectionGroup = style({
  maxWidth: '1400px',
  height: '100%',
  flex: '0 0 100%',
  display: 'flex',
});

export const analysisSection = style({
  width: '72%',
  paddingRight: '30px',
  float: 'left',
});

export const right = style({
  width: '28%',
  float: 'right',
});

export const sectionBox = style({
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.08)',
});

export const keywordSection = style({});

export const hashTagSection = style({
  marginTop: '30px',
});

export const buttonLayer = style({
  textAlign: 'center',
  marginTop: '15px',
});
