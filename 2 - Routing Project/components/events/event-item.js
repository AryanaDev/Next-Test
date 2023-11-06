import Link from 'next/link'
function EventItem(props){

    const {title, location, date, image, id} = props

    const realDate = new Date(date).toLocaleString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric',
    })

    const formatteAddress = location.replace(',','\n')

    const exploreLink = `/events/${id}`

    return <li>
        <img src={'/'+ image} alt={title}/>
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{realDate}</time>
                </div>
                <div>
                    <address>{formatteAddress}</address>
                </div>
            </div>
            <div>
                <Link  href={exploreLink} >Explore Event </Link>
            </div>
        </div>
    </li>
}
export default EventItem