import React from 'react'

const HeaderWave = ({menu}) => {
  return (
    
    <div class={menu ? 'header' : 'header active'}>

    <div className="inner-header flex">
    </div>      
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXLink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(33,44,147,0.5)" />
    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(33,44,147,0.3)" />
    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(33,44,147,1)" />
    </g>
    </svg>
    </div>
    
    
  )
}

export default HeaderWave