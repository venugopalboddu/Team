import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OjasService } from '../ojas.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  submitted = false;
  val: boolean;
  val1: boolean;
  name: any;
  pass: any;
  data: any;
  man: any;
  status: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private s: OjasService) { }
  form = this.fb.group({
    uname: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit() {
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
      this.name = this.form.controls['uname'].value,
      this.pass = this.form.controls['password'].value
    this.s.getDetails().subscribe((res) => {
      this.data = res;
      console.log("test", this.data);
    });
    if (this.form.invalid) {
      this.val1 = true;
      return;
    } if (this.name == "admin" && this.pass == "admin") {
      this.s.sendToken(this.form.value.uname);
      this.router.navigate(['/admin']);
    }
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].uname == this.name && this.data[i].password == this.pass && this.data[i].course == "1: Manager") {
        this.s.sendToken(this.form.value.uname);
        this.router.navigate(['/manager']);
        this.status = true;
      } else if (this.data[i].uname == this.name && this.data[i].password == this.pass && this.data[i].course == "2: Teamlead") {
        this.s.sendToken(this.form.value.uname);
        this.router.navigate(['/teamlead']);
        this.status = true;
      }
      else if (this.data[i].uname == this.name && this.data[i].password == this.pass && this.data[i].course == "3: Employee") {
        this.s.sendToken(this.form.value.uname);
        this.router.navigate(['/employee']);
        this.status = true;
      }
    }
    if (this.status == false) {
      this.val1 = false;
      this.val = true;
      this.form.reset();
      this.submitted = false;
    }
  }
}
