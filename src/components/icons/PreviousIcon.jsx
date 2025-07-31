const PreviousIcon = ({
  width = 12,
  height = 18,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 1 3 9l8 8"
      stroke={color}
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

export default PreviousIcon;
