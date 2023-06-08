import Image from 'next/image'
import avatar from '../../public/me.png'

const Hero = () => {
  return (
    <div className='flex text-xl leading-11 mt-16 mb-20'>
        <Image src={avatar} 
        alt="Picture of Wuletaw Wonte" 
        className="w-36 h-36 min-w-36"></Image>
    </div>
  )
}

export default Hero