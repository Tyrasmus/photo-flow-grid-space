
import React from 'react';

interface RocketIconProps {
  isHovered: boolean;
}

const RocketIcon = ({ isHovered }: RocketIconProps) => {
  return (
    <div className={`w-7 h-7 transition-all duration-300 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}>
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rocketGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E60FEF" />
            <stop offset="33%" stopColor="#9D29B0" />
            <stop offset="67%" stopColor="#494CD8" />
            <stop offset="100%" stopColor="#3EC5FD" />
          </linearGradient>
          <filter id="filter0_d_4739_51537" x="6.58838" y="3.61719" width="26.5522" height="26.5435" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.75"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4739_51537"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4739_51537" result="shape"/>
          </filter>
          <filter id="filter1_d_4739_51537" x="9.52148" y="4.36719" width="22.1191" height="22.1099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.75"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.270588 0 0 0 0 0.101961 0 0 0 0 0.615686 0 0 0 0.7 0"/>
            <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_4739_51537"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4739_51537" result="shape"/>
          </filter>
          <filter id="filter2_i_4739_51537" x="18.1797" y="12.0732" width="5.7666" height="5.76611" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4739_51537"/>
          </filter>
          <linearGradient id="paint0_linear_4739_51537" x1="24.4634" y1="14.9496" x2="10.5377" y2="30.0576" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D743DD"/>
            <stop offset="1" stopColor="#9D29B0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_4739_51537" x1="14.947" y1="21.0628" x2="29.3461" y2="9.24625" gradientUnits="userSpaceOnUse">
            <stop stopColor="#494CD8"/>
            <stop offset="1" stopColor="#3EC5FD"/>
          </linearGradient>
        </defs>
        
        <g filter="url(#filter0_d_4739_51537)">
          <mask id="mask0_4739_51537" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="6" y="5" width="25" height="25">
            <path d="M11.2126 24.1248C11.5879 24.5001 11.5879 25.1086 11.2126 25.4839L8.49435 28.2022C8.11903 28.5775 7.51052 28.5775 7.13521 28.2022C6.75989 27.8269 6.75989 27.2184 7.13521 26.843L9.85349 24.1248C10.2288 23.7494 10.8373 23.7494 11.2126 24.1248Z" fill={isHovered ? "url(#rocketGradient)" : "#833DC5"}/>
            <path d="M8.81688 21.729C9.19219 22.1043 9.19219 22.7128 8.81688 23.0882L7.79752 24.1075C7.4222 24.4828 6.8137 24.4828 6.43838 24.1075C6.06306 23.7322 6.06306 23.1237 6.43838 22.7484L7.45774 21.729C7.83305 21.3537 8.44156 21.3537 8.81688 21.729Z" fill={isHovered ? "url(#rocketGradient)" : "#833DC5"}/>
            <path d="M13.5739 26.486C13.9492 26.8613 13.9492 27.4698 13.5739 27.8451L12.5545 28.8645C12.1792 29.2398 11.5707 29.2398 11.1954 28.8645C10.8201 28.4892 10.8201 27.8807 11.1954 27.5054L12.2147 26.486C12.59 26.1107 13.1986 26.1107 13.5739 26.486Z" fill={isHovered ? "url(#rocketGradient)" : "#833DC5"}/>
            <path d="M28.5417 7.47528C29.2334 8.16697 29.6926 9.44732 29.9957 10.7543C30.6037 13.3755 29.48 16.0164 27.5774 17.919L26.4857 19.0107C27.987 20.512 27.987 22.946 26.4857 24.4473L24.7868 26.1462C24.4115 26.5215 23.803 26.5215 23.4277 26.1462L21.3889 24.1075L21.0492 24.4473C20.2985 25.1979 19.0815 25.1979 18.3309 24.4473L16.9717 23.0882L16.2092 24.6139C15.9158 25.2006 15.1334 25.3272 14.6695 24.8634L10.4395 20.6333C9.97564 20.1695 10.1023 19.387 10.689 19.0937L12.2147 18.3312L11.5524 17.6688C10.8018 16.9182 10.8018 15.7012 11.5524 14.9506L11.8922 14.6108L9.85349 12.5721C9.47817 12.1967 9.47817 11.5882 9.85349 11.2129L11.5524 9.51399C13.0537 8.01272 15.4877 8.01273 16.989 9.51399L18.0694 8.43358C19.9789 6.52429 22.6314 5.40125 25.2606 6.01659C26.5695 6.32294 27.8507 6.78427 28.5417 7.47528Z" fill={isHovered ? "url(#rocketGradient)" : "#833DC5"}/>
          </mask>
          <g mask="url(#mask0_4739_51537)">
            <path d="M16.2335 24.5647C15.9283 25.1751 15.1148 25.3075 14.6321 24.825L10.4779 20.6708C9.99534 20.1881 10.1278 19.3747 10.7382 19.0694L12.2153 18.3313L16.9717 23.0877L16.2335 24.5647ZM26.4838 19.0101C27.9848 20.5113 27.9843 22.9454 26.4831 24.4466L24.812 26.1177C24.4215 26.5083 23.7883 26.5083 23.3978 26.1177L21.3869 24.1069L26.4838 19.0101ZM11.8921 14.6107L9.88127 12.5998C9.49076 12.2093 9.4908 11.5762 9.88127 11.1856L11.5531 9.51384C13.0543 8.01297 15.4878 8.01283 16.9889 9.51384L11.8921 14.6107Z" fill="url(#paint0_linear_4739_51537)"/>
            <g filter="url(#filter1_d_4739_51537)">
              <path d="M28.5413 7.47486C29.2035 8.13715 29.6531 9.33889 29.9562 10.5871C30.6168 13.3077 29.436 16.0596 27.4564 18.0393L21.1042 24.3916C20.3232 25.1726 19.0569 25.1724 18.2758 24.3916L11.6073 17.7231C10.8263 16.942 10.8263 15.6757 11.6073 14.8946L17.9471 8.55486C19.9339 6.56806 22.6979 5.3869 25.427 6.05512C26.6769 6.36122 27.8797 6.81326 28.5413 7.47486Z" fill="url(#paint1_linear_4739_51537)"/>
            </g>
            <g filter="url(#filter2_i_4739_51537)">
              <rect x="21.063" y="10.8789" width="5.76635" height="5.76635" rx="2.88317" transform="rotate(45 21.063 10.8789)" fill="#4858DB" style={{mixBlendMode:"multiply"}}/>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RocketIcon;
