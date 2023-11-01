'use client'
import CardComponent from '@/components/CardComponent'
import { useEffect, useState } from 'react'

export default function IntakesPage() {
  const [data, setData] = useState<any[]>([])

  const [medication, setMedication] = useState<any>(null)

  console.log('mediciation', medication)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/getdata`, {
        method: 'GET',
      })
      if (!res.ok) {
        console.error('An error occurred:', res.statusText)
        return
      }
      const data = await res.json()

      setData(data)
      setMedication(data.meds[0])
    }

    fetchData()
  }, [])

  console.log('data', data)

  if (!data) return <div></div>
  if (!medication) return <div className='ml-2'>None</div>
  return (
    <main className='flex h-full flex-col sm:flex-row-reverse sm:overflow-auto sm:my-8'>
      <div className='md:px-8 md:pb-12 w-full sm:w-1/2'>
        {medication && (
          <div className='w-full h-full'>
            {medication.type == 'food' ? (
              <div className='w-full h-full flex gap-2 px-4 md:px-0'>
                <div className='flex flex-col'>
                  <div className='w-full h-full'>
                    <img
                      src={medication.img_url}
                      alt='img_url'
                      className='w-full h-full object-cover rounded-xl'
                    />
                  </div>
                  <div className='mt-4 italic text-4xl bold flex flex-row justify-center'>
                    {medication['Short Name of Meal']}
                  </div>
                  <div className='my-4 w-full h-full px-5 py-4 bg-white bg-opacity-80 rounded-2xl flex-col justify-center items-start inline-flex'>
                    <div className='self-stretch h-7 rounded-lg flex-col justify-center items-start gap-2 flex'>
                      <div className="self-stretch text-zinc-900 text-opacity-40 text-xl font-normal font-['Inter'] leading-none">
                        Advice
                      </div>
                    </div>
                    <div className='self-stretch h-full rounded-lg flex-col justify-center items-start gap-2 flex'>
                      <div className="self-stretch text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
                        {medication?.advice}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    <div className='text-xl text-center'>Stats</div>
                    <div className='flex flex-row gap-4 flex-grow flex-wrap items-center justify-center'>
                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1'>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Calories:
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Calories']}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1 '>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Carbohydrates:
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Carbohydrates(Grams)']} grams
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1 '>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Cholesterol:
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Cholesterol(mg)']} mg
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1 '>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Fat Grams
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Fat(Grams)']} mg
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1 '>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Sodium
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Sodium(mg)']} mg
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-full p-6 my-4 bg-slate-50 rounded-2xl flex-col justify-start items-start gap-2 inline-flex'>
                    <div className='self-stretch rounded-lg justify-start items-center gap-4 inline-flex'>
                      <div className='grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex'>
                        <div className="self-stretch text-zinc-900 text-sm font-semibold font-['Inter'] leading-tight">
                          Description
                        </div>
                      </div>
                      <div className='rounded-lg justify-center items-center gap-4 flex'>
                        <div className='w-8 h-8 relative' />
                      </div>
                    </div>
                    <div className='self-stretch h-full rounded-lg flex-col justify-center items-start flex'>
                      <div className="self-stretch text-zinc-900 text-sm font-normal font-['Inter'] leading-tight lowercase italic">
                        {medication['desc'].toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className='w-full h-full flex gap-2 px-4 md:px-0'>
                  <div className='flex flex-col'>
                    <div className='w-full h-full'>
                      <img
                        src={medication.img_url}
                        alt='img_url'
                        className='w-full h-full object-cover rounded-xl'
                      />
                    </div>
                    <div className='mt-4 italic text-4xl bold flex flex-row justify-center'>
                      {medication['Drug Name']}
                    </div>
                    <div className='py-4'>
                      <div className='desc'>{medication?.advice}</div>
                    </div>
                    <div className='flex flex-row gap-4 flex-grow flex-wrap items-center justify-center mb-4'>
                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1'>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Drug Frequency:{' '}
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Dose Frequency(Per Day)']} Per Day
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='w-fit h-20 p-4 bg-gray-800 rounded-2xl justify-start items-center gap-7 '>
                        <div className='rounded-lg flex-col justify-center items-start gap-1 '>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-sm font-normal font-['Inter'] leading-tight">
                              Drug Dosage:{' '}
                            </div>
                          </div>
                          <div className='rounded-lg flex-col justify-center items-start flex'>
                            <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-normal">
                              {medication['Drug Dosage(Pills/Capsules)']}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <div className='flex flex-col px-8 gap-4 md:mt-2 md:border-r w-full sm:w-1/2 sm:mt-32'>
        {(data as any)?.meds?.map((item: any, index: any) => (
          <div className='' key={index}>
            <div onClick={() => setMedication({ ...item, type: 'med' })}>
              <CardComponent
                header={`Notes: ${item['Extra Notes']}`}
                title={item['Drug Name']}
                description1={`Drug Frequency: ${item['Dose Frequency(Per Day)']}`}
                description2={`Drug Dosage: ${item['Drug Dosage(Pills/Capsules)']}`}
                view='med'
              />
            </div>
          </div>
        ))}

        {(data as any)?.food?.map((item: any, index: any) => (
          <div className='' key={index}>
            <div onClick={() => setMedication({ ...item, type: 'food' })}>
              <CardComponent
                header={`Calories: ${item['Calories']}`}
                title={item['Short Name of Meal']?.toUpperCase()}
                description1={`Protein: ${item['Protein(Grams)']} grams`}
                description2={`Carbohydrates: ${item['Carbohydrates(Grams)']} grams`}
                view='food'
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
