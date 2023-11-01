'use client'
import {
  arrow_down,
  blood_blue,
  blood_chart,
  blood_sugar,
  down_arrow,
  fat,
  heart,
  heart1,
  heart_attack_chart,
  heart_chart,
  hour,
  hour_chart,
  man,
  stress,
  stress_chart,
  sugar_chart,
  triglycerides_chart,
  up_arrow,
} from '@/public'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<any>(null)

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/dashboard`,
        {
          method: 'GET',
        }
      )
      if (!res.ok) {
        console.error('An error occurred:', res.statusText)
        return
      }
      const data = await res.json()

      setDashboardData(JSON.parse(data))
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (!dashboardData) return '...Running Inference'

  const { columns, data } = dashboardData
  console.log('data', dashboardData)
  console.log('data.columns', columns)
  console.log('data.data', data)

  // console.log('test', data?.columns[0])

  return (
    <div className='w-full h-full flex p-4 flex-col sm:items-center md:flex-row'>
      <div className='md:w-1/2 w-full h-full p-2 '>
        <div className='flex flex-row justify-between p-4 items-start'>
          <div className='flex flex-col '>
            <div className="text-3xl font-bold font-['Mulish']">
              Health Overview
            </div>
            <div className="text-gray-500 text-base font-semibold font-['Mulish']">
              {new Date().toISOString().slice(0, 10)}
            </div>
          </div>
        </div>

        <div className='flex md:flex-row flex-col gap-4 flex-grow flex-wrap items-center justify-center '>
          <div className='w-52 h-64  bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-14 h-14'>
                <Image
                  src={blood_sugar}
                  alt='blood_sugar'
                  className='w-14 h-14 bg-cyan-100 rounded-xl'
                />
              </div>
              <div className=" text-black text-base font-semibold font-['Mulish']">
                {/* Cholesterol */}
                {columns[6]}
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {/* 207 */}
                {data[0][6]}
              </div>
              <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                mg / dL
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-orange-200 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                {207 < 200 ? 'healthy' : 'unhealthy'}
              </div>
            </div>
            <Image
              src={sugar_chart}
              alt='sugar_chart'
              className='w-44 h-16'
            ></Image>
          </div>
          <div className='w-52 h-64 bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-fit h-14'>
                <Image
                  src={heart}
                  alt='heart'
                  className='w-14 h-14 bg-red-50 rounded-xl'
                />
              </div>
              <div className=" text-black text-base font-semibold font-['Mulish']">
                {/* Heart Rate */}
                {columns[7]}
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {data[0][7]}
              </div>
              <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                bpm
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-red-50 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                Normal
              </div>
            </div>
            <Image
              src={heart_chart}
              alt='heart_chart'
              className='w-44 h-16'
            ></Image>
          </div>
          <div className='w-52 h-64 bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-14 h-14'>
                <Image
                  src={blood_blue}
                  alt='blood_blue'
                  className='w-14 h-14 bg-cyan-100 rounded-xl'
                />
              </div>
              <div className="text-black text-base font-semibold font-['Mulish']">
                Blood Pressure
                {/* {columns[26]} */}
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {data[0][26]}
              </div>
              <div className='flex flex-row items-start gap-2'>
                <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                  {/* / 102 */}
                </div>
                <div className="text-zinc-500 text-xs font-bold font-['Mulish']">
                  mmhg
                </div>
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-cyan-100 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                Normal
              </div>
            </div>
            <Image
              src={blood_chart}
              alt='blood_chart'
              className='w-44 h-16'
            ></Image>
          </div>
          <div className='w-52 h-64 bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-14 h-14 bg-amber-300 rounded-xl flex items-center justify-center'>
                <Image src={fat} alt='fat' className='w-8 h-8' />
              </div>
              <div className=" text-black text-base font-semibold font-['Mulish']">
                Triglycerides
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {data[0][20]}
              </div>
              <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                mol/L
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-amber-300 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                Ideal
              </div>
            </div>
            <Image
              src={triglycerides_chart}
              alt='triglycerides_chart'
              className='w-44 h-16'
            ></Image>
          </div>
          <div className='w-52 h-64 bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-14 h-14 bg-gray-500 rounded-xl flex items-center justify-center'>
                <Image src={heart1} alt='heart1' className='w-8 h-8 ' />
              </div>
              <div className=" text-black text-base font-semibold font-['Mulish']">
                Heart Attack Risk
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {(data[0][3] * 100).toFixed(2)}
              </div>
              <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                %
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-gray-500 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                Conditional
              </div>
            </div>
            <Image
              src={heart_attack_chart}
              alt='heart_attack_chart'
              className='w-44 h-16'
            ></Image>
          </div>
          <div className='w-52 h-64 bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-14 h-14 bg-green-200 rounded-xl flex items-center justify-center'>
                <Image src={hour} alt='hour' className='w-8 h-8 ' />
              </div>
              <div className=" text-black text-base font-semibold font-['Mulish']">
                Sleep Hours Per Day
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {data[0][22]}
              </div>
              <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                hours
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-green-200 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                More time
              </div>
            </div>
            <Image
              src={hour_chart}
              alt='hour_chart'
              className='w-44 h-16'
            ></Image>
          </div>
          <div className='w-52 h-64 bg-white rounded-xl shadow border border-stone-200 p-4 flex flex-col justify-between'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center'>
                <Image src={stress} alt='stress' className='w-8 h-8 ' />
              </div>
              <div className=" text-black text-base font-semibold font-['Mulish']">
                Stress Level
              </div>
            </div>
            <div className='flex flex-row items-end gap-2'>
              <div className="text-neutral-800 text-3xl font-normal font-['Mulish']">
                {data[0][16]}
              </div>
              <div className="text-zinc-500 text-base font-bold font-['Mulish']">
                / 10
              </div>
            </div>

            <div className='w-fit h-6 px-2 py-1 bg-violet-100 rounded justify-start items-start gap-2.5 inline-flex'>
              <div className="text-black text-xs font-semibold font-['Mulish']">
                Low
              </div>
            </div>
            <Image
              src={stress_chart}
              alt='stress_chart'
              className='w-44 h-16'
            ></Image>
          </div>
        </div>
      </div>
      {/* Round 2 */}
      <div className='md:w-1/2 sm:w-full h-full p-8 bg-gray-800 rounded-3xl'>
        <div className='flex flex-row justify-between items-center'>
          <div className="text-white text-xl font-normal font-['Mulish']">
            BMI Calculator
          </div>
          <div className='w-40 h-12 px-6 py-3.5 rounded-xl border border-stone-300 justify-center items-center gap-2.5 inline-flex'>
            <div className="text-stone-300 text-base font-normal font-['Mulish']">
              Last Week
            </div>
            <Image
              src={arrow_down}
              alt='arrow_down'
              className='w-5 h-5 hover:cursor-pointer'
            />
          </div>
        </div>

        <div className='flex flex-row justify-between items-center p-4 gap-x-4'>
          <div className='flex flex-col gap-4 w-1/2'>
            <div className='flex flex-row gap-4'>
              <div className='w-full h-20 bg-green-200 rounded-xl p-4'>
                <div className=" text-black text-xl font-semibold font-['Mulish']">
                  Age
                </div>

                <div className="text-neutral-800 text-base font-normal font-['Mulish']">
                  {data[0][4]}
                </div>
              </div>
            </div>

            <div className='flex flex-row gap-4'>
              <div className='w-full h-20 bg-cyan-200 rounded-xl p-4'>
                <div className=" text-black text-xl font-semibold font-['Mulish']">
                  Sex
                </div>

                <div className="text-neutral-800 text-base font-normal font-['Mulish']">
                  {data[0][5] == 0 ? 'Male' : 'Female'}
                </div>
              </div>
            </div>
          </div>

          {/* BMI */}
          <div className='h-44 w-1/2 flex flex-col justify-center items-center'>
            <div className='w-full h-44 bg-neutral-600 rounded-xl flex flex-col justify-center items-center p-4'>
              <div className="text-white text-xl font-normal font-['Mulish'] w-full">
                Body Mass Index (BMI)
              </div>{' '}
              <div className='flex flex-row justify-between w-full'>
                {' '}
                <div className="text-white text-base font-normal font-['Mulish']">
                  {data[0][19].toFixed(1)}
                </div>
                <div className='w-24 h-7 px-2.5 py-1.5 bg-emerald-100 rounded-lg justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-black text-xs font-normal font-['Mulish']">
                    You’re Healthy
                  </div>
                </div>
              </div>
              <div className='w-60 h-12 flex justify-between items-center'>
                <div className="text-white text-xs font-bold font-['Mulish']">
                  15
                </div>
                <div className="text-white text-xs font-bold font-['Mulish']">
                  18.5
                </div>
                <div className="text-white text-xs font-bold font-['Mulish']">
                  25
                </div>
                <div className="text-white text-xs font-bold font-['Mulish']">
                  30
                </div>
                <div className="text-white text-xs font-bold font-['Mulish']">
                  40
                </div>
              </div>
              <div className='w-1.5 h-1.5 bg-red-400 rounded-2xl border border-white mt-1' />
              <div className='w-60 h-3.5 bg-gradient-to-r from-blue-200 via-teal-200 to-rose-400 rounded-3xl mt-2' />
            </div>
          </div>
        </div>

        <div className='border-t mt-8 border-white w-full h-3/4 flex flex-row p-4'>
          <div className='w-1/2 h-full p-4'>
            <div className='flex flex-col gap-2 pb-8 '>
              <div>
                <div className="text-white text-xl font-normal font-['Mulish'] w-full">
                  Activity Measurements
                </div>
                <div className="text-stone-300 text-base font-semibold font-['Mulish']">
                  Last checked A Few Hours Ago
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-8 justify-start pr-8'>
              <div className='w-full h-full py-6 bg-white rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex'>
                <div className="text-zinc-600 text-base font-bold font-['Mulish']">
                  Exercise Hours Per Week
                </div>
                <div className='justify-start items-center gap-2 inline-flex'>
                  <div className="text-black text-2xl font-normal font-['Mulish']">
                    {data[0][19].toFixed(1)}
                  </div>
                  <Image src={up_arrow} alt='up_arrow' className='w-6 h-6' />
                </div>
              </div>
              <div className='w-full h-full py-6 bg-white rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex'>
                <div className="text-zinc-600 text-base font-bold font-['Mulish']">
                  Sedentary Hours Per Day
                </div>
                <div className='justify-start items-center gap-2 inline-flex'>
                  <div className="text-black text-2xl font-normal font-['Mulish']">
                    {data[0][17].toFixed(1)} hrs
                  </div>
                  <Image
                    src={down_arrow}
                    alt='down_arrow'
                    className='w-6 h-6'
                  />
                </div>
              </div>
              <div className='w-full h-full py-6 bg-white rounded-xl border border-stone-300 flex-col justify-center items-center gap-2 inline-flex'>
                <div className="text-zinc-600 text-base font-bold font-['Mulish']">
                  Physical Days Per Week
                </div>
                <div className='justify-start items-center gap-2 inline-flex'>
                  <div className="text-black text-2xl font-normal font-['Mulish']">
                    {data[0][21]} hrs days
                  </div>
                  <Image src={up_arrow} alt='up_arrow' className='w-6 h-6' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 h-3/4'>
            <div className='w-full h-full p-4'>
              <Image
                src={man}
                alt='man'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
