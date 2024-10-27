import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.css']
})
export class FaqComponent implements OnInit{
  faqs = [
    {
      question: 'What is HackGGC?',
      answer: 'HackGGC is a 10-hour hackathon hosted on Saturday, November 9th, 2024, that is open to first time and returning hackers! It is a free event where students gather to build a project showing off their creativity, critical thinking and skills. Participants are allowed to utilize any technology that helps solve the problem. By participating, your network, portfolio and skills will broaden. With various workshops to aid the hackers in their journey, you will have the opportunity to build something new and fun! ',
      open: false
    },
    {
      question: 'Will HackGGC be fully in-person?',
      answer: 'Yes, in B Atrium at Georgia Gwinnett College.',
      open: false
    },
    {
      question: 'It’s my first hackathon, can I attend?',
      answer: 'Yes! Experience is not required. Hackathons are an open, creative, and learning environment for everyone. If you are new to hackathons, the Beginner Hacker track may be for you!',
      open: false
    },
    {
      question: 'Do I have to pay?',
      answer: 'Admission is free, food is free, prizes are free, gained experience and knowledge is also free!!',
      open: false
    },
    {
      question: 'Can I attend?',
      answer: 'Any student over the age of 18 enrolled in any college or university is allowed to participate. If you are younger than 18, but a GGC student, you can still participate. ',
      open: false
    },
    {
      question: 'What do I need for the event?',
      answer: 'A laptop, your laptop charger, and your creativity!',
      open: false
    },
    {
      question: 'What projects can I make?',
      answer: 'Anything that your creativity cooks up! There are five tracks to give direction, and mentors are also available to help. There is a beginner’s track and a general track that your team can choose between. Teams, however, are not allowed to submit past projects that were worked on before the hackathon!!',
      open: false
    },
    {
      question: 'How do teams work?',
      answer: 'Team sizes are up to 4 people. You can select your team when you register, or you can also form them during the hackathon! Each hacker must register for the hackathon individually.',
      open: false
    },
    {
      question: 'What if I don’t have a team?',
      answer: 'No worries, we will have a time before the hacking starts for you to meet new people to work with.',
      open: false
    },
    {
      question: 'I have more questions…',
      answer: 'Join our discord and post your questions in the #questions channel!',
      open:false
    }
  ];

  toggleAnswer(faq: any): void {
    faq.open = !faq.open; // Toggle open/close status
  }
  ngOnInit() {

  }
}
