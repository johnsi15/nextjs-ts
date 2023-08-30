// type ImageProps = {
//   image: string
//   alt: string
// }

import { useEffect, useRef, useState } from 'react'

// También se puede hacer así:
interface ImageProps {
  image: string
  alt: string
}

export const RandomFox = ({ image, alt }: ImageProps): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log({ entries }) // Array of 1 element img
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('visible')
          setSrc(image)
        }
      })
    })

    if (node.current != null) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [image])

  return (
    <img ref={node} width={320} height='auto' src={src} alt={alt} className='rounded-md bg-gray-400' />
  )
}
