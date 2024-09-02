import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-[#3423C5]'>
      <section className='container mx-auto flex items-center justify-between py-3'>
        <img src="/traceability-logo.svg" alt="Traceability app logo" className='w-[150px] md:w-[300px]'/>
        <Link href={'#'}>
          <button className='text-xl font-medium text-white'>
          What is an Open Ecosystem?
          </button>
        </Link>
        
      </section>
    </header>
  )
}
