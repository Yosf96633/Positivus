import React from 'react'
import { SiAmazon, SiDribbble , SiHubspot , SiNotion , SiNetflix , SiZoom } from "react-icons/si";
const Logos = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 max-sm:grid-cols-3 text-6xl my-16 gap-6 space-y-6">
    <div className="flex justify-center items-center mt-6">
      <SiAmazon />
    </div>
    <div className="flex justify-center items-center">
      <SiDribbble />
    </div>
    <div className="flex justify-center items-center">
      <SiHubspot />
    </div>
    <div className="flex justify-center items-center">
      <SiNotion />
    </div>
    <div className="flex justify-center items-center">
      <SiNetflix />
    </div>
    <div className="flex justify-center items-center">
      <SiZoom />
    </div>
  </div>
  
  )
}
 
export default Logos