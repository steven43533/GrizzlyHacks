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
    // Handle sponsor scrolling
    this.autoScrollSponsors();

    // Handle feature header animations
    this.initFeatureHeaderScroll();
  }

  autoScrollSponsors(): void {
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');

    if (scrollingWrapper) {
      const seamlessScroll = () => {
        scrollingWrapper.scrollLeft += 2; // Increment scrollLeft
        if (scrollingWrapper.scrollLeft >= scrollingWrapper.scrollWidth / 2) {
          scrollingWrapper.scrollLeft = 0; // Reset to the start of the duplicated content
        }
      };
      setInterval(seamlessScroll, 20); // Adjust speed as needed
    } else {
      console.log('Scrolling wrapper not found.');
    }
  }

  initFeatureHeaderScroll(): void {
    const featureHeaderSection = document.querySelector('.features-header-section');

    if (featureHeaderSection) {
      const handleScroll = () => {
        const rect = featureHeaderSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          featureHeaderSection.classList.add('in-view');
        } else {
          featureHeaderSection.classList.remove('in-view');
        }
      };

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Initial check in case it's already in view
      handleScroll();
    } else {
      console.log('Feature header section not found.');
    }
  }
}
