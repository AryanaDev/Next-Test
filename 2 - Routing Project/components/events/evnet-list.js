import EventItem from '/components/events/event-item'
function EventList(props){

    const {items} = props

    return(
        <ul>
            {items.map(event => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    date={event.date}
                    title={event.title}
                    location={event.location}
                    image={event.mage}
            />))}
        </ul>
    )
}

export default EventList