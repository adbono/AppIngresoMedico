import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFichaCardioComponent } from './components/create-ficha-cardio/create-ficha-cardio.component';
import { ListFichaCardioComponent } from './components/list-ficha-cardio/list-ficha-cardio.component';
import { ListItemsComponent } from './components/list-items/list-items.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'create', component: CreateFichaCardioComponent},
  { path: 'home', component: ListFichaCardioComponent},
  { path: 'create/:id', component: CreateFichaCardioComponent},
  { path: 'items', component: ListItemsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
