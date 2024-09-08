import React from 'react'

const Containers = ({children}) => {
  return (
    <div
    className="
      max-w-lg  mx-auto
      bg-black
      pb-16
    "
  >
<div className="bg-[#323539] min-h-screen overflow-auto flex justify-center">
    {children}
    </div>
  </div>
  )
}

export default Containers