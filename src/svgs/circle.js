import React from "react";

export default function Circle(props) {
  const size = props.size || 100;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="37.5" cy="37.5" r="32.5" stroke="black" strokeWidth="10" />
    </svg>
  );
}
