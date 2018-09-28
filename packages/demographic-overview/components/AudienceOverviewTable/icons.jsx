import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  width: 66px;
  height: 66px;
  background: linear-gradient(360deg, #33B6FF 0%, rgba(77, 191, 255, 0.75) 100%);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const PeopleIcon = () => (<IconContainer><svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M11.4902 9.03833C12.7637 8.14136 13.5957 6.65088 13.5957 4.96362C13.5957 2.22241 11.3984 0 8.68555 0C5.97461 0 3.77734 2.22241 3.77734 4.96362C3.77734 6.53589 4.5 7.93726 5.62695 8.84668C2.35352 9.97388 0 13.1089 0 16.7998H8.30859H16.6152C16.6152 13.3005 14.498 10.301 11.4902 9.03833Z" fill="white" />
  <path fillRule="evenodd" clipRule="evenodd" d="M30.875 9.03833C32.1484 8.14136 32.9805 6.65088 32.9805 4.96362C32.9805 2.22241 30.7832 0 28.0703 0C25.3594 0 23.1621 2.22241 23.1621 4.96362C23.1621 6.53589 23.8848 7.93726 25.0117 8.84668C21.7383 9.97388 19.3848 13.1089 19.3848 16.7998H27.6934H36C36 13.3005 33.8828 10.301 30.875 9.03833Z" fill="white" />
  <path fillRule="evenodd" clipRule="evenodd" d="M21.4277 18.5132C22.9824 17.417 24 15.5952 24 13.5332C24 10.1826 21.3145 7.46655 18 7.46655C14.6855 7.46655 12 10.1826 12 13.5332C12 15.4551 12.8828 17.1682 14.2617 18.2798C10.2617 19.658 7.38477 23.489 7.38477 28H17.5391H27.6934C27.6934 23.7227 25.1055 20.0564 21.4277 18.5132Z" fill="white" />
  <path d="M21.4277 18.5132L20.8515 17.6959L19.3756 18.7366L21.0408 19.4353L21.4277 18.5132ZM14.2617 18.2798L14.5875 19.2252L16.2972 18.6362L14.8893 17.5012L14.2617 18.2798ZM7.38477 28H6.38477V29H7.38477V28ZM27.6934 28V29H28.6934V28H27.6934ZM23 13.5332C23 15.2592 22.1495 16.7807 20.8515 17.6959L22.004 19.3305C23.8154 18.0533 25 15.9312 25 13.5332H23ZM18 8.46655C20.7517 8.46655 23 10.7244 23 13.5332H25C25 9.64085 21.8772 6.46655 18 6.46655V8.46655ZM13 13.5332C13 10.7244 15.2483 8.46655 18 8.46655V6.46655C14.1228 6.46655 11 9.64085 11 13.5332H13ZM14.8893 17.5012C13.738 16.5731 13 15.1425 13 13.5332H11C11 15.7676 12.0277 17.7633 13.6341 19.0583L14.8893 17.5012ZM8.38477 28C8.38477 23.9229 10.9841 20.4668 14.5875 19.2252L13.936 17.3343C9.53932 18.8492 6.38477 23.0551 6.38477 28H8.38477ZM17.5391 27H7.38477V29H17.5391V27ZM27.6934 27H17.5391V29H27.6934V27ZM21.0408 19.4353C24.3556 20.8262 26.6934 24.1345 26.6934 28H28.6934C28.6934 23.3108 25.8554 19.2866 21.8147 17.5911L21.0408 19.4353Z" fill="url(#paint0_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="17.5391" y1="7.46655" x2="17.5391" y2="28" gradientUnits="userSpaceOnUse">
      <stop stopColor="#5EC5FF" />
      <stop offset="1" stopColor="#48BDFF" />
    </linearGradient>
  </defs>
</svg></IconContainer>);

