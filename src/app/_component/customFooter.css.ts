import { style } from '@vanilla-extract/css';

import { button, vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  position: 'fixed',
  bottom: 0,
  backgroundColor: 'rgba(249, 249, 249, 0.7)',
  padding: '16px 20px 16px',
});

export const customButton = style([
  button,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',

    selectors: {
      '&.open': {
        opacity: 0,
      },
      '&.disabled': {
        backgroundColor: vars.color.gray['200'],
        userSelect: 'none',
      },
    },
  },
]);
