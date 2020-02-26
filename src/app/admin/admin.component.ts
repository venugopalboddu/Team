import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private s: OjasService) {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
   }
  ngOnInit() {
  }
}
