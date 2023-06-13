import "./hero.scss"
import Image from 'next/image'
import avatar from '../../public/me.png'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__avatar">
            <Image src={avatar} alt="Picture of Wuletaw Wonte"></Image>
        </div>
        <div className="hero__body">
            <p className="hero__body__text"><a href="/">Hello, I'm Wuletaw</a>. I'm a full stack web developer. </p>            
            <ul className="hero__body__social">
              <li>
                <Link href="https://twitter.com/wuletaww" target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} style={{ color: "rgb(133, 191, 247)" }} />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/wuletaw-wonte" target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: "rgb(41, 102, 188)" }} />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/wuletawwonte/" target='_blank'>
                  <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
                  <span>Github</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/wuletawbeza" target='_blank'>
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }} />
                  <span>Facebook</span>
                </Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Hero