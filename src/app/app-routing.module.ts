import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFichaCardioComponent } from './components/create-ficha-cardio/create-ficha-cardio.component';
import { ListFichaCardioComponent } from './components/list-ficha-cardio/list-ficha-cardio.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { LoginComponent } from './components/login/login.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', redirectTo: 'list-fichaCardio', pathMatch: 'full'},
  { path: 'create-fichaCardio', component: CreateFichaCardioComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'list-fichaCardio', component: ListFichaCardioComponent},
  { path: 'create-fichaCardio/:id', component: CreateFichaCardioComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'list-items', component: ListItemsComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'list-fichaCardio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
