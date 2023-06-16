import Link from 'next/link'
import './footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCode } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
  return (
    <footer>
        <Link href="/" className="copyright">&copy; Wuletaw Wonte</Link>
        <div className="social">
            <Link href="https://twitter.com/wuletaww" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} size='xl' style={{ color: "rgb(133, 191, 247)" }} />
            </Link>
            <Link href="https://www.linkedin.com/in/wuletaw-wonte" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' style={{ color: "rgb(41, 102, 188)" }} />
            </Link>
            <Link href="https://github.com/wuletawwonte/" target='_blank'>
                <FontAwesomeIcon icon={faGithub} size='xl' style={{ color: "white" }} />
            </Link>
            <Link href="https://www.facebook.com/wuletawbeza" target='_blank'>
                <FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: "#1877F2" }} />
            </Link>
        </div>
        <div className="source">        
            <Link href="https://github.com/wuletawwonte/wuletawwonte.com.git" className='source__link' target='_blank'>
                <FontAwesomeIcon icon={faCode} size='lg' />
            </Link>
        </div>
    </footer>
  )
}
