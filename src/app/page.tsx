// import Image from 'next/image'
'use client'
import { useEffect, useState } from 'react'
import { RandomFox } from '../components/RandomFox'

interface ImageItem { id: string, imageUrl: string }

export default function Home (): JSX.Element {
  const [images, setImages] = useState<ImageItem[]>([])

  useEffect(() => {
    const randomNumber = (): number => Math.floor(Math.random() * 123) + 1
    const generateId = (): string => Math.random().toString(36).substring(2, 15)
    setImages([
      {
        id: generateId(),
        imageUrl: `https://randomfox.ca/images/${randomNumber()}.jpg`
      },
      {
        id: generateId(),
        imageUrl: `https://randomfox.ca/images/${randomNumber()}.jpg`
      },
      {
        id: generateId(),
        imageUrl: `https://randomfox.ca/images/${randomNumber()}.jpg`
      },
      {
        id: generateId(),
        imageUrl: `https://randomfox.ca/images/${randomNumber()}.jpg`
      }
    ])
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-3'>
      <h1 className='text-5xl font-medium'>Hello world</h1>
      {images.map(({ id, imageUrl }) => (
        <div key={id} className='p-4'>
          <RandomFox image={imageUrl} alt='fox' />
        </div>
      ))}
    </main>
  )
}
