import { globalStyle, style } from '@vanilla-extract/css';

export const layer = {
  top: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  info: style({
    backgroundColor: '#eee',
    borderRadius: '6px',
    padding: '15px',
    marginTop: '10px',
    display: 'grid',
    gridTemplateColumns: '162px 268px 1fr',
    rowGap: '13px',
  }),

  tagKeyword: style({
    marginTop: '25px',
    display: 'flex',
    gap: '20px',
    overflow: 'hidden',
  }),

  posting: style({
    marginTop: '25px',
  }),
};

globalStyle(`${layer.tagKeyword} > div`, {
  width: '50%',
});

export const text = {
  url: style({
    fontSize: '14px',
    color: '#666',
    textAlign: 'left',
    transition: 'all 0.2s',
    width: '450px',

    ':hover': {
      color: '#222',
    },
  }),

  title: style({
    fontSize: '15px',
    fontWeight: 500,
    marginBottom: '7px',
    userSelect: 'none',
  }),

  none: style({
    color: '#666',
    fontSize: '12px',
  }),
};

export const listBox = style({
  height: '200px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  lineHeight: '22px',
  padding: '10px 15px',
  overflow: 'hidden',
  overflowY: 'auto',
});

export const copyTitle = style([
  text.title,
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const tagInner = style({
  fontSize: '13px',
  margin: '0 20px 10px 0',
  float: 'left',
});

export const keywordInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const keywordInnerGroup = style({
  display: 'flex',
  gap: '4px',
});

export const keywordInnerGroupCount = style({
  color: '#00ab55',
  fontWeight: 300,
  verticalAlign: 'top',
});

export const keywordInnerSubGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  marginBottom: '10px',
});

export const keywordInnerSubGroupText = style({
  paddingLeft: '15px',
  whiteSpace: 'nowrap',
  color: '#666',
  textOverflow: 'ellipsis',

  ':before': {
    content: '-',
    margin: '0 4px',
  },
});

export const infoGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',

  ':before': {
    content: '',
    width: '5px',
    height: '5px',
    backgroundColor: '#333',
    marginRight: '3px',
  },
});

export const infoImageGroup = style({
  display: 'flex',
  gap: '20px',
});

export const infoSubImageGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});

export const copyButton = style({
  padding: '0.15rem 0.3rem',
});
