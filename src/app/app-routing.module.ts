import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/site/accueil/accueil.component';
import { ChampionnatComponent } from './components/site/championnat/championnat.component';
import { CompteComponent } from './components/site/compte/compte.component';
import { LigueComponent } from './components/site/ligue/ligue.component';
import { MatchComponent } from './components/site/match/match.component';
import { TeamComponent } from './components/site/team/team.component';
import { InscriptionComponent } from './components/site/inscription/inscription.component';
import { ConnexionComponent } from './components/site/connexion/connexion.component';

const routes: Routes = [

  { path: 'accueil', component: AccueilComponent },
  { path: 'championnat', component: ChampionnatComponent},
  { path: 'compte', component : CompteComponent},
  { path: 'ligue', component : LigueComponent},
  { path: 'match', component : MatchComponent},
  { path: 'team', component : TeamComponent},
  { path: 'inscription', component : InscriptionComponent},
  { path: 'connexion', component : ConnexionComponent},
  { path: '',
    redirectTo:'/accueil',
    pathMatch:'full'
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
