import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  team: any;
  adata: any;
  arow: any = [];
  tdata: any;
  trow: any = [];
  edata: any;
  erow: any = [];

  constructor(private s: OjasService) {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.s.getDetails().subscribe((res) => {
      console.log("Team", res);
      this.team = res;
      for (let i = 0; i < this.team.length; i++) {
        if (this.team[i].course == "1: Manager") {
          this.adata = this.team[i];
          this.arow.push(this.adata);
          console.log("admintest", this.arow);
        }
      }

      for (let i = 0; i < this.team.length; i++) {
        if (this.team[i].course == "2: Teamlead") {
          this.tdata = this.team[i];
          this.trow.push(this.tdata);
          console.log("tltest", this.trow);
        }
      }
      for (let i = 0; i < this.team.length; i++) {
        if (this.team[i].course == "3: Employee") {
          this.edata = this.team[i];
          this.erow.push(this.edata);
          console.log("emptest", this.erow);
        }
      }

    });
  }
  del(d) {
    alert('Are you sure to delete ?')
    this.s.de(d.id).subscribe(res=>{
      console.log(res);
    });
  }
}
