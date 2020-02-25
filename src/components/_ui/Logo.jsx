import React from "react"

export default () => (
  <svg width="46px" height="66px" viewBox="0 0 138 198" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-70, -250)">
        <g transform="translate(70, 250)">
          <path id="motion" d="M0.0148509207,4.00764643 C0.0148509207,1.79967955 1.79677648,0.0097687413 4.01272861,0.0097687413 L4.61697323,0.0097687413 C6.82494011,0.0097687413 8.61485092,1.7916943 8.61485092,4.00764643 L8.61485092,4.61189105 C8.61485092,6.81985793 6.83292536,8.60976874 4.61697323,8.60976874 L4.01272861,8.60976874 C1.80476173,8.60976874 0.0148509207,6.82784318 0.0148509207,4.61189105 L0.0148509207,4.00764643 Z"></path>

          <rect fillOpacity="0.53" fill="yellow" transform="translate(48, 100.5) rotate(-18) translate(-48, -100.5) " x="23" y="16" rx="8" ry="8" width="50" height="169">
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath xlinkHref="#motion" />
            </animateMotion>
          </rect>

          <circle fillOpacity="0.53" fill="#f46b3f" transform="translate(88, 100.5) rotate(-18) translate(-88, -100.5) " cx="88.5" cy="100.5" r="34.5">
            <animateMotion dur="7s" repeatCount="indefinite">
              <mpath xlinkHref="#motion" />
            </animateMotion>
          </circle>

          <path fillOpacity="0.53" fill="#5393fe" transform="translate(88.5, 25) rotate(-18) translate(-88.5, -25)" d="M84.5087082,1.94137711 C86.7130378,-1.89223961 90.2822214,-1.90048452 92.4912918,1.94137711 L119.008708,48.0586229 C121.213038,51.8922396 119.411519,55 115.000529,55 L61.9994708,55 C57.5814851,55 55.7822214,51.9004845 57.9912918,48.0586229 L84.5087082,1.94137711 Z">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath xlinkHref="#motion" />
            </animateMotion>
          </path>
        </g>
      </g>
    </g>
  </svg>
)
