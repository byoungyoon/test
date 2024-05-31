import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'flex',
  height: '100%',
});

export const infoArticle = style({
  minWidth: '600px',
  maxWidth: '600px',
  borderRight: '1px solid #ccc',
  position: 'relative',
});

export const infoArticleOverflow = style({
  padding: '20px',
  overflow: 'hidden',
  overflowY: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});
