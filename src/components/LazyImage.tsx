// type ImageProps = {
//   image: string
//   alt: string
// }

import { useEffect, useRef, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
// También se puede hacer así:
// interface LazyImageProps {
//   image: string
//   alt: string
// }

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

interface ImageProps extends ImageNative {
  src: string
}

export function LazyImage ({ src, ...imgProps }: ImageProps): JSX.Element {
  const node = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log({ entries }) // Array of 1 element img
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('visible')
          setCurrentSrc(src)
        }
      })
    })

    if (node.current != null) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <img ref={node} src={currentSrc} {...imgProps} />
  )
}
