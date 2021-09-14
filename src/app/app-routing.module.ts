import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoDeportistasComponent } from "./components/catalogo-deportistas/catalogo-deportistas.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileSponsorComponent } from "./components/profile-sponsor/profile-sponsor.component";
import { RegisterDeportistaComponent } from './components/register/register-deportista/register-deportista.component';
import { RegisterSponsorsComponent } from './components/register/register-sponsors/register-sponsors.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/deportistas", component: RegisterDeportistaComponent},
  {path: "register/sponsors", component: RegisterSponsorsComponent },
  { path: "sponsors", component: ProfileSponsorComponent },
  { path: "catalogo-deportistas", component: CatalogoDeportistasComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [LoginGuard]},
  {path: "**", redirectTo: "/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
