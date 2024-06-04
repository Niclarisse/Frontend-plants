import React from 'react';

const ExportSvg = ({ strokeColor }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99935 1.66667C5.39935 1.66667 1.66602 5.4 1.66602 10C1.66602 14.6 5.39935 18.3333 9.99935 18.3333C14.5993 18.3333 18.3327 14.6 18.3327 10"
      stroke={strokeColor}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.834 9.16667L17.6673 2.33337"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3336 5.69167V1.66667H14.3086"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ExportSvg;
