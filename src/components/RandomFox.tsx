// type ImageProps = {
//   image: string
//   alt: string
// }

import { useRef } from 'react'

// También se puede hacer así:
interface ImageProps {
  image: string
  alt: string
}

export const RandomFox = ({ image, alt }: ImageProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)

  return (
    <div>
      <img ref={node} width={320} height='auto' src={image} alt={alt} className='rounded' />
    </div>
  )
}
