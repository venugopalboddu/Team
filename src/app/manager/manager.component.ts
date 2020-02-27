import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

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
