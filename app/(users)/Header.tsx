import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-blue-400 p-5'>
        <header className='font-bold text-white'>This is Header</header>
        <Link href='/' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Home</Link>
    </div>
  )
}

export default Header