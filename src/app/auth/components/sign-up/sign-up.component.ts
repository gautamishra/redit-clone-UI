import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  SignupRequestPayloadDto } from '../../model/auth.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpform: FormGroup;
  signupRequestDto : SignupRequestPayloadDto =  new SignupRequestPayloadDto();

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.signUpform = new FormGroup ( {
      username: new FormControl('', Validators.required),
      email: new FormControl('' , [Validators.email,Validators.required]),
      password: new FormControl('' , Validators.required)
    } );
  }

  signup() {
    if(this.signUpform.valid){
      this.signupRequestDto.username = this.signUpform.get('username').value;
      this.signupRequestDto.email = this.signUpform.get('email').value;
      this.signupRequestDto.password = this.signUpform.get('password').value;

      this.authService.signup(this.signupRequestDto)
        .subscribe(() => {
          console.log("%c success " , "color:green");
        }, () => {
          console.log("%c failure " , "color:red");
        })
    }
  }
}
