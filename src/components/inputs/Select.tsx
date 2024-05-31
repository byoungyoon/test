'use client';

import cx from 'classnames';
import React, { ChangeEventHandler } from 'react';

import * as styles from './select.css';

interface SelectProps {
  defaultValue: string;
  options: {
    key: string;
    value: string;
  }[];
  classnames?: {
    select: string;
    option: string;
  };

  onTrackableSelect?: (key: string) => void;
}

const Select = ({
  defaultValue = '',
  options = [],
  onTrackableSelect,
  classnames,
}: SelectProps) => {
  const onChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onTrackableSelect && onTrackableSelect(event.target.value);
  };

  return (
    <select
      defaultValue={defaultValue}
      onChange={onChangeSelect}
      className={cx(classnames?.select, styles.select)}
    >
      {options.map((item) => (
        <option
          key={item.key}
          value={item.key}
          className={cx(classnames?.option, styles.option)}
        >
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
