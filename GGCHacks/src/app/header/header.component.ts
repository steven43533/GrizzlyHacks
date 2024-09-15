import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  constructor(public router: Router, public auth: AuthService, private renderer: Renderer2) { }

  toggleMenu() {
    const menu = document.getElementById('navmenu');
    if (menu) {
      if (this.isCollapsed) {
        this.renderer.addClass(menu, 'show'); // Adds the 'show' class to display the menu
      } else {
        this.renderer.removeClass(menu, 'show'); // Removes the 'show' class to hide the menu
      }
      this.isCollapsed = !this.isCollapsed;
    }
  }


  ngOnInit() {

  }
}
