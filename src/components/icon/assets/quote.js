import * as React from 'react';

const EuiIconQuote = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.848 2.47a1 1 0 01-.318 1.378A7.284 7.284 0 003.75 7.01 3 3 0 111 10v-.027a3.521 3.521 0 01.01-.232c.009-.15.027-.36.062-.618.07-.513.207-1.22.484-2.014.552-1.59 1.67-3.555 3.914-4.957a1 1 0 011.378.318zm7 0a1 1 0 01-.318 1.378 7.283 7.283 0 00-2.78 3.162A3 3 0 118 10v-.027a3.521 3.521 0 01.01-.232c.009-.15.027-.36.062-.618.07-.513.207-1.22.484-2.014.552-1.59 1.67-3.555 3.914-4.957a1 1 0 011.378.318z" />
  </svg>
);

export const icon = EuiIconQuote;
