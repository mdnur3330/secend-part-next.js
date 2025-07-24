import { NextResponse } from 'next/server'
import React from 'react'

export default function middleware(request) {
  return NextResponse.redirect(new URL("/signup",request.url))
}


export const config = {
    matcher : "/login/:path*"
}