import { AfterViewInit, Component, ElementRef, output, viewChild } from '@angular/core';

import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    imports: [ControlComponent, ButtonComponent, FormsModule],
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
    // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    add = output<{ title: string, request: string }>();
    enteredTitle = '';
    enteredRequest = '';

    onSubmit() {
        this.add.emit({ title: this.enteredTitle, request: this.enteredRequest });
        this.enteredTitle = '';
        this.enteredRequest = '';
        // this.form().nativeElement.reset();
    }

    ngAfterViewInit() {
        console.log(this.form());
    }
}
