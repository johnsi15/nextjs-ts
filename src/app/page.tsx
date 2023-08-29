// import Image from 'next/image'
'use client'
import {useState} from 'react'
import {RandomFox} from '../components/RandomFox'

const randomNumber = () => Math.floor(Math.random() * 123) + 1

export default function Home() {

  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`
  ])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
      <h1 className='text-5xl font-medium'>Hello world</h1>
      {images.map((image, index) => (
        <div key={index} className='p-4'>
          <RandomFox image={image} alt='fox' />
        </div>
      ))}
    </main>
  )
}
