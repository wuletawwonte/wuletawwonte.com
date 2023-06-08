import Link from "next/link"

const Header = () => {
  return (
    <header className="flex">
        <div>
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
            </ul>
        </nav>
    </header>
  )
}

export default Header