// import Image from 'next/image'
'use client'
import { useState } from 'react'
import type { MouseEventHandler } from 'react'
import { LazyImage } from '../components/LazyImage'

interface ImageItem { id: string, imageUrl: string }

const randomNumber = (): number => Math.floor(Math.random() * 123) + 1
const generateId = (): string => Math.random().toString(36).substring(2, 15)

export default function Home (): JSX.Element {
  const [images, setImages] = useState<ImageItem[]>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault() // Esto solo es de ejemplo

    const newImageItem = {
      id: generateId(),
      imageUrl: `https://randomfox.ca/images/${randomNumber()}.jpg`
    }

    setImages([...images, newImageItem])
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-3'>
      <h1 className='text-5xl font-medium'>Hello world</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, imageUrl }) => (
        <div key={id} className='p-4'>
          <LazyImage
            src={imageUrl}
            alt={`fox ${id}`}
            width={320} height='auto'
            className='rounded-md bg-gray-400'
            onClick={() => console.log('hello...')}
          />
        </div>
      ))}
    </main>
  )
}
