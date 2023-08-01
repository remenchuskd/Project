import React from 'react';
import styles from './Icon.module.css';

type Props = {
  type: string;
  hoverable?: boolean;
};

export default function Icon({ type, hoverable }: Props) {
  // (props: Props )
  let result;
  let iconHoverableClass = hoverable ? styles.icon_hoverable : '';
  let linkHoverableClass = hoverable ? styles.link_hoverable : '';

  switch (type) {
    case 'cart':
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
    case 'search':
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
    case 'like':
      result = <img src="icon-like.png" alt="like" />;
      break;
    case 'dislike':
      result = <img src="icon-dislike.png" alt="dislike" />;
      break;
    case 'tick-right':
      result = (
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
            fill="#140342"
          />
        </svg>
      );
      break;
    case 'tick':
      result = (
        <svg
          className={styles.icon}
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.58745 5.3393L8.37478 1.5519C8.46245 1.4643 8.51074 1.34736 8.51074 1.22268C8.51074 1.09799 8.46245 0.981058 8.37478 0.89346L8.09593 0.614544C7.91423 0.433052 7.61892 0.433052 7.43749 0.614544L4.25712 3.79492L1.07322 0.611015C0.985558 0.523417 0.868691 0.475052 0.744075 0.475052C0.61932 0.475052 0.502454 0.523417 0.414718 0.611015L0.135941 0.889931C0.0482731 0.977598 -2.29153e-05 1.09446 -2.29207e-05 1.21915C-2.29262e-05 1.34383 0.048273 1.46077 0.135941 1.54837L3.92673 5.3393C4.01467 5.4271 4.13209 5.47533 4.25692 5.47505C4.38222 5.47533 4.49957 5.4271 4.58745 5.3393Z"
            fill="#202124"
          />
        </svg>
      );
      break;
    case 'tick-up':
      result = (
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.49258 0.19006L0.190318 5.49242C0.0675846 5.61505 -3.0503e-05 5.77876 -3.05051e-05 5.95332C-3.05072e-05 6.12788 0.0675846 6.29159 0.190318 6.41423L0.580703 6.80471C0.835083 7.0588 1.24852 7.0588 1.50252 6.80471L5.95504 2.35219L10.4125 6.80965C10.5352 6.93229 10.6988 7 10.8733 7C11.048 7 11.2116 6.93229 11.3344 6.80965L11.7247 6.41917C11.8474 6.29644 11.915 6.13282 11.915 5.95826C11.915 5.7837 11.8474 5.61999 11.7247 5.49736L6.41759 0.19006C6.29447 0.0671321 6.13008 -0.000385688 5.95533 1.50153e-06C5.77989 -0.000385692 5.6156 0.0671321 5.49258 0.19006Z"
            fill="#140342"
          />
        </svg>
      );
      break;
    case 'tick-down':
      result = (
        <svg
          width="13"
          height="8"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.58745 5.3393L8.37478 1.5519C8.46245 1.4643 8.51074 1.34736 8.51074 1.22268C8.51074 1.09799 8.46245 0.981058 8.37478 0.89346L8.09593 0.614544C7.91423 0.433052 7.61892 0.433052 7.43749 0.614544L4.25712 3.79492L1.07322 0.611015C0.985558 0.523417 0.868691 0.475052 0.744075 0.475052C0.61932 0.475052 0.502454 0.523417 0.414718 0.611015L0.135941 0.889931C0.0482731 0.977598 -2.29153e-05 1.09446 -2.29207e-05 1.21915C-2.29262e-05 1.34383 0.048273 1.46077 0.135941 1.54837L3.92673 5.3393C4.01467 5.4271 4.13209 5.47533 4.25692 5.47505C4.38222 5.47533 4.49957 5.4271 4.58745 5.3393Z"
            fill="#202124"
          />
        </svg>
      );
      break;
    case 'logo':
      result = <img src="/logo.png" alt="logo" />;
      break;
    case 'logoWhite':
      result = <img src="/logo_white.png" alt="logo" />;
      break;
    case 'logoWhite2':
      result = <img src="/logo_white2.png" alt="logo" />;
      break;
    case 'facebook':
      result = <img src="/facebook.png" alt="logo" />;
      break;
    case 'insta':
      result = <img src="/insta.png" alt="logo" />;
      break;
    case 'linkedin':
      result = <img src="/linkedin.png" alt="logo" />;
      break;
    case 'link':
      result = (
        <svg
          className={`${styles.icon} ${linkHoverableClass} `}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.834 0.916504L1.16732 12.5832"
            stroke="#6440FB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.834 9.47484V0.916504H4.27565"
            stroke="#6440FB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    case 'student':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5312 15.0625H13.4688V10.4688C13.4688 9.95181 13.0482 9.53125 12.5312 9.53125H11.8343C11.6507 8.73003 11.2851 8.04209 10.7637 7.52528C10.4356 7.2 10.0541 6.95144 9.631 6.78422C10.5378 6.00178 11.1297 4.64916 11.1297 3.42706C11.1297 2.31806 10.8212 1.44766 10.2128 0.840125C9.66244 0.2905 8.89728 0 8 0C7.10275 0 6.33756 0.2905 5.78719 0.840125C5.17878 1.44766 4.87028 2.31806 4.87028 3.42706C4.87028 4.64913 5.46213 6.00178 6.36897 6.78422C5.94591 6.95144 5.56441 7.2 5.23628 7.52528C4.71494 8.04209 4.34934 8.73006 4.16572 9.53125H3.46875C2.95181 9.53125 2.53125 9.95181 2.53125 10.4688V15.0625H0.46875C0.209875 15.0625 0 15.2724 0 15.5312C0 15.7901 0.209875 16 0.46875 16H15.5312C15.7901 16 16 15.7901 16 15.5312C16 15.2724 15.7901 15.0625 15.5312 15.0625ZM8 0.9375C8.68844 0.9375 9.76894 1.16634 10.0955 2.52691C9.61775 2.46616 9.34494 2.33119 9.13141 2.22553C8.92209 2.12197 8.68484 2.00456 8.39531 2.07094C8.16028 2.12481 7.99225 2.25741 7.82978 2.38566C7.53369 2.61938 7.10141 2.95981 5.82469 3.02875C5.98366 1.22053 7.23434 0.9375 8 0.9375ZM5.855 3.96587C7.44709 3.88203 8.04175 3.41275 8.41066 3.12153C8.46406 3.07934 8.53281 3.02513 8.57537 2.99916C8.613 3.01503 8.66853 3.0425 8.71566 3.06581C8.99109 3.20209 9.42356 3.41597 10.191 3.47872C10.1788 4.16894 9.92216 4.93447 9.49809 5.53762C9.06534 6.15319 8.51928 6.50625 8 6.50625C7.48072 6.50625 6.93466 6.15319 6.50187 5.53762C6.17578 5.07378 5.94828 4.51375 5.855 3.96587ZM7.75 7.46875H8.25C9.55087 7.46875 10.4998 8.22937 10.868 9.53125H5.132C5.50019 8.22937 6.44913 7.46875 7.75 7.46875ZM3.46875 15.0625V10.4688H12.5312V15.0625H3.46875Z"
            fill="#6A7A99"
          />
        </svg>
      );
      break;
    case 'student_white':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5312 15.0625H13.4688V10.4688C13.4688 9.95181 13.0482 9.53125 12.5312 9.53125H11.8343C11.6507 8.73003 11.2851 8.04209 10.7637 7.52528C10.4356 7.2 10.0541 6.95144 9.631 6.78422C10.5378 6.00178 11.1297 4.64916 11.1297 3.42706C11.1297 2.31806 10.8212 1.44766 10.2128 0.840125C9.66244 0.2905 8.89728 0 8 0C7.10275 0 6.33756 0.2905 5.78719 0.840125C5.17878 1.44766 4.87028 2.31806 4.87028 3.42706C4.87028 4.64913 5.46213 6.00178 6.36897 6.78422C5.94591 6.95144 5.56441 7.2 5.23628 7.52528C4.71494 8.04209 4.34934 8.73006 4.16572 9.53125H3.46875C2.95181 9.53125 2.53125 9.95181 2.53125 10.4688V15.0625H0.46875C0.209875 15.0625 0 15.2724 0 15.5312C0 15.7901 0.209875 16 0.46875 16H15.5312C15.7901 16 16 15.7901 16 15.5312C16 15.2724 15.7901 15.0625 15.5312 15.0625ZM8 0.9375C8.68844 0.9375 9.76894 1.16634 10.0955 2.52691C9.61775 2.46616 9.34494 2.33119 9.13141 2.22553C8.92209 2.12197 8.68484 2.00456 8.39531 2.07094C8.16028 2.12481 7.99225 2.25741 7.82978 2.38566C7.53369 2.61938 7.10141 2.95981 5.82469 3.02875C5.98366 1.22053 7.23434 0.9375 8 0.9375ZM5.855 3.96587C7.44709 3.88203 8.04175 3.41275 8.41066 3.12153C8.46406 3.07934 8.53281 3.02513 8.57537 2.99916C8.613 3.01503 8.66853 3.0425 8.71566 3.06581C8.99109 3.20209 9.42356 3.41597 10.191 3.47872C10.1788 4.16894 9.92216 4.93447 9.49809 5.53762C9.06534 6.15319 8.51928 6.50625 8 6.50625C7.48072 6.50625 6.93466 6.15319 6.50187 5.53762C6.17578 5.07378 5.94828 4.51375 5.855 3.96587ZM7.75 7.46875H8.25C9.55087 7.46875 10.4998 8.22937 10.868 9.53125H5.132C5.50019 8.22937 6.44913 7.46875 7.75 7.46875ZM3.46875 15.0625V10.4688H12.5312V15.0625H3.46875Z"
            fill="white"
          />
          <path
            d="M8 12.9686C8.25888 12.9686 8.46875 12.7588 8.46875 12.4999C8.46875 12.241 8.25888 12.0311 8 12.0311C7.74112 12.0311 7.53125 12.241 7.53125 12.4999C7.53125 12.7588 7.74112 12.9686 8 12.9686Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'course':
      result = (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4028 4.6153L3.31529 0.246428C2.80252 -0.0692515 2.18257 -0.0823765 1.65689 0.211319C1.13121 0.504967 0.817383 1.03983 0.817383 1.64197V10.3399C0.817383 11.2504 1.55098 11.995 2.45262 12C2.45508 12 2.45754 12 2.45996 12C2.74172 12 3.03535 11.9116 3.30959 11.7443C3.53021 11.6097 3.59994 11.3217 3.46533 11.1012C3.33073 10.8805 3.04273 10.8108 2.82218 10.9454C2.69391 11.0236 2.56864 11.0641 2.45766 11.0641C2.11746 11.0622 1.75322 10.7708 1.75322 10.3399V1.64199C1.75322 1.38369 1.88785 1.1543 2.11332 1.02833C2.33881 0.90235 2.60471 0.907975 2.82439 1.04323L9.91192 5.4121C10.1249 5.54326 10.2468 5.76195 10.2463 6.01212C10.2458 6.26227 10.123 6.48048 9.90883 6.61119L4.78452 9.74872C4.56411 9.88367 4.49483 10.1717 4.62978 10.3921C4.76471 10.6125 5.05278 10.6818 5.27319 10.5469L10.3969 7.4097C10.8875 7.11043 11.181 6.58871 11.1822 6.014C11.1834 5.43936 10.8919 4.91642 10.4028 4.6153Z"
            fill="#6A7A99"
          />
        </svg>
      );
      break;
    case 'course_white':
      result = (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4028 4.6153L3.31529 0.246428C2.80252 -0.0692515 2.18257 -0.0823765 1.65689 0.211319C1.13121 0.504967 0.817383 1.03983 0.817383 1.64197V10.3399C0.817383 11.2504 1.55098 11.995 2.45262 12C2.45508 12 2.45754 12 2.45996 12C2.74172 12 3.03535 11.9116 3.30959 11.7443C3.53021 11.6097 3.59994 11.3217 3.46533 11.1012C3.33073 10.8805 3.04273 10.8108 2.82218 10.9454C2.69391 11.0236 2.56864 11.0641 2.45766 11.0641C2.11746 11.0622 1.75322 10.7708 1.75322 10.3399V1.64199C1.75322 1.38369 1.88785 1.1543 2.11332 1.02833C2.33881 0.90235 2.60471 0.907975 2.82439 1.04323L9.91192 5.4121C10.1249 5.54326 10.2468 5.76195 10.2463 6.01212C10.2458 6.26227 10.123 6.48048 9.90883 6.61119L4.78452 9.74872C4.56411 9.88367 4.49483 10.1717 4.62978 10.3921C4.76471 10.6125 5.05278 10.6818 5.27319 10.5469L10.3969 7.4097C10.8875 7.11043 11.181 6.58871 11.1822 6.014C11.1834 5.43936 10.8919 4.91642 10.4028 4.6153Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'reviews_white':
      result = (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.11V5.28121C0 2.86009 1.97013 0.889954 4.39126 0.889954H11.6077C14.0293 0.889954 16 2.86009 16 5.28121V6.63156C16 9.05268 14.0299 11.0228 11.6087 11.0228H4.49306L0 13.11ZM4.39126 1.86895C2.50974 1.86895 0.979 3.3997 0.979 5.28121V11.5756L4.27732 10.0433H11.6087C13.4903 10.0433 15.021 8.51254 15.021 6.63103V5.28068C15.021 3.39917 13.4897 1.86843 11.6077 1.86843H4.39126V1.86895ZM4.71407 5.20684C5.22837 5.20684 5.64507 5.62354 5.64507 6.13784C5.64507 6.65213 5.22837 7.06883 4.71407 7.06883C4.19978 7.06883 3.78307 6.65213 3.78307 6.13784C3.78307 5.62354 4.19978 5.20684 4.71407 5.20684ZM11.2854 5.20684C11.7997 5.20684 12.2164 5.62354 12.2164 6.13784C12.2164 6.65213 11.7997 7.06883 11.2854 7.06883C10.7711 7.06883 10.3544 6.65213 10.3544 6.13784C10.3544 5.62354 10.7711 5.20684 11.2854 5.20684ZM7.99921 5.20684C8.5135 5.20684 8.93021 5.62354 8.93021 6.13784C8.93021 6.65213 8.5135 7.06883 7.99921 7.06883C7.48492 7.06883 7.06821 6.65213 7.06821 6.13784C7.06821 5.62354 7.48492 5.20684 7.99921 5.20684Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'comment':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.11V6.28115C0 3.86002 1.97013 1.88989 4.39126 1.88989H11.6077C14.0293 1.88989 16 3.86002 16 6.28115V7.63149C16 10.0526 14.0299 12.0228 11.6087 12.0228H4.49306L0 14.11ZM4.39126 2.86889C2.50974 2.86889 0.979 4.39963 0.979 6.28115V12.5755L4.27732 11.0432H11.6087C13.4903 11.0432 15.021 9.51248 15.021 7.63097V6.28062C15.021 4.39911 13.4897 2.86837 11.6077 2.86837H4.39126V2.86889ZM4.71407 6.20678C5.22837 6.20678 5.64507 6.62348 5.64507 7.13777C5.64507 7.65207 5.22837 8.06877 4.71407 8.06877C4.19978 8.06877 3.78307 7.65207 3.78307 7.13777C3.78307 6.62348 4.19978 6.20678 4.71407 6.20678ZM11.2854 6.20678C11.7997 6.20678 12.2164 6.62348 12.2164 7.13777C12.2164 7.65207 11.7997 8.06877 11.2854 8.06877C10.7711 8.06877 10.3544 7.65207 10.3544 7.13777C10.3544 6.62348 10.7711 6.20678 11.2854 6.20678ZM7.99921 6.20678C8.5135 6.20678 8.93021 6.62348 8.93021 7.13777C8.93021 7.65207 8.5135 8.06877 7.99921 8.06877C7.48492 8.06877 7.06821 7.65207 7.06821 7.13777C7.06821 6.62348 7.48492 6.20678 7.99921 6.20678Z"
            fill="#6A7A99"
          />
        </svg>
      );
      break;
    case 'clock':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_218_14345)">
            <path
              d="M8 0C3.58891 0 0 3.58872 0 8C0 12.4113 3.58891 16 8 16C12.4113 16 16 12.4113 16 8C16 3.58872 12.4111 0 8 0ZM8 14.8321C4.23281 14.8321 1.16788 11.7672 1.16788 8C1.16788 4.23281 4.23281 1.16788 8 1.16788C11.7672 1.16788 14.8321 4.23278 14.8321 7.99981C14.8321 11.7672 11.7672 14.8321 8 14.8321Z"
              fill="#6A7A99"
            />
            <path
              d="M10.7251 7.99995H8.19472V4.49629C8.19472 4.17376 7.93331 3.91235 7.61078 3.91235C7.28825 3.91235 7.02684 4.17376 7.02684 4.49629V8.58389C7.02684 8.90642 7.28825 9.16782 7.61078 9.16782H10.7251C11.0477 9.16782 11.3091 8.90642 11.3091 8.58389C11.3091 8.26135 11.0477 7.99995 10.7251 7.99995Z"
              fill="#6A7A99"
            />
          </g>
          <defs>
            <clipPath id="clip0_218_14345">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'level':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_558_3966)">
            <path
              d="M2.15506 9.18042C0.966781 9.18042 0 10.1472 0 11.3355V13.8448C0 15.0331 0.966781 15.9999 2.15509 15.9999C3.34341 15.9999 4.31016 15.0331 4.31016 13.8448V11.3355C4.31016 10.1472 3.34337 9.18042 2.15506 9.18042ZM3.06013 13.8448C3.06013 14.3439 2.65412 14.7499 2.15506 14.7499C1.65603 14.7499 1.25 14.3439 1.25 13.8448V11.3355C1.25 10.8364 1.65603 10.4304 2.15509 10.4304C2.65416 10.4304 3.06016 10.8365 3.06013 11.3355V13.8448Z"
              fill="#6A7A99"
            />
            <path
              d="M7.99981 0C6.8115 0 5.84473 0.966781 5.84473 2.15509V13.8449C5.84473 15.0332 6.8115 16 7.99981 16C9.18812 16 10.1549 15.0332 10.1549 13.8449V2.15509C10.1549 0.966781 9.18812 0 7.99981 0ZM8.9049 13.8449C8.9049 14.344 8.49887 14.75 7.99981 14.75C7.50075 14.75 7.09472 14.344 7.09472 13.8449V2.15509C7.09472 1.656 7.50075 1.25 7.99981 1.25C8.49887 1.25 8.9049 1.656 8.9049 2.15509V13.8449Z"
              fill="#6A7A99"
            />
            <path
              d="M13.8445 4.59033C12.6562 4.59033 11.6895 5.55711 11.6895 6.74543V13.845C11.6895 15.0333 12.6562 16.0001 13.8445 16.0001C15.0328 16.0001 15.9996 15.0333 15.9996 13.845V6.74543C15.9996 5.55711 15.0328 4.59033 13.8445 4.59033ZM14.7496 13.845C14.7496 14.3441 14.3436 14.7501 13.8445 14.7501C13.3455 14.7501 12.9395 14.3441 12.9395 13.845V6.74543C12.9395 6.24633 13.3455 5.84033 13.8445 5.84033C14.3436 5.84033 14.7496 6.24633 14.7496 6.74543V13.845Z"
              fill="#6A7A99"
            />
          </g>
          <defs>
            <clipPath id="clip0_558_3966">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'lesson':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_558_5549)">
            <path
              d="M13.5562 3.32087L10.543 0.470187C10.2225 0.166969 9.80297 0 9.36178 0H3.625C2.67728 0 1.90625 0.771031 1.90625 1.71875V14.2812C1.90625 15.229 2.67728 16 3.625 16H12.375C13.3227 16 14.0938 15.229 14.0938 14.2812V4.56944C14.0938 4.09916 13.8978 3.64406 13.5562 3.32087ZM12.6457 3.75H10.3125C10.2263 3.75 10.1562 3.67991 10.1562 3.59375V1.39488L12.6457 3.75ZM12.375 15.0625H3.625C3.19422 15.0625 2.84375 14.712 2.84375 14.2812V1.71875C2.84375 1.28797 3.19422 0.9375 3.625 0.9375H9.21875V3.59375C9.21875 4.19684 9.70941 4.6875 10.3125 4.6875H13.1562V14.2812C13.1562 14.712 12.8058 15.0625 12.375 15.0625Z"
              fill="#6A7A99"
            />
            <path
              d="M11.3438 6.25H4.46875C4.20987 6.25 4 6.45987 4 6.71875C4 6.97763 4.20987 7.1875 4.46875 7.1875H11.3438C11.6026 7.1875 11.8125 6.97763 11.8125 6.71875C11.8125 6.45987 11.6026 6.25 11.3438 6.25Z"
              fill="#6A7A99"
            />
            <path
              d="M11.3438 8.75H4.46875C4.20987 8.75 4 8.95987 4 9.21875C4 9.47763 4.20987 9.6875 4.46875 9.6875H11.3438C11.6026 9.6875 11.8125 9.47763 11.8125 9.21875C11.8125 8.95987 11.6026 8.75 11.3438 8.75Z"
              fill="#6A7A99"
            />
            <path
              d="M6.74125 11.25H4.46875C4.20987 11.25 4 11.4599 4 11.7188C4 11.9776 4.20987 12.1875 4.46875 12.1875H6.74125C7.00012 12.1875 7.21 11.9776 7.21 11.7188C7.21 11.4599 7.00012 11.25 6.74125 11.25Z"
              fill="#6A7A99"
            />
          </g>
          <defs>
            <clipPath id="clip0_558_5549">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'tick-circule':
      result = (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9.5" stroke="#DDDDDD" />
          <path
            d="M12.8243 9.02505L9.659 12.1901C9.42461 12.4245 9.04439 12.4245 8.80978 12.1901L7.17586 10.556C6.94138 10.3216 6.94138 9.94133 7.17586 9.70685C7.41038 9.47233 7.79057 9.47233 8.02499 9.70677L9.23452 10.9163L11.975 8.17583C12.2095 7.9413 12.5897 7.94148 12.8242 8.17583C13.0586 8.41031 13.0586 8.79043 12.8243 9.02505Z"
            fill="#6A7A99"
          />
        </svg>
      );
      break;
    case 'certificate':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00001 0C4.52195 0 1.69232 2.82959 1.69232 6.30769C1.69232 8.47528 2.79145 10.3909 4.46154 11.5268V15.5384C4.46154 15.6951 4.54095 15.841 4.67248 15.926C4.80395 16.011 4.96963 16.0235 5.11248 15.9593L8.00001 14.66L10.8875 15.9593C10.948 15.9865 11.0125 16 11.0769 16C11.1645 16 11.2517 15.9751 11.3275 15.926C11.459 15.841 11.5385 15.6951 11.5385 15.5385V11.5268C13.2086 10.3909 14.3077 8.47531 14.3077 6.30772C14.3077 2.82959 11.4781 0 8.00001 0ZM10.6154 14.8247L8.18938 13.733C8.12917 13.7059 8.06457 13.6923 8.00001 13.6923C7.93545 13.6923 7.87085 13.7058 7.81063 13.733L5.38463 14.8247V12.0486C5.6166 12.1543 5.8547 12.2452 6.09729 12.3218C6.11104 12.3262 6.12476 12.3307 6.13857 12.3349C6.16954 12.3445 6.2006 12.3537 6.2317 12.3627C6.25473 12.3694 6.27776 12.3761 6.30085 12.3826C6.32595 12.3896 6.35113 12.3964 6.37632 12.4031C6.4057 12.4109 6.43513 12.4186 6.46467 12.426C6.48554 12.4312 6.50645 12.4364 6.52738 12.4413C6.56135 12.4495 6.59542 12.4574 6.6296 12.465C6.64732 12.4689 6.66507 12.4728 6.68282 12.4766C6.72026 12.4846 6.75782 12.4922 6.79554 12.4995C6.81088 12.5025 6.82623 12.5055 6.8416 12.5084C6.88154 12.5158 6.92163 12.5228 6.96182 12.5295C6.9756 12.5318 6.98938 12.5342 7.0032 12.5363C7.04467 12.543 7.08632 12.5491 7.1281 12.5548C7.14104 12.5566 7.15395 12.5586 7.16688 12.5603C7.20917 12.5659 7.25163 12.5709 7.29413 12.5757C7.30682 12.5771 7.31945 12.5787 7.33213 12.58C7.37454 12.5845 7.4171 12.5884 7.45976 12.592C7.4727 12.5931 7.48557 12.5944 7.49854 12.5954C7.54057 12.5987 7.58279 12.6014 7.62507 12.6039C7.63863 12.6047 7.65213 12.6058 7.66576 12.6065C7.70848 12.6087 7.75135 12.6103 7.79429 12.6117C7.80723 12.6121 7.82007 12.6128 7.83301 12.6131C7.88851 12.6146 7.9442 12.6154 8.00007 12.6154C8.05592 12.6154 8.1116 12.6146 8.1671 12.6131C8.18004 12.6128 8.19288 12.6121 8.20582 12.6117C8.24876 12.6103 8.29163 12.6087 8.33435 12.6065C8.34792 12.6058 8.36145 12.6047 8.37504 12.6039C8.41732 12.6014 8.45954 12.5988 8.50157 12.5954C8.51454 12.5944 8.52742 12.5931 8.54035 12.592C8.58301 12.5884 8.62557 12.5845 8.66798 12.58C8.68067 12.5787 8.69329 12.5771 8.70598 12.5757C8.74851 12.5709 8.79095 12.5659 8.83323 12.5603C8.8462 12.5586 8.85907 12.5567 8.87201 12.5548C8.91376 12.5491 8.95542 12.543 8.99692 12.5363C9.01073 12.5341 9.02448 12.5317 9.03829 12.5295C9.07848 12.5228 9.11857 12.5158 9.15851 12.5084C9.17388 12.5055 9.18923 12.5025 9.20457 12.4995C9.24226 12.4922 9.27982 12.4846 9.31729 12.4766C9.33507 12.4728 9.35279 12.4689 9.37051 12.465C9.4047 12.4574 9.43876 12.4495 9.47273 12.4413C9.49364 12.4363 9.51454 12.4312 9.53545 12.426C9.56498 12.4186 9.59438 12.411 9.62379 12.4031C9.64898 12.3964 9.67417 12.3897 9.69926 12.3826C9.72235 12.3761 9.74542 12.3694 9.76842 12.3627C9.79951 12.3536 9.8306 12.3445 9.86154 12.3349C9.87535 12.3307 9.88907 12.3262 9.90282 12.3218C10.1454 12.2452 10.3835 12.1543 10.6155 12.0486V14.8247H10.6154ZM9.75717 11.3976C9.73876 11.404 9.72035 11.4103 9.70188 11.4165C9.67382 11.4259 9.64563 11.4351 9.61735 11.444C9.58445 11.4543 9.55145 11.4643 9.51835 11.474C9.49501 11.4809 9.47163 11.4877 9.44817 11.4943C9.40438 11.5065 9.36045 11.5182 9.31635 11.5293C9.29992 11.5334 9.28342 11.5374 9.26695 11.5414C9.22379 11.5518 9.18045 11.5618 9.13701 11.5711C9.12607 11.5735 9.11523 11.576 9.10429 11.5782C9.04823 11.59 8.99198 11.6009 8.93551 11.6108C8.92976 11.6118 8.92398 11.6127 8.9182 11.6137C8.86732 11.6225 8.81629 11.6304 8.76517 11.6377C8.75363 11.6394 8.7421 11.641 8.73051 11.6426C8.67598 11.65 8.62135 11.6568 8.56654 11.6626C8.56448 11.6628 8.56242 11.6631 8.56035 11.6633C8.50298 11.6693 8.44538 11.6742 8.38773 11.6783C8.37523 11.6792 8.36267 11.6798 8.35013 11.6807C8.30529 11.6836 8.26045 11.6858 8.21548 11.6877C8.2002 11.6883 8.18492 11.6889 8.16963 11.6894C8.11317 11.6911 8.05663 11.6923 8.00001 11.6923C7.94338 11.6923 7.88685 11.6912 7.83038 11.6893C7.81507 11.6889 7.79979 11.6882 7.78454 11.6876C7.73957 11.6858 7.69473 11.6835 7.64988 11.6806C7.63735 11.6798 7.62482 11.6791 7.61229 11.6782C7.55463 11.6741 7.49707 11.6692 7.43967 11.6632C7.4376 11.663 7.43554 11.6627 7.43348 11.6625C7.37867 11.6568 7.32404 11.6499 7.26951 11.6425C7.25798 11.641 7.24645 11.6393 7.23488 11.6377C7.18373 11.6303 7.1327 11.6224 7.08182 11.6136C7.07607 11.6127 7.07029 11.6117 7.06451 11.6107C7.00804 11.6008 6.95176 11.5899 6.89573 11.5782C6.88482 11.5759 6.87395 11.5734 6.86301 11.5711C6.81957 11.5617 6.77623 11.5518 6.73307 11.5413C6.71657 11.5373 6.70007 11.5334 6.68367 11.5292C6.63957 11.5182 6.59563 11.5064 6.55185 11.4942C6.52838 11.4877 6.50501 11.4808 6.48167 11.4739C6.4486 11.4642 6.41557 11.4543 6.38263 11.4439C6.35435 11.435 6.3262 11.4258 6.2981 11.4164C6.2796 11.4103 6.2612 11.4039 6.24282 11.3976C4.13395 10.6675 2.61538 8.66172 2.61538 6.30769C2.61538 3.33862 5.03092 0.923063 8.00001 0.923063C10.9691 0.923063 13.3846 3.33859 13.3846 6.30769C13.3846 8.66172 11.866 10.6675 9.75717 11.3976Z"
            fill="#140342"
          />
          <path
            d="M10.7382 6.30768L11.6051 4.6783C11.6799 4.53777 11.6769 4.36862 11.5973 4.23077C11.5177 4.09293 11.3727 4.00577 11.2136 4.00027L9.36909 3.93637L8.39147 2.37093C8.30713 2.23593 8.15919 2.15387 8 2.15387C7.84082 2.15387 7.69288 2.23593 7.60854 2.37093L6.63094 3.93637L4.78642 4.00027C4.62732 4.00577 4.48229 4.09293 4.4027 4.23077C4.3231 4.36862 4.32014 4.53777 4.39495 4.6783L5.26185 6.30768L4.39495 7.93705C4.32014 8.07758 4.3231 8.24674 4.4027 8.38458C4.48229 8.52243 4.62732 8.60958 4.78642 8.61508L6.63094 8.67899L7.60854 10.2444C7.69285 10.3794 7.84082 10.4615 8 10.4615C8.15919 10.4615 8.30713 10.3794 8.39147 10.2444L9.36906 8.67899L11.2136 8.61508C11.3727 8.60958 11.5177 8.52243 11.5973 8.38458C11.6769 8.24674 11.6799 8.07758 11.6051 7.93705L10.7382 6.30768ZM9.09172 7.76496C8.93831 7.77027 8.79753 7.85155 8.71625 7.98177L8 9.12868L7.28379 7.9818C7.20247 7.85158 7.06172 7.77033 6.90832 7.76499L5.55701 7.71815L6.1921 6.52446C6.26423 6.38893 6.26423 6.22643 6.1921 6.0909L5.55701 4.89721L6.90832 4.85037C7.06172 4.84505 7.2025 4.76377 7.28379 4.63355L8 3.48671L8.71622 4.63359C8.79753 4.7638 8.93828 4.84505 9.09169 4.8504L10.443 4.89724L9.80791 6.09093C9.73581 6.22646 9.73581 6.38899 9.80794 6.52449L10.443 7.71818L9.09172 7.76496Z"
            fill="#140342"
          />
        </svg>
      );
      break;
    case 'access':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_224_13924)">
            <path
              d="M10.3147 6.52305L9.16816 7.66674C8.98472 7.84974 8.98453 8.14683 9.16775 8.33005L10.2927 9.45499C11.1044 10.2667 12.4268 10.2976 13.2489 9.49649C14.0844 8.68249 14.0909 7.3453 13.2687 6.52305C12.4529 5.70732 11.1304 5.70732 10.3147 6.52305ZM12.6057 8.81409C12.1561 9.26368 11.4272 9.26368 10.9776 8.81409L10.1635 8.00002L10.9776 7.18595C11.4272 6.73636 12.1561 6.73636 12.6057 7.18595C13.0553 7.63555 13.0553 8.36449 12.6057 8.81409Z"
              fill="#140342"
            />
            <path
              d="M14.7674 5.02423C13.1239 3.38076 10.4594 3.38076 8.81591 5.02423L8.00001 5.84014L7.1841 5.02423C5.54063 3.38076 2.87607 3.38076 1.2326 5.02423C-0.410867 6.6677 -0.410867 9.33227 1.2326 10.9757C2.87607 12.6192 5.54063 12.6192 7.1841 10.9757L8.00001 10.1598L8.81591 10.9757C10.4594 12.6192 13.1239 12.6192 14.7674 10.9757C16.4109 9.33227 16.4109 6.6677 14.7674 5.02423ZM14.1218 10.2954C12.8428 11.5934 10.7399 11.574 9.45141 10.2854L8.33144 9.16549C8.14838 8.98242 7.8516 8.98242 7.66854 9.16549L6.54857 10.2854C5.26001 11.574 3.15723 11.5934 1.8782 10.2954C0.623914 9.02255 0.623914 6.97745 1.8782 5.70457C3.15723 4.40657 5.26004 4.42598 6.54857 5.71454L7.66854 6.83448C7.8516 7.01755 8.14838 7.01755 8.33144 6.83448L9.45141 5.71454C10.74 4.42598 12.8428 4.40657 14.1218 5.70457C15.3761 6.97745 15.3761 9.02252 14.1218 10.2954Z"
              fill="#140342"
            />
            <path
              d="M5.68533 6.52304C4.84649 5.6842 3.47168 5.70798 2.66324 6.59441C1.9414 7.38588 1.9414 8.61416 2.66324 9.40566C3.47168 10.2921 4.84649 10.3159 5.68533 9.47704L6.83086 8.33151C7.01393 8.14845 7.01393 7.85167 6.83086 7.6686L5.68533 6.52304ZM5.02243 8.81407C4.57283 9.26366 3.8439 9.26366 3.3943 8.81407C2.94471 8.36448 2.94471 7.63554 3.3943 7.18595C3.8439 6.73635 4.57283 6.73635 5.02243 7.18595L5.83649 8.00001L5.02243 8.81407Z"
              fill="#140342"
            />
          </g>
          <defs>
            <clipPath id="clip0_224_13924">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'video':
      result = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3958 3.55103L10.9296 0.134888C10.8418 0.0484619 10.7236 0 10.6005 0H2.84375C2.06836 0 1.4375 0.630859 1.4375 1.40625V14.5938C1.4375 15.3691 2.06836 16 2.84375 16H13.1293C13.9047 16 14.5355 15.3691 14.5355 14.5938V3.88489C14.5354 3.7594 14.4851 3.63916 14.3958 3.55103ZM11.0692 1.58887L12.9233 3.41614H11.0692V1.58887ZM2.84375 0.9375H10.1317V3.88489C10.1317 4.1438 10.3417 4.35364 10.6005 4.35364H13.598V12.1473H2.375V1.40625C2.375 1.14783 2.58533 0.9375 2.84375 0.9375ZM13.1292 15.0625H2.84375C2.58533 15.0625 2.375 14.8522 2.375 14.5938V13.0848H13.598V14.5938C13.5979 14.8522 13.3877 15.0625 13.1292 15.0625Z"
            fill="#140342"
          />
          <path
            d="M5.76904 10.7781C5.87402 10.8315 5.98926 10.8578 6.10388 10.8578C6.24634 10.8578 6.38794 10.8171 6.50806 10.7374L10.2584 8.55004C10.2721 8.5421 10.2853 8.53344 10.2981 8.52416C10.4711 8.3983 10.5703 8.20714 10.5702 7.99987C10.5702 7.79271 10.4709 7.60167 10.298 7.47582C10.2853 7.46654 10.272 7.45787 10.2584 7.44994L6.50806 5.26256C6.29126 5.11864 6.00452 5.10204 5.76892 5.22191C5.54297 5.33702 5.40271 5.55993 5.40271 5.80382V10.1962C5.40271 10.4401 5.54309 10.6631 5.76904 10.7781ZM6.34021 6.24999L9.3407 7.99999L6.34021 9.75011V6.24999Z"
            fill="#140342"
          />
        </svg>
      );
      break;
    case 'circule':
      result = (
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3.5" cy="3.5" r="3.5" fill="#6A7A99" />
        </svg>
      );
      break;
    case 'fb-blue':
      result = (
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.10547 14.4404V8.17871H0V5.69043H2.10547V3.72168C2.10547 2.68262 2.39714 1.88053 2.98047 1.31543C3.5638 0.732096 4.33854 0.44043 5.30469 0.44043C6.08854 0.44043 6.72656 0.476888 7.21875 0.549805V2.76465H5.90625C5.41406 2.76465 5.07682 2.87402 4.89453 3.09277C4.7487 3.27507 4.67578 3.56673 4.67578 3.96777V5.69043H7L6.67188 8.17871H4.67578V14.4404H2.10547Z"
            fill="#1967D2"
          />
        </svg>
      );
      break;
    case 'google':
      result = (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3438 7.60449C13.3438 8.88053 13.0703 10.0199 12.5234 11.0225C11.9766 12.0251 11.2018 12.8089 10.1992 13.374C9.21484 13.9391 8.07552 14.2217 6.78125 14.2217C5.5599 14.2217 4.42969 13.9118 3.39062 13.292C2.35156 12.6904 1.52214 11.8701 0.902344 10.8311C0.300781 9.79199 0 8.66178 0 7.44043C0 6.21908 0.300781 5.08887 0.902344 4.0498C1.52214 3.01074 2.35156 2.19043 3.39062 1.58887C4.42969 0.969076 5.5599 0.65918 6.78125 0.65918C8.54948 0.65918 10.0625 1.25163 11.3203 2.43652L9.48828 4.21387C8.90495 3.64876 8.20312 3.31152 7.38281 3.20215C6.61719 3.09277 5.86068 3.20215 5.11328 3.53027C4.36589 3.8584 3.76432 4.35059 3.30859 5.00684C2.81641 5.71777 2.57031 6.52897 2.57031 7.44043C2.57031 8.22428 2.76172 8.94434 3.14453 9.60059C3.52734 10.2386 4.03776 10.7581 4.67578 11.1592C5.3138 11.542 6.01562 11.7334 6.78125 11.7334C7.60156 11.7334 8.32161 11.5511 8.94141 11.1865C9.43359 10.8949 9.84375 10.5029 10.1719 10.0107C10.4089 9.6097 10.5638 9.20866 10.6367 8.80762H6.78125V6.45605H13.2344C13.3073 6.8571 13.3438 7.23991 13.3438 7.60449Z"
            fill="#D93025"
          />
        </svg>
      );
      break;
    default:
      result = <span></span>;
  }

  return result;
}
