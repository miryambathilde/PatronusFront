import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { CardDeportistaComponent } from "./components/card-deportista/card-deportista.component";
import { CatalogoDeportistasComponent } from "./components/catalogo-deportistas/catalogo-deportistas.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FiltrosComponent } from "./components/filtros/filtros.component";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilSponsorComponent } from './components/perfil-sponsor/perfil-sponsor.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileSponsorComponent } from "./components/profile-sponsor/profile-sponsor.component";
import { RegisterDeportistaComponent } from './components/register/register-deportista/register-deportista.component';
import { RegisterSponsorsComponent } from './components/register/register-sponsors/register-sponsors.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/deportistas", component: RegisterDeportistaComponent},
  {path: "register/sponsors", component: RegisterSponsorsComponent },
  {path: "sponsors", component: ProfileSponsorComponent },
  {path: "portfolio", component: PortfolioComponent },
  {path: "perfil/sponsors", component: PerfilSponsorComponent },
  {path: "catalogo-deportistas", component: CatalogoDeportistasComponent, children:[{path: "filtro", component: FiltrosComponent}]},
  {path: "deportista/:idDeportista", component: CardDeportistaComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [LoginGuard]},
  {path: "**", redirectTo: "/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
