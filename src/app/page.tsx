// import Image from 'next/image'
'use client'
import {useState} from 'react'
import {RandomFox} from '../components/RandomFox'

const randomNumber = () => Math.floor(Math.random() * 123) + 1
const generateId = () => Math.random().toString(36).substring(2, 15);

type ImageItem = { id: string; image_url: string }

export default function Home() {

  const [images, setImages] = useState<ImageItem[]>([
    {id: generateId(), image_url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    {id: generateId(), image_url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    {id: generateId(), image_url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    {id: generateId(), image_url: `https://randomfox.ca/images/${randomNumber()}.jpg`}
  ])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
      <h1 className='text-5xl font-medium'>Hello world</h1>
      {images.map(({ id, image_url}) => (
        <div key={id} className='p-4'>
          <RandomFox image={image_url} alt='fox' />
        </div>
      ))}
    </main>
  )
}
