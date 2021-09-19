import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { CardDeportistaComponent } from "./components/card-deportista/card-deportista.component";
import { CatalogoDeportistasComponent } from "./components/catalogo-deportistas/catalogo-deportistas.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileAthleteComponent } from './components/edit-profile-athlete/edit-profile-athlete.component';
import { EditProfileSponsorComponent } from './components/edit-profile-sponsor/edit-profile-sponsor.component';
import { EnvioPropuestaComponent } from './components/envio-propuesta/envio-propuesta.component';
import { FiltrosComponent } from "./components/filtros/filtros.component";
import { HomeComponent } from './components/home/home.component';
import { ListadoOfertasComponent } from './components/listado-ofertas/listado-ofertas.component';
import { LoginComponent } from './components/login/login.component';
import { OffersMadeComponent } from './components/offers-made/offers-made.component';
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
  {path: "editprofile/sponsor", component: EditProfileSponsorComponent },
  {path: "editprofile/athlete", component: EditProfileAthleteComponent },
  {path: "catalogo-deportistas", component: CatalogoDeportistasComponent, children:[{path: "filtro", component: FiltrosComponent}]},
  {path: "offers", component: ListadoOfertasComponent},
  {path: "offers-made", component: OffersMadeComponent},
  {path: "envio-propuesta/:idDeportista", component: EnvioPropuestaComponent},
  {path: "deportista/:idDeportista", component: CardDeportistaComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [LoginGuard]},
  {path: "**", redirectTo: "/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
