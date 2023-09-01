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
  onLazyLoad?: (img: HTMLImageElement | null) => void
}

export function LazyImage ({ src, onLazyLoad, ...imgProps }: ImageProps): JSX.Element {
  const node = useRef<HTMLImageElement>(null)
  const [isLazyLoaded, setIsLazyLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

  useEffect(() => {
    if (isLazyLoaded) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      // console.log({ entries }) // Array of 1 element img
      entries.forEach((entry) => {
        // console.log({ isIntersecting: entry.isIntersecting })
        // console.log({ node: node.current })
        if (!entry.isIntersecting || (node.current == null)) {
          return
        }
        // console.log('visible')
        setCurrentSrc(src)
        observer.disconnect()
        setIsLazyLoaded(true)

        if (typeof onLazyLoad === 'function') {
          onLazyLoad(node.current)
          // console.log('onLazyLoad')
        }
      })
    })

    if (node.current != null) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad, isLazyLoaded])

  return (
    <img ref={node} src={currentSrc} {...imgProps} />
  )
}
