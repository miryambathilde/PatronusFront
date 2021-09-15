import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterDeportistaComponent } from './components/register/register-deportista/register-deportista.component';
import { RegisterSponsorsComponent } from './components/register/register-sponsors/register-sponsors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileSponsorComponent } from './components/profile-sponsor/profile-sponsor.component';
import { CatalogoDeportistasComponent } from './components/catalogo-deportistas/catalogo-deportistas.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PerfilSponsorComponent } from './components/perfil-sponsor/perfil-sponsor.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterDeportistaComponent,
    RegisterSponsorsComponent,
    DashboardComponent,
    ProfileSponsorComponent,
    CatalogoDeportistasComponent,
    FiltrosComponent,
    PortfolioComponent,
    PerfilSponsorComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
