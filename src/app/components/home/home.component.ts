import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  texts = ['QUICKLY', 'BEAUTIFULLY'];
  currentIndex = 0;
  currentText = '';
  isDeleting = false;
  loopCount = 0;


  fullUrl!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.type();

    this.router.events.subscribe(() => {

      this.fullUrl = this.router.url;
      if(this.fullUrl === "/home"){
        // console.log(this.fullUrl); // Output the full URL

      }
    });
  }
  type() {
    const fullText = this.texts[this.currentIndex];

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    const animatedTextElement = document.getElementById('animatedText');
    if (animatedTextElement) {
      animatedTextElement.textContent = this.currentText;
    }

    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.currentText === fullText) {
      typeSpeed = 2000; // Pause at the end of the full text
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      typeSpeed = 500; // Pause before starting to type the next word
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
