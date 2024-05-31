import { style } from '@vanilla-extract/css';

import { KEYWORD_TYPE } from '@/hooks/general/interface';

export const grid = style({
  borderRadius: '30px',
  fontSize: '12px',
  color: '#fff',
  textAlign: 'center',
  padding: '2px 6px 3px',
});

export const keywordType: { [key: string]: string } = {
  [KEYWORD_TYPE.AIR]: style([
    grid,
    {
      backgroundColor: '#20c985',
    },
  ]),
  [KEYWORD_TYPE.VIEW]: style([
    grid,
    {
      backgroundColor: '#4b73f5',
    },
  ]),
};
