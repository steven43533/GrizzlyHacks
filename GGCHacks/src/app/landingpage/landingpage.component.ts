import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.autoScrollSponsors();
    }, 500); // Delay to ensure content is ready
  }
  

  autoScrollSponsors(): void {
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');

    if (scrollingWrapper) {
        function seamlessScroll() {
            scrollingWrapper.scrollLeft += 2; // Increment scrollLeft

            // Check if scrolled past half the scrollable width
            if (scrollingWrapper.scrollLeft >= scrollingWrapper.scrollWidth / 2) {
                scrollingWrapper.scrollLeft = 0; // Reset to the start of the duplicated content
            }
        }

        setInterval(seamlessScroll, 20); // Adjust speed as needed
    } else {
        console.log('Scrolling wrapper not found.');
    }
}


  
}
