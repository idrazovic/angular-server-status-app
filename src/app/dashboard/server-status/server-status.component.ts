import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-server-status',
    standalone: true,
    imports: [],
    templateUrl: './server-status.component.html',
    styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
    currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
    private destroyRef = inject(DestroyRef);

    constructor() {
        // effect(() => {
        //     console.log(this.currentStatus());
        // })
    }

    ngOnInit() {
        const interval = setInterval(() => {
            const random = Math.random();
            if (random < 0.5) {
                this.currentStatus.set('online');
            } else if (random < 0.9) {
                this.currentStatus.set('offline');
            } else {
                this.currentStatus.set('unknown');
            }
        }, 3000);

        this.destroyRef.onDestroy(() => {
            clearInterval(interval);
        });
    }
}
