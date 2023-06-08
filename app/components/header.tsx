import Link from "next/link"

const Header = () => {

    return (
        <header className="flex justify-between pt-4 pb-10 leading-9 text-xl">
            <div> 
                <Link href="/" className="shadow-none no-underline font-bold text-center leading-[0.5rem] tracking-widest">Wuletaw Wonte</Link>
            </div>

            <nav>
                <ul className="flex items-center gap-4">
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