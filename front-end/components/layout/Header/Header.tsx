'use client'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import MobileSidebar from '../MobileSidebar'

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20'>
      <nav className='h-14 flex items-center justify-between px-4'>
        <MobileSidebar />
        <Link className='flex gap-4 items-center' href='/'>
          <Image src={logo} alt='logo' className='w-12 h-12 rounded-full' />
          <div className='font-serif italic antialiased tracking-wider font-bold capitalise'>
            MultiMed Vision+
          </div>
        </Link>

        <div className='flex gap-4 items-center'>
          <ThemeToggle />
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
        </div>
      </nav>
    </div>
  )
}
