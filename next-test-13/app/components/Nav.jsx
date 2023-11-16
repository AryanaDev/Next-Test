import Link from 'next/link'
import Image from "next/image";
import P_logo from '../components/P_logo.png'

export default function Navbar() {
    return (
        <nav>
            <Image src={P_logo}
                   alt='Aryana Dev'
            />
            <h2>Aryana Dev</h2>
            <Link href='/'>Dashboard</Link>
            <br/>
            <Link href='/tickets'>Tickets</Link>
        </nav>
    )
}