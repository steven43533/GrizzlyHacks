import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.css']
})
export class FaqComponent implements OnInit{
  faqs = [
    {
      question: 'What is Grizzly Hacks?',
      answer: 'Grizzly Hacks is a RSO of individuals who are interested in Hackathons and facilitate such events.',
      open: false
    },
    {
      question: 'What is a Hackathon?',
      answer: 'A Hackathon is an event where groups can work together to create a new product or solve a problem within a short amount of time.',
      open: false
    },
    {
      question: 'How can I apply for a Hackathon?',
      answer: 'You can apply for an upcoming Hackathon by submitting a form.',
      open: false
    }
  ];

  toggleAnswer(faq: any): void {
    faq.open = !faq.open; // Toggle open/close status
  }
  ngOnInit() {

  }
}
