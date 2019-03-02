import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AccueilComponent } from './components/site/accueil/accueil.component';
import { TeamComponent } from './components/site/team/team.component';
import { CompteComponent } from './components/site/compte/compte.component';
import { MatchComponent } from './components/site/match/match.component';
import { LigueComponent } from './components/site/ligue/ligue.component';
import { ChampionnatComponent } from './components/site/championnat/championnat.component';
import { InscriptionComponent } from './components/site/inscription/inscription.component';
import { ConnexionComponent } from './components/site/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    TeamComponent,
    CompteComponent,
    MatchComponent,
    LigueComponent,
    ChampionnatComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
