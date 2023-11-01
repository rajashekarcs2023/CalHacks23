import React from 'react'
import Image from 'next/image'
import { chat } from '@/public'

const MessageList = ({ messages }: any) => {
  console.log('messages', messages)
  if (messages.length === 0) return <></>

  return (
    <div className=''>
      {messages &&
        messages?.map((message: any, index: any) => {
          return (
            <div className='w-full flex flex-col gap-2 mb-4' key={index}>
              {message.role === 'assistant' ? (
                <>
                  <div className='w-full justify-start items-start gap-3 flex'>
                    <div className='w-10 h-10 relative'>
                      <Image src={chat} alt='chat' className='w-10 h-10' />
                      <div className='w-2.5 h-2.5 left-[30px] top-[30px] absolute bg-green-400 rounded-full border border-gray-900' />
                    </div>
                    <div className='grow  basis-0 flex-col justify-start items-start gap-1.5 inline-flex'>
                      <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                        <div className="grow shrink basis-0 text-neutral-300 text-sm font-medium font-['Inter'] leading-tight">
                          Assistant
                        </div>
                        <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                          {message?.createdAt?.toLocaleDateString('en-us', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                      </div>
                      <div className='self-stretch px-3.5 py-2.5 bg-gray-700 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-800 justify-start items-center gap-2 inline-flex'>
                        <div className="grow shrink basis-0 text-neutral-100 text-base font-normal font-['Inter'] leading-normal">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  key={message?.id}
                  className='w-full justify-end items-start gap-3 flex'
                >
                  <div className='grow basis-0 flex-col justify-start items-start gap-1.5 inline-flex'>
                    <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                      <div className="grow shrink basis-0 text-neutral-300 text-sm  font-medium font-['Inter'] leading-tight">
                        You
                      </div>
                      <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                        {message?.createdAt?.toLocaleDateString('en-us', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <div className='self-stretch px-3.5 py-2.5 bg-gray-800 rounded-tl-lg rounded-bl-lg rounded-br-lg justify-start items-center gap-2 inline-flex'>
                      <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">
                        {message.content}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default MessageList
