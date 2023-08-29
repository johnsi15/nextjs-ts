// type ImageProps = {
//   image: string
//   alt: string
// }

// También se puede hacer así:
interface ImageProps {
  image: string
  alt: string
}

export const RandomFox = ({ image, alt }: ImageProps): JSX.Element => {
  return (
    <div>
      <img width={320} height='auto' src={image} alt={alt} className='rounded' />
    </div>
  )
}
