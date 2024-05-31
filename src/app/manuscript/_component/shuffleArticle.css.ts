import { globalStyle, style } from '@vanilla-extract/css';

export const shuffleResult = style({
  marginTop: '20px',
  width: '100%',
  minHeight: '100px',
  border: '1px solid #2e9bf9',
  backgroundColor: '#f9f9f9',
  borderRadius: '6px',
  fontSize: '13px',
  color: '#333',
  lineHeight: '26px',
  padding: '15px 20px',

  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2px',
});

globalStyle(`${shuffleResult} > .test`, {
  userSelect: 'text',
});

export const shuffleResultPlaceHolder = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  color: '#333',
  width: '100%',
});

export const shuffleArticle = style({
  marginTop: '60px',
  position: 'relative',
});

export const shuffleGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
});

globalStyle(`${shuffleGroup} > div`, {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const shuffleGroupTitle = style({
  fontSize: '15px',
});

export const shuffleGroupInput = style({
  width: '70px',
  height: '36px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '40px',
  textAlign: 'center',
});

export const shuffleGroupButton = style({
  width: '100px',
  height: '36px',
  backgroundColor: '#229afc',
  borderRadius: '4px',
  fontSize: '15px',
  color: '#fff',
  textAlign: 'center',

  ':hover': {
    backgroundColor: '#007add',
  },
});

export const wordGroup = style({
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  gap: '14px',

  position: 'absolute',
  top: 0,
  right: 0,
});

globalStyle(`${wordGroup} > div`, {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const wordBlock = style({
  lineHeight: 1.4,
  padding: '1px 3px',
  borderRadius: '4px',
});
