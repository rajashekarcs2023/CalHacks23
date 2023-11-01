import { useState } from 'react'
import { navlinks } from '@/constants/navlinks'
import Image from 'next/image'
import { logo, menu } from '@/public'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileSidebar() {
  const paths = new Set(['/', '/sign-in', '/sign-up'])
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className='md:hidden'>
      {/* Hamburger icon */}
      <div className='flex items-center px-2'>
        <button
          className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          onClick={() => setOpen(!open)}
        >
          <span className='sr-only'>Open main menu</span>
          <Image
            src={menu}
            alt='menu'
            className='block h-6 w-6'
            aria-hidden='true'
          />
        </button>
      </div>

      {/* Links */}
      <div
        className={`fixed w-full h-full top-0 left-0 z-10 transform ease-in-out duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 w-full sm:w-[80%] md:w-[45%] h-full z-20 bg-black px-4 transform ease-in-out duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-row justify-between items-center mt-8 py-4 border-b border-white'>
          <Link className='flex gap-4 items-center' href='/'>
            <Image src={logo} alt='logo' className='w-12 h-12 rounded-full' />
            <div className='font-serif italic antialiased tracking-wider font-bold capitalise'>
              MultiMed Vision+
            </div>
          </Link>
          <button onClick={() => setOpen(false)}>X</button>
        </div>
        <div className='flex flex-col h-full'>
          {navlinks.map(({ path, title, logo }, index) => (
            <Link
              href={path}
              className={`rounded-lg flex-col justify-center items-start inline-flex p-4 my-4 ${
                pathname.includes(path) ? 'bg-gray-600 rounded-lg ' : ''
              } hover:bg-zinc-900 hover:bg-opacity-5`}
              key={index}
              onClick={() => setOpen(false)}
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
                    <div className="self-stretch text-lg font-normal font-['Inter'] leading-tight">
                      {title}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
