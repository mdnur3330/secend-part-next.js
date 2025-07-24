import React from 'react'

export default function layout({children}) {
  return (
    <div>
      <h1>{children}</h1>
      this is serveses layout
       </div>
  )
}

export function metadata(){
  return {
    title: "layout nur",
    description: "nur des"
  }
}

