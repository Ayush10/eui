import * as React from 'react';

const EuiIconAppIndexManagement = ({ title, titleId, ...props }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17 18v-2h-2v2H3v6h2v-4h10v4h2v-4h10v4h2v-6z" />
    <path
      className="euiIcon__fillSecondary"
      d="M4 32a3 3 0 110-6 3 3 0 010 6zm0-4a1 1 0 100 2 1 1 0 000-2zm12 4a3 3 0 110-6 3 3 0 010 6zm0-4a1 1 0 100 2 1 1 0 000-2zm12 4a3 3 0 110-6 3 3 0 010 6zm0-4a1 1 0 100 2 1 1 0 000-2zM23 8V6h-2.1a5 5 0 00-.73-1.75l1.49-1.49-1.42-1.42-1.49 1.49A5 5 0 0017 2.1V0h-2v2.1a5 5 0 00-1.75.73l-1.49-1.49-1.42 1.42 1.49 1.49A5 5 0 0011.1 6H9v2h2.1a5 5 0 00.73 1.75l-1.49 1.49 1.41 1.41 1.49-1.49a5 5 0 001.76.74V14h2v-2.1a5 5 0 001.75-.73l1.49 1.49 1.41-1.41-1.48-1.5A5 5 0 0020.9 8H23zm-7 2a3 3 0 110-6 3 3 0 010 6z"
    />
    <path d="M16 8a1 1 0 01-1-1 1.39 1.39 0 010-.2.65.65 0 01.06-.18.74.74 0 01.09-.18 1.61 1.61 0 01.12-.15.93.93 0 01.33-.21 1 1 0 011.09.21l.12.15a.78.78 0 01.09.18.62.62 0 01.1.18 1.27 1.27 0 010 .2 1 1 0 01-1 1z" />
  </svg>
);

export const icon = EuiIconAppIndexManagement;
