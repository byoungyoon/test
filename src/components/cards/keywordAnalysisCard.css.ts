import { style } from '@vanilla-extract/css';

export const container = style({
  width: '250px',
  minHeight: '128px',
  backgroundColor: '#f8f8f8',
  border: '1px solid #e6e6e6',
  borderRadius: '8px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  height: '38px',
  fontSize: '15px',
  lineHeight: '19px',
  textAlign: 'center',
  wordBreak: 'break-all',
});

export const layer = style({
  alignItems: 'center',
  padding: '20px 20px 0',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const group = style({
  display: 'flex',
  gap: '3px',
  alignItems: 'center',
});

export const input = style({
  width: '40px',
  height: '30px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
});
