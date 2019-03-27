import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private userService: UserService
  ) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({

      question: ['', Validators.required],
      answer: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      aboutMe: ['', Validators.required]
    });
  }
  get x() {
    let updateValues = this.updateForm.controls;
    console.log(updateValues);
    return updateValues;
  }

  onUpdate() {
    console.log(this.updateForm.controls);

    this.userService.updated(this.updateForm.value)
      .pipe(first())
      .subscribe(resp=> {
        this.router.navigate(['/login']);
      },
        error => {
          //validate
          console.log('🛑 could not update, sorry 🛑')
        })
  }
}