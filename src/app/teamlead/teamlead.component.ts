import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';

@Component({
  selector: 'app-teamlead',
  templateUrl: './teamlead.component.html',
  styleUrls: ['./teamlead.component.css']
})
export class TeamleadComponent implements OnInit {

  fname: string;

  constructor(private s: OjasService) { 
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }
  ngOnInit() {
    this.fname = localStorage.getItem("LoggedInUser");
    console.log('username', this.fname);
  }
}
