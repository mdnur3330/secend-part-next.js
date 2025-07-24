
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <ul><li><Link href="/">home</Link></li>
      <li><Link href="/servises">serveses</Link></li>
       <li><Link href="/meta">meta</Link></li>
     <li><Link href="/routeFinal">routeFinal</Link></li></ul>
    </div>
  )
}
