// import Image from 'next/image'
import {RandomFox} from '../components/RandomFox'

const randomNumber = () => Math.floor(Math.random() * 123) + 1

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
      <h1 className='text-5xl font-medium'>Hello world</h1>

      <RandomFox image={`https://randomfox.ca/images/${randomNumber()}.jpg`} alt='fox' />
    </main>
  )
}
