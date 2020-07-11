import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequestPayloadDto } from '../../model/auth.model';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isError: boolean = false;
  loginRequestDTO : LoginRequestPayloadDto = new LoginRequestPayloadDto();
  registerSuccessMessage: string;

  constructor(private fb: FormBuilder,
    private authService:AuthService, 
    private activatedRoute:ActivatedRoute, 
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if(!!params.registered && params.registered === 'true') {
        this.toastr.success('Signup Successful');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
      }
    })
  }

  login = () => {
    if(this.loginForm.valid){
      this.loginRequestDTO.username = this.loginForm.get('username').value;
      this.loginRequestDTO.password = this.loginForm.get('password').value;

      this.authService.login(this.loginRequestDTO).subscribe(data => {
        console.log('Login successful');
      });
    }
  }

}
