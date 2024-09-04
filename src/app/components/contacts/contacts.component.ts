import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  fullUrl!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.fullUrl = this.router.url;
      // console.log(this.fullUrl); // Output the full URL
    });
    
  }
}
