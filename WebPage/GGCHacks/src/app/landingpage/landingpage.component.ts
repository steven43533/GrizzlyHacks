import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
