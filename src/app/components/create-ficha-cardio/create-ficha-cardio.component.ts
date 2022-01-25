import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ficha-cardio',
  templateUrl: './create-ficha-cardio.component.html',
  styleUrls: ['./create-ficha-cardio.component.css']
})
export class CreateFichaCardioComponent implements OnInit {

  createFicha: FormGroup

  constructor(private fb: FormBuilder ) { 
    this.createFicha = fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
