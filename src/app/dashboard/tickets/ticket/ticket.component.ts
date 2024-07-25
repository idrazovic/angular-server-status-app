import { booleanAttribute, Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tiket.model';

@Component({
    selector: 'app-ticket',
    standalone: true,
    imports: [],
    templateUrl: './ticket.component.html',
    styleUrl: './ticket.component.css'
})
export class TicketComponent {
    data = input.required<Ticket>();
    completed = output<string>();
    detailsVisible = signal(false);

    onToggleDetails() {
        // this.detailsVisible.set(!this.detailsVisible());
        this.detailsVisible.update(wasVisible => !wasVisible);
    }

    onCompleted() {
        this.completed.emit(this.data().id);
    }
}
