import { logo } from '@/public'
import Image from 'next/image'
import React from 'react'

const CardComponent = ({
  header,
  title,
  view,
  description1,
  description2,
}: any) => {
  return (
    <div className='sm:w-auto md:w-full md:px-5 pt-5 pb-6 rounded-2xl border border-zinc-700 flex flex-col justify-start items-center gap-6 hover:bg-gray-800 flex-shrink-0 hover:cursor-pointer '>
      <div className='w-full h-full flex flex-col justify-start items-start gap-4 p-2 md:p-0'>
        <div className='w-full h-full flex flex-col justify-start items-start gap-1'>
          <div className='w-full h-7 flex justify-start items-center gap-2'>
            <div className="w-full text-neutral-100 text-lg font-semibold font-['Poppins'] leading-7">
              {title}
            </div>
            {view === 'med' && (
              <div className='pl-2 pr-2.5 py-0.5 bg-emerald-950 rounded-full border border-emerald-800 flex justify-start items-center gap-1.5'>
                <div className='w-2 h-2 relative'>
                  <div className='w-1.5 h-1.5 left-[1px] top-[1px] absolute bg-green-500 rounded-full' />
                </div>
                <div className="text-center text-emerald-300 text-sm font-medium font-['Inter'] leading-tight">
                  Med
                </div>
              </div>
            )}
            {view === 'food' && (
              <div className='pl-2 pr-2.5 py-0.5 bg-blue-950 rounded-full border border-blue-800 justify-start items-center gap-1.5 flex'>
                <div className='w-2 h-2 relative'>
                  <div className='w-1.5 h-1.5 left-[1px] top-[1px] absolute bg-blue-500 rounded-full' />
                </div>
                <div className="text-center text-sky-300 text-sm font-medium font-['Inter'] leading-tight">
                  Food
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-grow text-neutral-300 text-sm font-semibold font-['Poppins'] leading-tight">
          {header}
        </div>
        <div className='w-full flex justify-start items-center gap-5'>
          <div className='flex justify-start items-center gap-2'>
            <div className="text-neutral-400 text-base font-medium font-['Inter'] leading-normal">
              {description2}
            </div>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <div className="text-neutral-400 text-base font-medium font-['Inter'] leading-normal">
              {description1}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
