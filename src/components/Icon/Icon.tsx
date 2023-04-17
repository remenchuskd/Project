import React from "react";
import styles from "./Icon.module.css";
type Props={
  type:string,
  hoverable?: boolean,
}

export default function Icon({ type, hoverable }:Props) {
  // (props: Props )
  let result;
  let iconHoverableClass = hoverable ? styles.icon_hoverable : "";

  switch (type) {
    case "cart":
      result = (
        <span className={`${styles.icon} ${iconHoverableClass} `}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2196 20.502C18.0104 20.502 18.7719 20.1652 19.2991 19.5721C19.8263 18.979 20.0753 18.1882 19.9801 17.4047L18.2594 2.46024C18.0983 1.06171 16.9121 0 15.4989 0H4.50107C3.0879 0 1.90171 1.06171 1.74063 2.46024L0.0199243 17.4047C-0.0752635 18.1882 0.173689 18.979 0.700883 19.5721C1.22808 20.1652 1.98958 20.502 2.78037 20.502H17.2196ZM1.46971 17.5731L3.19773 2.62865C3.27095 1.96233 3.83476 1.46443 4.50107 1.46443H15.4989C16.1652 1.46443 16.729 1.96233 16.8023 2.62865L18.5303 17.5731C18.5742 17.9466 18.4571 18.3127 18.2008 18.5982C17.9518 18.8838 17.6004 19.0376 17.2196 19.0376H2.78037C2.39962 19.0376 2.04816 18.8838 1.7992 18.5982C1.54293 18.3127 1.42578 17.9466 1.46971 17.5731Z"
              fill="#6A7A99"
            />
            <path
              d="M9.99973 8.78657C12.4223 8.78657 14.393 6.81589 14.393 4.39328V3.66107C14.393 3.25674 14.0651 2.92886 13.6608 2.92886C13.2565 2.92886 12.9286 3.25674 12.9286 3.66107V4.39328C12.9286 6.00826 11.6147 7.32214 9.99973 7.32214C8.38476 7.32214 7.07087 6.00826 7.07087 4.39328V3.66107C7.07087 3.25674 6.74299 2.92886 6.33866 2.92886C5.93433 2.92886 5.60645 3.25674 5.60645 3.66107V4.39328C5.60645 6.81589 7.57713 8.78657 9.99973 8.78657Z"
              fill="#6A7A99"
            />
          </svg>
        </span>
      );
      break;
    case "search":
      result = (
        <span className={`${styles.icon} ${iconHoverableClass} `}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58366 17.5C13.9559 17.5 17.5003 13.9556 17.5003 9.58333C17.5003 5.21108 13.9559 1.66667 9.58366 1.66667C5.2114 1.66667 1.66699 5.21108 1.66699 9.58333C1.66699 13.9556 5.2114 17.5 9.58366 17.5Z"
              stroke="#6A7A99"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3337 18.3333L16.667 16.6667"
              stroke="#6A7A99"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      );
      break;
    case "logo":
      result = <img src='/logo.png' alt="logo" />;
      break;
    default:
      result = <span></span>;
  }

  return result;
}
