import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  event: any;
  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues) {
    const event = {
      name: formValues.name,
      date: new Date(formValues.date),
      price: formValues.price,
      time: formValues.time,
      imageUrl: formValues.imageUrl,
      onlineUrl: formValues.onlineUrl,
      location: {
        address: formValues.address,
        city: formValues.city,
        country: formValues.country,
      },
    };
    this.eventService.saveEvent(event).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  ngOnInit(): void {
    this.event = {
      name: 'Ng Event',
      date: '8/8/2028',
      time: '10am',
      price: 799.99,
      location: {
        address: '123 Brite Ave',
        city: 'Scarsdale',
        country: 'United States',
      },
      imageUrl: 'https://miro.medium.com/max/630/1*15CYVZdpsxir8KLdxEZytg.png',
    };
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
