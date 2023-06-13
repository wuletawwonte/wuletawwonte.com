import Link from 'next/link'
import './footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <footer>
        <Link href="/">&copy; Wuletaw Wonte</Link>
        <div className="social">
            <Link href="/">
                <FontAwesomeIcon icon={faTwitter} size='xl' style={{ color: "rgb(133, 191, 247)" }} />
            </Link>
            <Link href="/">
                <FontAwesomeIcon icon={faLinkedin} size='xl' style={{ color: "rgb(41, 102, 188)" }} />
            </Link>
            <Link href="/">
                <FontAwesomeIcon icon={faGithub} size='xl' style={{ color: "white" }} />
            </Link>
            <Link href="/">
                <FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: "#1877F2" }} />
            </Link>
        </div>
    </footer>
  )
}
