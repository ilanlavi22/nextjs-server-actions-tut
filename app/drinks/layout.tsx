import React from 'react'
export default function DrinksLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='mockup-code mb-16 bg-base-content'>
        <pre data-prefix='>'>
          <code>Do you like our selected drinks?</code>
        </pre>
      </div>
      {children}
    </>
  )
}
