import Image from "next/image"
import images from "@/lib/images"

const VideoWebsite = () => {
  return (
    <div className='lg:py-20 py-5 container px-5 lg:px-10'>
        <Image width={500} height={500} src={images?.ecommerce} alt="ebitans image" className='mx-auto lg:-mt-48 h-full w-full'/>
    </div>
  )
}

export default VideoWebsite