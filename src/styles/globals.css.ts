import { globalStyle } from '@vanilla-extract/css';

import * as theme from './theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
  color: '#000',
});

globalStyle('html', {
  height: '100%',
  overflowY: 'auto',
  textSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  height: '100%',
  backgroundColor: theme.vars.color.neutral['100'],
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  fontSize: '12px',
  color: '#444',
});

globalStyle(
  'body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td, input, select, textarea, button',
  {
    margin: 0,
    padding: 0,
    letterSpacing: '0.16px',
    boxSizing: 'border-box',
  }
);

globalStyle('input, select, textarea, button, label', {
  fontSize: '100%',
  verticalAlign: 'middle',
});

globalStyle('select', {
  color: theme.vars.color.neutral['600'],
  lineHeight: 1.1,
  paddingLeft: '5px',
  border: '1px solid #8d8d8d',
});

globalStyle('input', {
  border: 0,
});

globalStyle(
  'input[type="text"], input[type="password"], input[type="tel"], input[type="email"]',
  {
    border: '1px solid #8d8d8d',
    outline: 'none',
  }
);

globalStyle('fieldset, img, iframe', {
  border: '0 none',
});

globalStyle('b, strong', {
  fontWeight: 600,
});

globalStyle('img', {
  verticalAlign: 'middle',
  borderStyle: 'none',
});

globalStyle('textarea', {
  width: '100%',
  padding: '10px',
  resize: 'none',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
});

globalStyle('em, address', {
  fontStyle: 'normal',
});

globalStyle('a', {
  textDecoration: 'none',
  backgroundColor: 'transparent',
  verticalAlign: 'middle',
  WebkitTextDecorationSkip: 'objects',
  color: '#2d2d2d',
  wordBreak: 'break-word',
  transition: '0.2s linear',
});

globalStyle('a:hover, a:active, a:focus', {
  textDecoration: 'none',
});

globalStyle('a:active', {
  color: '#333',
});

globalStyle('menu, li', {
  listStyle: 'none',
});

globalStyle('button', {
  padding: 0,
  margin: 0,
  border: 0,
  cursor: 'pointer',
  verticalAlign: 'middle',
  background: 'none',
  transition: '0.2s linear',
});

globalStyle('button, input', {
  overflow: 'visible',
});

globalStyle('button, select', {
  textTransform: 'none',
});

globalStyle('button, html [type="button"], [type="reset"], [type="submit"]', {
  WebkitAppearance: 'button',
});

globalStyle(
  "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner",
  {
    borderStyle: 'none',
    padding: 0,
  }
);

globalStyle(
  "button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring",
  {
    outline: '1px dotted ButtonText',
  }
);

globalStyle('caption', {
  width: 0,
  height: 0,
  fontSize: 0,
  lineHeight: 0,
  overflow: 'hidden',
});

globalStyle('hr', {
  display: 'none',
});

globalStyle('i, em, address', {
  fontStyle: 'normal',
});

globalStyle('label', {
  cursor: 'pointer',
});

globalStyle('table', {
  borderSpacing: 0,
  borderCollapse: 'collapse',
  color: '#2d2d2d',
});

globalStyle('legend', {
  position: 'absolute',
  top: 0,
  left: '-1000000000px',
  height: 0,
  fontSize: 0,
});

globalStyle('::-webkit-input-placeholder', {
  color: '#a1a1a1',
  fontSize: '13px',
  fontWeight: 400,
});

globalStyle('::-moz-placeholder', {
  color: '#a1a1a1',
  fontSize: '13px',
});

globalStyle(':-ms-input-placeholder', {
  color: '#a1a1a1',
  fontSize: '13px',
});

globalStyle('::-webkit-scrollbar', {
  width: '4px',
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: 'rgba(0,0,0,0.1)',
  borderRadius: '10px',
});

globalStyle('::-webkit-scrollbar-track ', {
  backgroundColor: 'transparent',
});

globalStyle('header', {
  width: '100%',
  backgroundColor: '#000',
  position: 'relative',
});

globalStyle('button.btn_default', {
  transition: 'all 0.2s linear',
  cursor: 'pointer',
});
