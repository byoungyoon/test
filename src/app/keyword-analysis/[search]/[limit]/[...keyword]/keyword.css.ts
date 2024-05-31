import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  paddingBottom: '6rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const title = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const section = style({
  margin: '0 auto',
  width: '1400px',
  paddingTop: '1.5rem',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
});

export const titleGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

globalStyle(`${titleGroup} > span`, {
  fontSize: '18px',
  fontWeight: 'bold',
});

globalStyle(`${titleGroup} .value`, {
  color: '#666666',
});

export const tableContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const aside = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '8px',
});

export const asideLayer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const asideText = style({
  fontSize: '13px',
  color: '#333',
  lineHeight: 1.5,
});

export const asideGrid = style({
  width: '9px',
  height: '9px',
  borderRadius: '50%',

  selectors: {
    '&.blue': {
      backgroundColor: '#2e9bf9',
    },
    '&.red': {
      backgroundColor: '#e54444',
    },
  },
});