export const LocationIcon = () => (<IconContainer><svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="33" cy="33" r="33" fill="url(#paint0_linear)" />
  <ellipse cx="11" cy="24.6353" rx="10" ry="5.365" fill="white" />
  <mask id="path-2-outside-1" maskUnits="userSpaceOnUse" x="0.595703" y="0" width="21" height="26" fill="black">
    <rect fill="white" x="0.595703" width="21" height="26" />
    <path fillRule="evenodd" clipRule="evenodd" d="M19.3965 10.5134C19.3965 12.8184 18.4922 14.9097 17.0234 16.4426L16.9688 16.5417L16.9258 16.6094L12.6621 23.0039C11.8711 24.1914 10.125 24.1914 9.33398 23.0039L5.07031 16.6094C5.03516 16.5574 5.00586 16.5049 4.97656 16.4517C3.50391 14.918 2.5957 12.823 2.5957 10.5134C2.5957 5.81152 6.35742 2 10.9961 2C15.6348 2 19.3965 5.81152 19.3965 10.5134ZM11 13.3516C12.5449 13.3516 13.7988 12.0808 13.7988 10.5137C13.7988 8.94629 12.5449 7.67578 11 7.67578C9.45312 7.67578 8.19922 8.94629 8.19922 10.5137C8.19922 12.0808 9.45312 13.3516 11 13.3516Z" />
  </mask>
  <path fillRule="evenodd" clipRule="evenodd" d="M19.3965 10.5134C19.3965 12.8184 18.4922 14.9097 17.0234 16.4426L16.9688 16.5417L16.9258 16.6094L12.6621 23.0039C11.8711 24.1914 10.125 24.1914 9.33398 23.0039L5.07031 16.6094C5.03516 16.5574 5.00586 16.5049 4.97656 16.4517C3.50391 14.918 2.5957 12.823 2.5957 10.5134C2.5957 5.81152 6.35742 2 10.9961 2C15.6348 2 19.3965 5.81152 19.3965 10.5134ZM11 13.3516C12.5449 13.3516 13.7988 12.0808 13.7988 10.5137C13.7988 8.94629 12.5449 7.67578 11 7.67578C9.45312 7.67578 8.19922 8.94629 8.19922 10.5137C8.19922 12.0808 9.45312 13.3516 11 13.3516Z" fill="white" />
  <path d="M17.0234 16.4426L15.5793 15.059L15.3985 15.2477L15.2723 15.4765L17.0234 16.4426ZM16.9688 16.5417L18.6568 17.6143L18.69 17.5621L18.7199 17.5079L16.9688 16.5417ZM16.9258 16.6094L18.5898 17.7189L18.602 17.7006L18.6139 17.6819L16.9258 16.6094ZM12.6621 23.0039L10.9981 21.8944L10.9976 21.8951L12.6621 23.0039ZM9.33398 23.0039L10.9985 21.8951L10.998 21.8944L9.33398 23.0039ZM5.07031 16.6094L6.73437 15.4998L6.7272 15.4892L5.07031 16.6094ZM4.97656 16.4517L6.72865 15.4872L6.60163 15.2564L6.41919 15.0664L4.97656 16.4517ZM18.4676 17.8263C20.2812 15.9334 21.3965 13.3508 21.3965 10.5134H17.3965C17.3965 12.2859 16.7032 13.886 15.5793 15.059L18.4676 17.8263ZM18.7199 17.5079L18.7746 17.4088L15.2723 15.4765L15.2176 15.5756L18.7199 17.5079ZM18.6139 17.6819L18.6568 17.6143L15.2807 15.4692L15.2377 15.5368L18.6139 17.6819ZM14.3261 24.1134L18.5898 17.7189L15.2618 15.4999L10.9981 21.8944L14.3261 24.1134ZM7.66946 24.1127C9.25203 26.4885 12.7441 26.4885 14.3266 24.1127L10.9976 21.8951H10.9985L7.66946 24.1127ZM3.40629 17.7189L7.66996 24.1134L10.998 21.8944L6.73433 15.4999L3.40629 17.7189ZM3.22447 17.4161C3.25312 17.4682 3.32147 17.5935 3.41343 17.7295L6.7272 15.4892C6.73998 15.5081 6.74714 15.5204 6.74727 15.5206C6.74732 15.5207 6.74606 15.5186 6.74287 15.5129C6.7395 15.5069 6.73531 15.4993 6.72865 15.4872L3.22447 17.4161ZM0.595703 10.5134C0.595703 13.3567 1.71579 15.9434 3.53393 17.8369L6.41919 15.0664C5.29202 13.8926 4.5957 12.2893 4.5957 10.5134H0.595703ZM10.9961 0C5.22786 0 0.595703 4.73212 0.595703 10.5134H4.5957C4.5957 6.89093 7.48699 4 10.9961 4V0ZM21.3965 10.5134C21.3965 4.73212 16.7643 0 10.9961 0V4C14.5052 4 17.3965 6.89093 17.3965 10.5134H21.3965ZM11.7988 10.5137C11.7988 11.0022 11.4146 11.3516 11 11.3516V15.3516C13.6752 15.3516 15.7988 13.1595 15.7988 10.5137H11.7988ZM11 9.67578C11.4147 9.67578 11.7988 10.025 11.7988 10.5137H15.7988C15.7988 7.86753 13.6751 5.67578 11 5.67578V9.67578ZM10.1992 10.5137C10.1992 10.026 10.5824 9.67578 11 9.67578V5.67578C8.32382 5.67578 6.19922 7.86661 6.19922 10.5137H10.1992ZM11 11.3516C10.5825 11.3516 10.1992 11.0012 10.1992 10.5137H6.19922C6.19922 13.1604 8.32371 15.3516 11 15.3516V11.3516Z" fill="url(#paint0_linear)" mask="url(#path-2-outside-1)" />
  <defs>
    <linearGradient id="paint0_linear" x1="10.9961" y1="2" x2="10.9961" y2="23.8945" gradientUnits="userSpaceOnUse">
      <stop stopColor="#67C9FF" />
      <stop offset="1" stopColor="#4EC0FF" />
    </linearGradient>
  </defs>
</svg></IconContainer>);
