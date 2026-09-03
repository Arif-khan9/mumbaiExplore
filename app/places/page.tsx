import React from 'react'


export const revalidate = 60; 

async function page () {
  const res = await fetch("https://nominatim.openstreetmap.org/search?q=Gateway+of+India,+Mumbai&format=jsonv2")
  const data = await res.json()
  console.log("data",data)
  


  return (
    <div>
      hii place
    </div>
  )
}

export default page
