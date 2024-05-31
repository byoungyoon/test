import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px 0',
  marginBottom: 'auto',
});

export const sectionGroup = style({
  maxWidth: '1400px',
  height: '100%',
  flex: '0 0 100%',
});

export const section = style({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  margin: '10px 0 30px 0',
  padding: '30px 50px',
  height: 'auto',
});

// -------------------------------

export const titleArticle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  fontSize: '15px',
  fontWeight: 500,
});
