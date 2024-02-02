'use client'
import React from 'react'
const btn=()=>{
    alert("this is my api")
}
export default function Button() {
  return (
    <div>
      <button className='mx-80 mt-10 text-2xl' onClick={btn}>click me</button>
    </div>
  )
}
