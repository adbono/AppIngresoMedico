import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFichaCardioComponent } from './components/create-ficha-cardio/create-ficha-cardio.component';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';
import { ListFichaCardioComponent } from './components/list-ficha-cardio/list-ficha-cardio.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-fichaCardio', pathMatch: 'full'},
  { path: 'create-fichaCardio', component: CreateFichaCardioComponent},
  { path: 'list-fichaCardio', component: ListFichaCardioComponent},
  { path: 'edit-fichaCardio/:id', component: CreateUsuarioComponent},
  { path: '**', redirectTo: 'list-usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
