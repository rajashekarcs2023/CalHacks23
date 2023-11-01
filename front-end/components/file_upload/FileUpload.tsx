'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-hot-toast'
import { Loader2 } from 'lucide-react'
import { dropdown, upload } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
export default function FileUpload() {
  const router = useRouter()
  const [uploading, setUploading] = useState(0)

  const [file, setFile] = useState<null | File>(null)
  const [content, setContent] = useState<any>(null)

  const { getRootProps, getInputProps } = useDropzone({
    // accept: { 'application/pdf': ['.pdf', '.png', '.docx'] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0]
      setFile(acceptedFiles[0])
      if (file.size > 10 * 1024 * 1024) {
        // bigger than 10mb!
        toast.error('File too large')
        return
      }
      try {
        setUploading(1)

        const data = new FormData()
        data.append('file', file)

        console.log('file', file)

        const resFile = await fetch(
          `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/upload_image`,
          {
            method: 'POST',
            body: data,
          }
        )
        const fileData = await resFile.json()

        setUploading(2)

        setContent(fileData)

        console.log('fileData', fileData)

        if (fileData?.desc) {
          const advice = await fetch(
            `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/advice`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(fileData),
            }
          )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
        }

        toast.success('Content Processed!')
      } catch (error) {
        console.log(error)
      } finally {
        setUploading(0)
        router.push('/intakes')
      }
    },
  })

  return (
    <div className='w-full h-full flex-col justify-center items-center md:gap-6 inline-flex'>
      {content && (
        <div className='w-full h-full'>
          <div className='flex flex-col items-center'>
            <div className='w-full h-full '>
              <img
                src={content?.img_url}
                alt='img_url'
                className='w-6/12 h-6/12 object-cover rounded-xl'
              />

              {content['Calories'] ? (
                <div className='flex flex-col items-center justify-center'>
                  <div>Calories: {content['Calories']}</div>
                  <div>Cholesterol(mg): {content['Cholesterol(mg)']}</div>
                  <div>Fat(Grams): {content['Fat(Grams)']}</div>
                  <div>Protein(Grams): {content['Protein(Grams)']}</div>
                  <div>Sodium(mg): {content['Sodium(mg)']}</div>
                  {/* <div className='text-xl font-semibold mt-4'>
                    {content['desc']?.toUpperCase()}
                  </div> */}
                </div>
              ) : (
                <div className='flex flex-col items-center justify-center'>
                  <div>
                    Drug Frequency (Per Day):
                    {content['Dose Frequency(Per Day)']}
                  </div>
                  <div>{content['Drug Name']}</div>
                  <div>
                    Drug Frequency: {content['Dose Frequency(Per Day)']}
                  </div>
                  <div>
                    Drug Dosage: {content['Drug Dosage(Pills/Capsules)']}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className='md:px-8 flex-col justify-start items-start gap-2.5 flex md:w-[600px] sm:w-screen sm:p-0 '>
        <div className='w-full rounded-xl shadow border  flex-col justify-start items-start flex '>
          <div className='self-stretch h-24 flex-col justify-start items-start md:gap-2.5 flex'>
            <div className='self-stretch h-24 bg-gray-900 flex-col justify-start items-start gap-5 flex sm:h-full'>
              <div className='self-stretch px-6 pt-5 justify-start items-start gap-4 inline-flex '>
                <div className='w-12 h-12 p-2 rounded-lg shadow border border-zinc-700 justify-center items-center flex'>
                  <Image
                    src={upload}
                    alt='upload'
                    className='w-12 h-12 p-0.5 justify-center items-center inline-flex'
                  />
                </div>
                <div className='grow shrink basis-0 h-12 flex-col justify-center items-start gap-1 inline-flex'>
                  <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                    <div className="text-neutral-100 text-lg font-semibold font-['Poppins'] leading-7">
                      Upload Image
                    </div>
                  </div>
                  <div className="self-stretch text-neutral-400 text-sm font-normal font-['Inter'] leading-tight">
                    Upload an image of food or prescription
                  </div>
                </div>
                <div className='flex-col justify-start items-start inline-flex'>
                  <Link
                    href=''
                    className='flex-col justify-start items-start inline-flex'
                  >
                    <Image
                      src={dropdown}
                      alt='dropdown'
                      className='w-8 h-8 py-1 justify-center items-center inline-flex'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* React */}

          <div className='w-full h-96  rounded-xl'>
            <div className='p-4 bg-gray-900 h-full w-full'>
              <div
                {...getRootProps({
                  className:
                    'bg-gray-900 border-dashed border-2 rounded-xl cursor-pointer border-gray-800 py-8 flex justify-center items-center flex-col h-full',
                })}
              >
                <input {...getInputProps()} />

                {uploading != 0 ? (
                  <>
                    {/* loading state */}
                    <Loader2 className='h-10 w-10 text-blue-500 animate-spin' />
                    <p className='mt-2 text-sm text-slate-400'>
                      {uploading == 1
                        ? 'Analyzing image...'
                        : 'Processing advice...'}
                    </p>
                  </>
                ) : (
                  <>
                    <div className='self-stretch h-24 flex-col justify-start items-center gap-3 flex'>
                      <div className='w-10 h-10 p-1.5 rounded-lg shadow border border-zinc-700 justify-center items-center inline-flex'>
                        <Image
                          src={upload}
                          alt='upload'
                          className='w-8 h-8 px-0.5 py-0.5 justify-center items-center inline-flex'
                        ></Image>
                      </div>
                      {/* <p className='mt-2 text-sm text-slate-400'>Drop PDF Here</p> */}
                      <div className='self-stretch h-10 flex-col justify-start items-center gap-1 flex'>
                        <div className='self-stretch justify-center items-start gap-1 inline-flex'>
                          <div className='justify-center items-center gap-1.5 flex'>
                            <div className="text-neutral-300 text-sm font-semibold font-['Poppins'] leading-tight">
                              Click to upload
                            </div>
                          </div>
                          <div className="text-neutral-400 text-sm font-thin font-['Inter'] leading-tight">
                            or drag and drop
                          </div>
                        </div>
                        <div className="self-stretch text-center text-neutral-400 text-xs font-normal font-['Inter'] leading-none">
                          JPEG, PNG
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
