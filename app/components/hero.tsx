import "./hero.scss"
import Image from 'next/image'
import avatar from '../../public/me.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__avatar">
            <Image src={avatar} alt="Picture of Wuletaw Wonte"></Image>
        </div>
        <div className="grow border border-red">
            <h1 className="font-bold">Hello, I'm Wuletaw, a full stack web developer based in Arba Minch. </h1>            
        </div>
    </div>
  )
}

export default Hero