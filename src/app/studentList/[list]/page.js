"use client"

export default function page({params}) {
    console.log(params)
  return (
    <div className="flex justify-center text-6xl text-white my-60">
      <h1>student data list</h1>
      <h3>student Name: <span className="text-black">{params.list}</span></h3>
    </div>
  )
}
