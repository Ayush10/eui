import * as React from 'react';

const EuiIconVisLine = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.654 3.48c.248.225.552.389.888.467L11.24 9.43a1.99 1.99 0 00-.915-.404l2.33-5.547zM9.146 9.19a2.008 2.008 0 00-.769.64l-1.572-2c.311-.136.581-.35.785-.618l1.556 1.978zM5.581 7.956l-2.134 4.268a.5.5 0 01-.894-.448l2.134-4.268c.25.22.557.376.894.448zM1 15h13.5a.5.5 0 110 1H.5a.5.5 0 01-.5-.5v-14a.5.5 0 011 0V15zm5-8a1 1 0 110-2 1 1 0 010 2zm4 5a1 1 0 110-2 1 1 0 010 2zm4-9a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);

export const icon = EuiIconVisLine;
