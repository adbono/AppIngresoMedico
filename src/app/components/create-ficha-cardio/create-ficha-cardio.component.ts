import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FichaCardioService } from 'src/app/service/ficha-cardio.service';

@Component({
  selector: 'app-create-ficha-cardio',
  templateUrl: './create-ficha-cardio.component.html',
  styleUrls: ['./create-ficha-cardio.component.css']
})
export class CreateFichaCardioComponent implements OnInit {

  createFicha: FormGroup
  id: string | null
  submitted = false
  loading = false
  titulo = 'Alta de Ficha'
  factoresriesgo: string[] = []

  constructor(private fb: FormBuilder, 
              private _fichaService: FichaCardioService,
              private router: Router, 
              private toastr: ToastrService,
              private aRoute: ActivatedRoute ) { 
    this.createFicha = fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      diasInternacion: [0, Validators.required],
      internacionesPrevias: [0, Validators.required],
      factoresriesgo: ['', Validators.required],
      antecedentes: ['', Validators.required],
      claseFuncional: ['', Validators.required],
      medicacionHabitual: ['', Validators.required],
      formaPresentacion: ['', Validators.required],
      causaDescompensante: ['', Validators.required],
      ritmo: ['', Validators.required],
      frecuencia: ['', Validators.required],
      bcri: ['', Validators.required],
      fsvi: ['', Validators.required],
      psap: ['', Validators.required],
      urea: ['', Validators.required],
      htohb: ['', Validators.required],
      creatinina: ['', Validators.required],
      troponinaus: ['', Validators.required],
      dimerod: ['', Validators.required],
      pcr: ['', Validators.required],
      vsg: ['', Validators.required],
      potasio: ['', Validators.required],
      sodio: ['', Validators.required],
      cloro: ['', Validators.required],
      tratamiento: ['', Validators.required],
      bcia: [false, Validators.required],
      iotarm: [false, Validators.required],
      dialisis: [false, Validators.required],
      cditrc: [false, Validators.required],
      obito: [false, Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
    
  }

  ngOnInit(): void {
    this.cargarFicha()
    this.getItems()
  }

  getItems(){
    this._fichaService.getFactoresRiesgo().subscribe(data =>{
      this.factoresriesgo = []
      data.forEach((element: any) => {
        this.factoresriesgo.push(element.payload.doc.data().nombre);
      })
    })
  }

  onSubmit(){
    if (this.createFicha.invalid) {
      this.getFormValidationErrors()
      return
    }
    var ficha: any = this.createFicha.value
    if(this.id === null){  
      ficha = {...ficha, fechaalta: new Date(), fechaactualizacion: new Date()}
      this.agregarFicha(ficha)
    }else{
      ficha = {...ficha, fechaactualizacion: new Date()}
      this.editarFicha(this.id)
    }
  }
  agregarFicha(ficha: any){
    this.loading = true
    this._fichaService.agregarFicha(ficha)
    .then(() => {
      this.toastr.success('La ficha fue registrada con exito', '', {positionClass: 'toast-bottom-center'});
      this.loading = false
      this.router.navigate(['/list-fichaCardio'])})
    .catch(() => this.toastr.error('Hubo un error al crear la ficha', '', {positionClass: 'toast-bottom-center'}))
  }

  editarFicha(id: string){
    this.loading = true
    var ficha: any = this.createFicha.value
    this._fichaService.actualizarFicha(id, ficha)
    .then(() => {
      this.toastr.success('La ficha fue actualizada con exito', '', {positionClass: 'toast-bottom-center'});
      this.loading = false
      this.router.navigate(['/list-fichaCardio'])})
    .catch(() => this.toastr.error('Hubo un error al actualizar la ficha', '', {positionClass: 'toast-bottom-center'}))
  }

  cargarFicha() {
    if(this.id !== null){
      this.loading = true
      this.titulo = 'Editar Ficha'
      this._fichaService.getFicha(this.id).subscribe(data => {
        const {
          nombre, edad, sexo, diasInternacion, internacionesPrevias,
          factoresRiesgo, antecedentes, claseFuncional, medicacionHabitual, 
          formaPresentacion, causaDescompensante, ritmo, frecuencia, 
          bcri, fsvi, psap, urea, htohb, creatinina, troponinaus, dimerod, 
          pcr, vsg, potasio, sodio, cloro, tratamiento, bcia, iotarm, dialisis, 
          cditrc, obito
        } = data.payload.data()
        this.createFicha.setValue({
          nombre, edad, sexo, diasInternacion, internacionesPrevias,
          factoresRiesgo, antecedentes, claseFuncional, medicacionHabitual, 
          formaPresentacion, causaDescompensante, ritmo, frecuencia, 
          bcri, fsvi, psap, urea, htohb, creatinina, troponinaus, dimerod, 
          pcr, vsg, potasio, sodio, cloro, tratamiento, bcia, iotarm, dialisis, 
          cditrc, obito
        })
        this.loading = false
      })
    }
  }

  getFormValidationErrors() {
    const errores: string[] = []
    Object.keys(this.createFicha.controls).forEach(key => {
      const controlErrors: ValidationErrors | null = this.createFicha.get(key)!.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          // var element = document.querySelector(`input[formControlName='${key}']`);
          // element?.classList.add('is-invalid')
        //console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        errores.push(" "+key)
        });
      }
    });

    if(errores.length != 0){
      this.toastr.error(`Error! falta completar los campos \n ${errores.toString()}`, '', {positionClass: 'toast-bottom-center'})
    }
  }

}
