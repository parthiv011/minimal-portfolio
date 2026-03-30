import React from 'react';

export const SVGComponent = () => {
  return (
    // <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gray-50 shadow-md">
    <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0.5"
        y1="1"
        x2="313.5"
        y2="1"
        stroke="var(--color-line)"
        stroke-linecap="round"
      ></line>
      <line
        x1="0.5"
        y1="1"
        x2="313.5"
        y2="1"
        stroke="url(#horizontal-line-gradient)"
        stroke-linecap="round"
      ></line>
      <defs>
        <linearGradient
          id="horizontal-line-gradient"
          gradientUnits="userSpaceOnUse"
          y1="0"
          y2="1"
          x1="108.822%"
          x2="118.822%"
        >
          <stop stop-color="var(--color-line)"></stop>
          <stop offset="0.5" stop-color="var(--color-blue-500)"></stop>
          <stop offset="1" stop-color="var(--color-line)"></stop>
        </linearGradient>
      </defs>
    </svg>
    // </div>
  );
};
