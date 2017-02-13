import React from 'react';

export const formatBaseHeader = (column, base) => {
  return <span>
    <span className="base-header-label">The</span>
    {Math.pow(base, column)}s
    <span className="base-header-label">Column</span>
  </span>
}

export const formatBaseCell = (digit) => {
  return digit.toString().toUpperCase();
}
