import React from "react";

export default function Cross(props) {
  const size = props.size || 100;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 103 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L98 79M98 5L5 79"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
