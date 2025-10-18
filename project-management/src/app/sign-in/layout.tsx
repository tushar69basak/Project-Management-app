import React from 'react'
interface SingInLayoutProps{
    children: React.ReactNode;
}

export default function SingInLayout({children}: SingInLayoutProps) {
  return (
    <div className='flex flex-col'>
    <nav className='bg-red-500 h-10'>
    <p>this is navbar</p>
    </nav>
    {children}
    </div>
  )
}
