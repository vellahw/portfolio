import { cx } from "../../styled-system/css";
import { LinkButtonStyle } from "./LinkButton.styles";

type ButtonProps = {
  link: string;
  className: string;
  children: React.ReactNode;
};

function LinkButton({ link, className, children }: ButtonProps) {
  return (
    <a
      href={link}
      className={cx(LinkButtonStyle, className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8225 4.44727L15.375 8.99976L10.8225 13.5523"
          stroke="#F0EEED"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.625 9H15.2475"
          stroke="#F0EEED"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default LinkButton;
