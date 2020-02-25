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
  constructor(private s: OjasService, private fb: FormBuilder, private router: Router) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    uname: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit() {
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    let regDetails = {
      email: this.form.controls['email'].value,
      uname: this.form.controls['uname'].value,
      password: this.form.controls['password'].value
    };
    if (this.form.invalid) {
      return;
    }
    else {
      alert('Are you sure want to enter data ?');
      this.s.po(regDetails).subscribe((res)=>{
        console.log("register", res);
        this.router.navigate(['/home']);
      });
    }
  }
}
