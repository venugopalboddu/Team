import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  submitted = false;
  val: boolean;
  val1: boolean;
  name: any;
  email: any;
  data: any;
  status: boolean = false;
  constructor(private s: OjasService, private fb: FormBuilder, private router: Router) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    uname: ['', Validators.required],
    password: ['', Validators.required],
    course: ['', Validators.required]
  });

  courses: any = ['Manager', 'Teamlead', 'Employee'];
  ngOnInit() {
  }
  get f() { return this.form.controls; }

  changeCourse(e) {
    console.log(e.value);
    this.course.setValue(e.target.value, {
      onlySelf: true
    });
  }
  get course() {
    return this.form.get('course');
  }

  onSubmit() {
    this.submitted = true;
    this.name = this.form.controls['uname'].value,
    this.email = this.form.controls['email'].value
    this.s.getDetails().subscribe((res) => {
      //console.log("reg", res[0]);
      this.data = res;
    });
    let regDetails = {
      email: this.form.controls['email'].value,
      uname: this.form.controls['uname'].value,
      password: this.form.controls['password'].value,
      course: this.form.controls['course'].value
    };
    if (this.form.invalid) {
      this.val1 = true;
      return;
    }
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i].uname == this.name && this.data[i].email == this.email) {
        this.status = true;
        this.val1 = false;
        this.val = true;
        this.form.reset();
        this.submitted = false;
      }
    }
    if (this.status == false) {
        this.s.po(regDetails).subscribe((res)=>{
          console.log("register", res);
          this.router.navigate(['/home']);
        });
    }
  }
}
