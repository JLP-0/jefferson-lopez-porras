import React from "react";
import logo from '../../assets/logo192.png';

export const Loading = () => {
  return (
    <div>
      <img src={logo}/>
      {/* comentario */}
      <svg id="preloader" width="240px" height="120px" viewBox="0 0 240 120">
        <path
          id="loop-normal"
          className="st1"
          d="M120.5,60.5L146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5
L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0z"
        >
          <animate
            attributeName="stroke-dasharray"
            from="500, 50"
            to="450 50"
            begin="0s"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            from="-40"
            to="-540"
            begin="0s"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        <path
          id="loop-offset"
          d="M146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0L120.5,60.5L146.48,87.02z"
        ></path>
      </svg>

      <div className="credit">
        <a
          href="https://thenounproject.com/search/?q=energy&i=2064"
          target="_blank"
        >
          Pagina en desarrollo
        </a>
      </div>
    </div>
  );
};
