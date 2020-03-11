/*

things to do validation
make look better

 */

import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  constructor( private fb: FormBuilder, public auth: AuthService) {
    this.createAccountForm = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[e]+[d]+[u]$')]],
      password: ['', [Validators.required]],
      cPassword:  ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  doPasswordsMatch(): boolean {
    return this.createAccountForm.get('password') === this.createAccountForm.get('cPasswrod');
  }

  getFirstName() {
    return this.createAccountForm.get('firstName');
  }

  getLastName() {
    return this.createAccountForm.get('lastName');
  }

  getEmail() {
    return this.createAccountForm.get('email');
  }

  getPassword() {
    return this.createAccountForm.get('password');
  }

  getCPassword() {
    return this.createAccountForm.get('cPassword');
  }


}

class PasswordValidator implements Validator {

  registerOnValidatorChange(fn: () => void): void {

  }

  validate(control: AbstractControl): ValidationErrors | null {
    return undefined;
  }

}
