import ImageViewer from '@/components/item/ImageViewer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { dropdown } from '@/public'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='w-full h-full'>
        <div className='w-full h-full justify-center items-start gap-8 inline-flex'>
          <div className='flex-col justify-center items-center gap-6 inline-flex h-full w-full'>
            <div className='flex-col justify-start items-end gap-2.5 flex pl-8 h-full w-full'>
              <div className='bg-gray-900 rounded-xl shadow border border-gray-800 flex-col justify-start items-start flex h-full w-full'>
                <div className='self-stretch h-24 flex-col justify-start items-start gap-2.5 flex '>
                  <div className='self-stretch h-24 bg-gray-900 flex-col justify-start items-start gap-5 flex'>
                    <div className='self-stretch px-6 pt-5 justify-start items-start gap-4 inline-flex'>
                      <div className='w-10 h-10 relative'>
                        <div className='w-8 h-10 left-[7px] top-0 absolute' />
                        <div className='px-0.5 py-0.5 left-[1px] top-[18px] absolute bg-red-600 rounded-sm justify-start items-start gap-2 inline-flex'>
                          <div className="text-center text-white text-xs font-bold font-['Inter']">
                            PDF
                          </div>
                        </div>
                      </div>
                      <div className='grow shrink basis-0 h-12 flex-col justify-center items-start gap-1 inline-flex'>
                        <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                          <div className="text-neutral-100 text-lg font-semibold font-['Poppins'] leading-7">
                            Test
                          </div>
                        </div>
                        <div className="self-stretch text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">
                          A preview of your contract.
                        </div>
                      </div>
                      <Link
                        target='_blank'
                        href={`test`}
                        // rel='noopener noreferrer'
                        className='flex-col justify-start items-start inline-flex'
                      >
                        <div className='px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-center items-center gap-1 inline-flex'>
                          <div className='px-0.5 justify-center items-center flex'>
                            <div className="text-neutral-300 text-sm font-semibold font-['Poppins'] leading-tight">
                              View
                            </div>
                          </div>
                          <Image
                            src={dropdown}
                            alt='zoom'
                            className='w-5 h-5 p-0.5 justify-center items-center flex'
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-4 flex w-full h-full '>
                  <ImageViewer />
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch pr-8 flex-col justify-between items-start inline-flex h-full w-full rounded-lg'>
            <div className='flex-col justify-center items-start gap-6 flex'>
              <Tabs defaultValue={'analysis'}>
                <TabsList className='p-1 bg-gray-900 rounded-lg border border-gray-800 justify-start items-center gap-1 inline-flex'>
                  {/* { != 'view' && (
                    <TabsTrigger
                      value={'Hello'}
                      className="text-neutral-300 text-sm font-semibold font-['Poppins'] leading-tight"
                    >
                      {'Hello' === 'complete' && 'Completed'}
                    </TabsTrigger>
                  )} */}

                  <TabsTrigger
                    value='analysis'
                    className="text-neutral-300 text-sm font-semibold font-['Poppins'] leading-tight"
                  >
                    Analysis
                  </TabsTrigger>
                  <TabsTrigger
                    value='chat'
                    className="text-neutral-300 text-sm font-semibold font-['Poppins'] leading-tight"
                  >
                    AI Chat
                  </TabsTrigger>
                </TabsList>
                <TabsContent value={''} className='mt-7'>
                  "Hello"
                </TabsContent>

                <TabsContent value='chat'>
                  <div className='flex-[3] rounded-md h-screen'>
                    Chat Component
                  </div>
                </TabsContent>
                <TabsContent value='comment'>Comment Component</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
