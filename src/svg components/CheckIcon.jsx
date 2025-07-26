import React from "react";

const CheckIcon = ({
  width = 14,
  height = 12,
  stroke = "black",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 11 9"
    {...props}
  >
    <path
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      d="M1 4.304L3.696 7l6-6"
    />
  </svg>
);

export default CheckIcon;
