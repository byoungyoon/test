'use client';

import * as React from 'react';

export const SubTabListContext = React.createContext<{
  selectedSubTab?: number;
}>({});

export const useSubTabListState = () => React.useContext(SubTabListContext);
