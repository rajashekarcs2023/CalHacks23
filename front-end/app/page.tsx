import Image from 'next/image'
import { LandingHero } from '@/components/landing/LandingHero'
import { LandingContent } from '@/components/landing/LandingContent'

export default function Home() {
  return (
    <>
      <div className='h-full overflow-auto'>
        <LandingHero />
        <LandingContent />
      </div>
    </>
  )
}
