import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequestPayloadDto } from '../../model/auth.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isError: boolean = false;
  loginRequestDTO : LoginRequestPayloadDto = new LoginRequestPayloadDto();

  constructor(private fb: FormBuilder,
    private authService:AuthService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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
