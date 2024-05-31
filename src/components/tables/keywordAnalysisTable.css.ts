import { globalStyle, style } from '@vanilla-extract/css';

export const header = style({
  fontSize: '15px',
  color: '#fff',
  lineHeight: 1.2,
});

export const cellRank = style({
  paddingLeft: '4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const cellRankIndex = style({
  fontSize: '20px',
  color: '#333',
});

export const callBasic = style({
  display: 'flex',
  fontSize: '13px',
  userSelect: 'none',
  alignItems: 'center',
});

export const callBasicLayer = {
  image: style({
    width: '70px',
    height: '100%',
    marginRight: '10px',
  }),
  info: style({
    width: '230px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    paddingLeft: '15px',
    paddingRight: '50px',
    gap: '10px',
  }),
  subInfo: style({
    width: '134px',
    display: 'flex',
    minWidth: '120px',
    flexDirection: 'column',
    alignItems: 'start',
  }),
};

globalStyle(`${callBasicLayer.image} img`, {
  cursor: 'pointer',
  borderRadius: '4px',
});

export const infoLayer = {
  title: style({
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    color: '#229AFC',
  }),
  count: style({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  }),
  subCount: style({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
};

export const subInfoLayer = {
  date: style({
    fontSize: '13px',
    color: '#666',
    paddingBottom: '10px',
  }),

  grid: style({
    width: '19px',
    height: '19px',
    backgroundColor: '#d7d7d7',
    borderRadius: '50%',
    fontSize: '12px',
    lineHeight: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2px',
  }),

  group: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
  }),
};

export const textGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const textGrid = style({
  width: '10px',
  height: '10px',
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

export const callAnalysis = style({
  maxHeight: '92px',
  overflowX: 'hidden',
  overflowY: 'auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '30px',
  gridRowStart: 'start',
  paddingRight: '5rem',
});

export const callAnalysisLayer = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3px 0',
  height: '20px',
  fontSize: '14px',
  fontWeight: 400,
  color: '#333',
});

export const callHash = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});

export const callHashLayer = {
  title: style({
    display: 'flex',
    gap: '3px',
    fontSize: '15px',
    marginBottom: '4px',
  }),
  list: style({
    maxHeight: '63px',
    overflowY: 'auto',
  }),
};

globalStyle(`${callHashLayer.list} span`, {
  fontSize: '13px',
  margin: '0 10px 8px 0',
  float: 'left',
});

export const copyButton = style({
  padding: '0.15rem 0.3rem',
});
