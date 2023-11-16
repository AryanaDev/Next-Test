
import Link from "next/link";

export default function Home() {
    return (
        <main className=" ">
            <h2>Dashboard</h2>
            <p>Lorem ipsum, dolor sit amet constructor adipisicing elit...</p>

            <div className='flex justify-center my-8'>
                <Link href='/tickets'>
                    <button className='btn-primary'>View Tickets</button>
                </Link>
            </div>

            <h2>Company Update</h2>

            <div className='card'>
                <h3>New member of the web dev team...</h3>
                <p>Lorem ipsum dolor sit amet constructor adipisicing elit...</p>
            </div>
            <div className='card'>
                <h3>New Website live!</h3>
                <p>Lorem ipsum dolor sit amet constructor adipisicing elit...</p>
            </div>
        </main>
    )
}
