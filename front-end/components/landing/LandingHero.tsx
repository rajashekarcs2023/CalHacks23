'use client'

import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { logo } from '@/public'
import Image from 'next/image'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className=' font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>Utilizing Multi-modal LLMs to track</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: [
                'High Cholesterol.',
                'Medications.',
                'Calories.',
                'Blood sugar.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Personalized Advice For Your Health
      </div>
      <div>
        <Link
          href={isSignedIn ? '/dashboard' : '/sign-up'}
          className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
        >
          The Next Generational Healthcare App
        </Link>
      </div>
      <div className='flex items-center justify-center'>
        <Image src={logo} alt='logo' className='w-64 h-64 rounded-full' />
      </div>
    </div>
  )
}
