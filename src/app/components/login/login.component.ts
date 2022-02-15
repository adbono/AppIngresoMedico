import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AuthService } from 'src/app/service/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private location: Location){}

  ngOnInit(): void {
    this._authService.signInGoogle().then(() => this.location.back())
  }

}
