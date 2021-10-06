import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { CardDeportistaComponent } from "./components/card-deportista/card-deportista.component";
import { CatalogoDeportistasComponent } from "./components/catalogo-deportistas/catalogo-deportistas.component";
import { CreateNewComponent } from './components/create-new/create-new.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProfileAthleteComponent } from './components/edit-profile-athlete/edit-profile-athlete.component';
import { EditProfileSponsorComponent } from './components/edit-profile-sponsor/edit-profile-sponsor.component';
import { EmailPassComponent } from './components/email-pass/email-pass.component';
import { EnvioPropuestaComponent } from './components/envio-propuesta/envio-propuesta.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FiltrosComponent } from "./components/filtros/filtros.component";
import { HomeComponent } from './components/home/home.component';
import { ListadoOfertasComponent } from './components/listado-ofertas/listado-ofertas.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { OffersMadeComponent } from './components/offers-made/offers-made.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileSponsorComponent } from "./components/profile-sponsor/profile-sponsor.component";
import { RegisterDeportistaComponent } from './components/register/register-deportista/register-deportista.component';
import { RegisterSponsorsComponent } from './components/register/register-sponsors/register-sponsors.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { TokensRegisterComponent } from './components/tokens-register/tokens-register.component';
import { LoginGuard } from './guards/login.guard';
import { RoleAthleteGuard } from './guards/role-athlete.guard';
import { RoleSponsorGuard } from './guards/role-sponsor.guard';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/deportistas", component: RegisterDeportistaComponent},
  {path: "register/sponsors", component: RegisterSponsorsComponent },
  {path: "tokens-register/:idDeportista", component: TokensRegisterComponent },
  {path: "portfolio", component: PortfolioComponent, canActivate: [LoginGuard, RoleSponsorGuard] },
  {path: "editprofile/sponsor", component: EditProfileSponsorComponent, canActivate: [LoginGuard, RoleSponsorGuard] },
  {path: "editprofile/athlete", component: EditProfileAthleteComponent, canActivate: [LoginGuard, RoleAthleteGuard] },
  {path: "catalogo-deportistas", component: CatalogoDeportistasComponent, canActivate: [LoginGuard, RoleSponsorGuard], children:[{path: "filtro", component: FiltrosComponent}]},
  {path: "offers", component: ListadoOfertasComponent, canActivate: [LoginGuard, RoleAthleteGuard]},
  {path: "offers-made", component: OffersMadeComponent, canActivate: [LoginGuard, RoleSponsorGuard]},
  {path: "envio-propuesta/:idDeportista/:quantitydemand", component: EnvioPropuestaComponent, canActivate: [LoginGuard, RoleSponsorGuard]},
  {path: "deportista/:idDeportista", component: CardDeportistaComponent, canActivate: [LoginGuard]},
  {path: "news", component: NewsComponent},
  {path: "create-new", component: CreateNewComponent, canActivate: [LoginGuard, RoleAthleteGuard]},
  {path: "email-pass", component: EmailPassComponent},
  {path: "reset-pass/:token/:role/:idSponsor", component: ResetPassComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [LoginGuard]},
  {path: "favorites", component: FavoritesComponent, canActivate: [LoginGuard]},
  {path: "**", redirectTo: "/home"},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
