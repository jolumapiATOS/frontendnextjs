import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image height={120} width={200} id="logo-nav" src='/logo.svg' alt="" srcset="" />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;