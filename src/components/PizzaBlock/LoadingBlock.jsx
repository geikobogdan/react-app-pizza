import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingBlock() {
  return (
    <ContentLoader 
    className = "pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="131" cy="117" r="115" /> 
    <rect x="-1" y="254" rx="0" ry="0" width="280" height="26" /> 
    <rect x="-1" y="291" rx="3" ry="3" width="280" height="84" /> 
    <rect x="-1" y="388" rx="3" ry="3" width="83" height="31" /> 
    <rect x="146" y="389" rx="20" ry="20" width="131" height="40" />
  </ContentLoader>
  );
}

export default LoadingBlock






