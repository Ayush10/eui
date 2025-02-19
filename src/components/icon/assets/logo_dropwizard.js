import * as React from 'react';

const EuiIconLogoDropwizard = ({ title, titleId, ...props }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M8 29.61s9.55 4.74 16.856-.893c-1.905-5.114-5.25-19.867-7.226-26.383-.422-1.389-.49-1.527-.663-1.909-.964-2.134-1.978 4.142-3.628 10.459C12.749 13.148 8 29.61 8 29.61"
      fill="url(#paint0_linear)"
    />
    <path
      d="M9.926 28.563s8.17 4.794 14.93.154c-.18-.807-.642-2.103-.955-3.311-1.664-6.416-4.676-17.248-6.144-22.626-1.59-5.822-2.105.986-3.961 8.23-.564 2.204-3.87 17.553-3.87 17.553"
      fill="url(#paint1_linear)"
    />
    <path
      d="M12.14 24.41l.85-1.466.793 1.544-.908 1.99-.735-2.069zm6.934-5.545l.85-1.465.793 1.543-.908 1.99-.735-2.068zm-4.747-5.851l.85-1.465.792 1.543-.908 1.99-.734-2.068"
      fill="#F9A72B"
    />
    <path
      d="M12.14 24.41l.85-1.716.793 1.794-.907 1.468-.736-1.546zm6.934-5.545l.851-1.716.792 1.794-.906 1.468-.737-1.546zm-4.747-5.851l.85-1.716.792 1.794-.906 1.468-.736-1.546"
      fill="#FFF200"
    />
    <path
      d="M12.987 28.422s6.082 1.015 10.086-1.549c-.502 1.55-4.991 3.314-10.086 1.55"
      fill="#24265D"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={33.473}
        y1={7.674}
        x2={7.751}
        y2={21.331}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3871C1" />
        <stop offset={0.515} stopColor="#2C3792" />
        <stop offset={0.865} stopColor="#24265D" />
        <stop offset={1} stopColor="#252761" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1={21.028}
        y1={14.928}
        x2={6.017}
        y2={18.844}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3871C1" />
        <stop offset={0.515} stopColor="#2C3792" />
        <stop offset={0.865} stopColor="#24265D" />
        <stop offset={1} stopColor="#252761" />
      </linearGradient>
    </defs>
  </svg>
);

export const icon = EuiIconLogoDropwizard;
