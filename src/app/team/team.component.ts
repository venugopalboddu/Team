import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private router: Router) { }
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
    if (this.form.invalid) {
      return;
    }
    else if (this.name == "admin" && this.pass == "admin") {
      this.router.navigate(['/admin']);
      this.val = false;
    } 
    else if (this.name == "manager" && this.pass == "manager") {
      this.router.navigate(['/manager']);
      this.val = false;
    }
    else if (this.name == "teamlead" && this.pass == "teamlead") {
      this.router.navigate(['/teamlead']);
      this.val = false;
    }
    else if (this.name == "employee" && this.pass == "employee") {
      this.router.navigate(['/employee']);
      this.val = false;
    }
   else {
      this.val = true;
      this.form.reset();
      this.submitted = false;
    }
  }
}
