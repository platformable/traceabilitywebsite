import React from 'react'

export default function Hero() {
 
  return (
    <section className='pt-10 container mx-auto text-center text-[#3423C5] px-5 md:px-0'>
      <h1 className='font-bold md:text-lg mb-4'>Open Digital Ecosystems</h1>
      <h2 className='font-bold text-2xl md:text-4xl mb-20'>How Value is generated and distributed amongst stakeholders in a sustainability/traceability data ecosystem</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mb-12'>
        <div className='grid grid-rows-[1fr_4fr] font-medium'>
          <div className='h-1 rounded bg-[#3423C5]'></div>
          Oversight/compliance
        </div>

        <div className='grid grid-rows-[1fr_4fr] font-medium'>
          <div className='h-1 rounded bg-[#FF7F12]'></div>
          Contributing value
        </div>

        <div className='grid grid-rows-[1fr_4fr] font-medium'>
          <div className='h-1 rounded bg-[#2C8AF5]'></div>
          Mediating value
        </div>

        <div className='grid grid-rows-[1fr_4fr] font-medium'>
          <div className='h-1 rounded bg-[#FFC305]'></div>
      Receiving value <br/> (information)
        </div>


        <div className='grid grid-rows-[1fr_4fr] font-medium'>
          <div className='h-1 rounded bg-[#2CD578]'></div>
      Receiving value <br/> (revenue generation)
        </div>


        <div className='grid grid-rows-[1fr_4fr] font-medium'>
          <div className='h-1 rounded bg-[#F157FF]'></div>
          Receiving value <br/>(indirect impact)
        </div>
      </div>
    </section>
  )
}
