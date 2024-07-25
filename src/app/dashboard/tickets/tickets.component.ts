import { Component } from '@angular/core';

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './tiket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    imports: [NewTicketComponent, TicketComponent],
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css'
})
export class TicketsComponent {
    tickets: Ticket[] = []

    onAddTicket({ title, request }: Omit<Ticket, 'id' | 'status'>) {
        const ticket: Ticket = { id: Math.random().toString(16), title, request, status: 'open' };
        this.tickets.push(ticket);
    }

    onCompletedTicket(id: string) {
        this.tickets = this.tickets.map(ticket => {
            if (ticket.id === id) {
                ticket.status = 'closed';
            }
            return { ...ticket };
        });
    }

    onEditTicket() { }
}
