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
  name: any;
  pass: any;
  data: any;
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
      console.log("reg", res[0]);
      this.data = res;
    });
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i].uname == this.name && this.data[i].password == this.pass) {
        alert("login successfull");
        this.status = true;
      }
    }
    if (this.status == false) {
      this.val = true;
      this.form.reset();
      this.submitted = false;
    }
  }
}
