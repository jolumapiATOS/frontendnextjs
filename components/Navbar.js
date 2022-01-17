import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image height={120} width={200} id="logo-nav" alt="nextJS logo" src='/logo.svg'  />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Me</a></Link>
            <Link href="/signUp"><a>Sign Up</a></Link>
            <Link href="/newMessage"><a>New message</a></Link>
            <Link href="/messages"><a>All messages</a></Link>
        </nav>
     );
}
 
export default Navbar;