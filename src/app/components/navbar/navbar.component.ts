import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titulo: string
  usuario: any

  constructor(private titleService: Title, private _authService: AuthService, private router: Router) { 
   this.titulo = this.titleService.getTitle()
  }

  ngOnInit(): void {
    this.usuario = null
    this.getUserData()
  }

  getUserData(){
    this._authService.getCurrentUser().then(user => {
      if(user != null) this.usuario = user
      else this.router.navigate(['/list-fichaCardio'])
    })
  }

  logout(){
    this._authService.logout().then(() => {
      this.ngOnInit()
    })
  }

  login(){
    this._authService.signInGoogle().then(() => window.location.reload())
  }

}
