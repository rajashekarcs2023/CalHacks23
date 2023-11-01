'use client'
import { navlinks } from '@/constants/navlinks'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const paths = new Set(['/', '/sign-in', '/sign-up'])
  const pathname = usePathname()

  return (
    <>
      {/* Render mobile sidebar under sm breakpoint */}
      {paths.has(pathname) ? (
        ''
      ) : (
        <aside className='hidden md:block pt-16 pb-10 px-4 w-64 border-r shrink-0 sticky top-0'>
          <div className='flex flex-col gap-4'>
            {navlinks.map(({ path, title, logo }, index) => (
              <Link
                href={path}
                className={`rounded-lg flex-col justify-center items-start inline-flex p-2 ${
                  pathname.includes(path) ? 'bg-gray-600 rounded-lg ' : ''
                } hover:bg-zinc-900 hover:bg-opacity-5`}
                key={index}
              >
                <div className='self-stretch pr-2 py-1 justify-start items-center gap-1 inline-flex'>
                  <div className='rounded-lg justify-start items-center flex'>
                    <div className='rounded-lg justify-center items-center flex'>
                      <Image
                        src={logo}
                        alt='nav-image'
                        className='w-5 h-5 relative'
                      />
                    </div>
                    <div className='opacity-0 rounded-lg justify-center items-center flex'>
                      <div className='w-4 h-4 px-1.5 py-1 justify-center items-center flex' />
                    </div>
                  </div>
                  <div className='grow shrink basis-0 rounded-lg justify-start items-center gap-1 flex'>
                    <div className='rounded-lg justify-center items-center flex'>
                      <div className='w-5 h-5 relative' />
                    </div>
                    <div className='rounded-lg flex-col justify-center items-start inline-flex'>
                      <div className="self-stretch text-sm font-normal font-['Inter'] leading-tight">
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </>
  )
}
