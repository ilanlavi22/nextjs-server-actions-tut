import React from 'react'
import Link from 'next/link'
import { FiFolder } from 'react-icons/fi'

export default function DrinkLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Link className='mb-8 flex items-center space-x-1 text-sm' href='/drinks'>
        <FiFolder />
        <span>Back to our beverages</span>
      </Link>
      {children}
    </>
  )
}
