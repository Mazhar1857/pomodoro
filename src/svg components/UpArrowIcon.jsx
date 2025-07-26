import React from "react";

const UpArrowIcon = ({
  width = 14,
  height = 7,
  stroke = "#1E213F",
  strokeOpacity = 0.25,
  strokeWidth = 2,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 14 7"
    {...props}
  >
    <path
      fill="none"
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
      d="M1 6l6-4 6 4"
    />
  </svg>
);

export default UpArrowIcon;
