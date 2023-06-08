import Image from 'next/image'
import avatar from '../../public/me.png'

const Hero = () => {
  return (
    <div className='flex gap-3 text-xl leading-11 mt-16 mb-20'>
        <div className="rounded-full border-orange-900 border-2 p-1">
            <Image src={avatar} 
            alt="Picture of Wuletaw Wonte" 
            className="w-36 h-36 min-w-36"></Image>
        </div>
        <div className="grow border border-red">
            <h1 className="font-bold">Wuletaw Wonte</h1>            
        </div>
    </div>
  )
}

export default Hero