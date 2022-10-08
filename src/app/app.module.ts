import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayersComponent } from './pages/players/players.component';
import { InfoPlayersComponent } from './components/info-players/info-players.component';
import { UpdatePlayersComponent } from './components/update-players/update-players.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from './services/data-base.service';
import { PlayerServiceService } from './services/player-service.service';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes:Routes=[

  {path:'', component: PlayersComponent},
  {path:'update/:id', component: UpdatePlayersComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    InfoPlayersComponent,
    UpdatePlayersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataBaseService, PlayerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
