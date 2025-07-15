import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path fill="currentColor" d="M0 0h6.188v15.281L21.468 0H30L0 30z" />
    <path
      fill="currentColor"
      d="M12.89 18.703 24.189 30H30v-5.812L18.703 12.89z"
      opacity={0.5}
    />
  </svg>
);
export default SvgLogo;
