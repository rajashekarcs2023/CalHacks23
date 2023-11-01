'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { chat, dropdown, send } from '@/public'
import toast from 'react-hot-toast'
import MessageList from '@/components/chat/MessageList'

const ChatComponent = () => {
  React.useEffect(() => {
    const messageContainer = document.getElementById('message-container')
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [])

  const [messages, setMessages] = useState<any>([
    {
      content:
        "  Hello! I'm Analyst. I'm your virtual assistant where you can ask questions regarding your data. How can I help you today?",
      createdAt: new Date(),
      role: 'assistant',
      id: '1',
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (inputValue.length == 0) {
      toast.error('Input Value is empty')
      return
    }
    setMessages((prev: any) => [...prev, { content: inputValue, role: 'user' }])
    setInputValue('')

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/question`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: inputValue }),
        }
      )

      if (!res.ok) {
        console.error('An error occurred:', res.statusText)
        return
      }
      const data = await res.json()

      console.log('data', data)
      setMessages((prev: any) => [
        ...prev,
        { content: data, role: 'assistant' },
      ])
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='w-full h-full flex-col justify-center items-center md:gap-6 inline-flex'>
      <div className='bg-gray-900 rounded-xl shadow border border-gray-800 flex-col justify-start items-start flex'>
        <div className='self-stretch h-24 flex-col justify-start items-start gap-2.5 flex'>
          <div className='self-stretch h-24 bg-gray-900 flex-col justify-start items-start gap-5 flex'>
            <div className='self-stretch px-6 pt-5 justify-start items-start gap-4 inline-flex'>
              <Image
                src={chat}
                alt='chat'
                className='w-12 h-12 relative rounded-lg'
              />
              <div className='grow shrink basis-0 h-12 flex-col justify-center items-start gap-1 inline-flex'>
                <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                  <div className="text-neutral-100 text-lg font-semibold font-['Poppins'] leading-7">
                    AI Analyst
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">
                  AI to help analyze your vitals.
                </div>
              </div>
              <div className='flex-col justify-start items-start inline-flex'>
                <Image
                  src={dropdown}
                  alt='dropdown'
                  className='w-7 h-7 py-1 justify-center items-center inline-flex'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className='w-[500px] h-[40vh] p-6 flex-col justify-start items-start gap-4 flex relative overflow-y-auto'
          id='message-container'
        >
          <MessageList messages={messages} />
        </div>

        <form
          onSubmit={handleSubmit}
          className='sticky self-stretch h-20 px-6 pt-5 pb-6 bg-gray-900 border-t border-gray-800 flex-col justify-start items-end gap-3 flex'
        >
          <div className='self-stretch justify-start items-start gap-3 inline-flex'>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex'>
              <div className='self-stretch h-11 flex-col justify-start items-start gap-1.5 flex'>
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder='Enter something...'
                  className="self-stretch px-3.5 py-2.5 bg-gray-900 rounded-lg shadow border border-zinc-700 justify-start items-center gap-2 inline-flex grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal"
                />
              </div>
            </div>
            <button
              type='submit'
              className='p-3 bg-sky-600 rounded-lg shadow border border-sky-600 justify-center items-center gap-2 flex'
            >
              <Image
                src={send}
                alt='send'
                className='w-5 h-5 justify-center items-center flex'
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChatComponent
