import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  backgroundUrl = "https://i.postimg.cc/YqVxGrVt/1698434506871-1.jpg";
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
