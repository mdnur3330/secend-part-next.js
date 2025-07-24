"use client" 
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
    const router = useRouter()
  return (
    <div>
        <button type='button' onClick={()=>router.push("/")}>go to home</button>
    </div>
  )
}
