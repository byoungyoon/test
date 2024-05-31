import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,

  backdropFilter: 'blur(2px)',
});

export const PanelAnimation = {
  enter: style({
    opacity: 0,
    transform: 'translate3d(100%, 0, 0)',
  }),

  enterDone: style({
    opacity: 1,
    transform: 'translateZ(0)',
    transition: 'all 0.3s',
  }),

  exit: style({
    opacity: 0,
    transform: 'translate3d(100%, 0, 0)',
    transition: 'all 0.3s',
  }),
};

export const panel = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,

  width: 'calc(100vw - 30vw)',
  backgroundColor: '#fff',
  boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  flexDirection: 'column',
});

export const panelHeader = style({
  padding: '15px 20px',
  display: 'flex',
  gap: '3rem',
  borderBottom: '1px solid #999',
  alignItems: 'center',
});

globalStyle(`${panelHeader} img`, {
  cursor: 'pointer',
});

export const panelBody = style({
  flexGrow: 1,
});
