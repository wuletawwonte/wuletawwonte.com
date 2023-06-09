import "./header.scss";
import Link from "next/link"

const Header = () => {

    return (
        <header>
            <div className="logo"> 
                <Link href="/">Wuletaw Wonte</Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header