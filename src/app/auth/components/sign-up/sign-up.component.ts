import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  SignupRequestPayloadDto } from '../../model/auth.model';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpform: FormGroup;
  signupRequestDto : SignupRequestPayloadDto =  new SignupRequestPayloadDto();

  constructor(private authService:AuthService,
    private toastr: ToastrService,
    private router: Router) { }

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
        .subscribe((msg) => {
          console.log("%c success " , "color:green");
          this.toastr.success(msg , 'Success');
          this.router.navigate(['/login'], {queryParams: {
            registered: 'true'
          }})
        }, () => {
          console.log("%c failure " , "color:red");
          this.toastr.error('Registration Failed! Please try again');
        })

    }
  }
}
