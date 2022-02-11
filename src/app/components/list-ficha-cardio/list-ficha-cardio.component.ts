import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { FichaCardioService } from 'src/app/service/ficha-cardio.service';

@Component({
  selector: 'app-list-ficha-cardio',
  templateUrl: './list-ficha-cardio.component.html',
  styleUrls: ['./list-ficha-cardio.component.css']
})
export class ListFichaCardioComponent implements OnInit {

  fichas: any[] = []

  constructor(private _listFichaCardio: FichaCardioService, private toastr: ToastrService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.getFichas()
  }

  getFichas(){
    this._listFichaCardio.getFichas().subscribe(data =>{
      this.fichas = []
      data.forEach((element: any) => {
        this.fichas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.fichas)
    })
  }

}
