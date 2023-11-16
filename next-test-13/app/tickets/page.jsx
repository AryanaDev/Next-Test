import TicketList from "@/app/tickets/TicketList";
export default function Tickets(){
    return(
        <main>
            <nav>
                <h2>Tickets</h2>
                <p><small>Currently Open Tickets</small></p>
            </nav>

            <TicketList/>
        </main>
    )
}