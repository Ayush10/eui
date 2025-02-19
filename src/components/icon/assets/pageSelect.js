import * as React from 'react';

const EuiIconPageSelect = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M3 1a1 1 0 00-1 1v12a1 1 0 001 1h5a4.995 4.995 0 01-.584-1H3V2h7v2a1 1 0 001 1h2v2.1c.348.07.682.177 1 .316V4a1 1 0 00-.293-.707l-2-2A1 1 0 0011 1H3zm13 11a4 4 0 11-8 0 4 4 0 018 0zm-1.646-1.354a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708 0l-1-1a.5.5 0 01.708-.708l.646.647 2.146-2.147a.5.5 0 01.708 0z"
    />
  </svg>
);

export const icon = EuiIconPageSelect;
