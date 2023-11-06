import {getFeaturedEvents} from '../dummy-data'
import EventList from "../components/events/evnet-list";
function HomePage() {

    const featureEvents = getFeaturedEvents()

    return (
        <div>
            <EventList items={featureEvents}/>
        </div>
    );
}

export default HomePage;