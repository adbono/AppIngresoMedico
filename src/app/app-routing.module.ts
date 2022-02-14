import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFichaCardioComponent } from './components/create-ficha-cardio/create-ficha-cardio.component';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';
import { ListFichaCardioComponent } from './components/list-ficha-cardio/list-ficha-cardio.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-fichaCardio', pathMatch: 'full'},
  { path: 'create-fichaCardio', component: CreateFichaCardioComponent},
  { path: 'list-fichaCardio', component: ListFichaCardioComponent},
  { path: 'create-fichaCardio/:id', component: CreateFichaCardioComponent},
  { path: 'list-items', component: ListItemsComponent},
  { path: '**', redirectTo: 'list-fichaCardio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
