import { Injectable } from '@angular/core';
import { Players } from '../models/players.model';
import { DataBaseService } from './data-base.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private dataService:DataBaseService) { }


  setPlayer(myPlayers:Players[]){
    this.players=myPlayers
  }
  obtainPlayer(){
    return this.dataService.loadPlayer()
  }

  findPlayer(indice:number){
    let player:Players=this.players[indice]

    return player
  }
  players:Players[]=[]

  addPlayerService(miplayer:Players){

    this.players.push(miplayer)

    this.dataService.savePlayer(this.players)
  }
  updatePlayers(indice:number, player:Players){

    let playerMod=this.players[indice]

    playerMod.idJugador=player.idJugador
    playerMod.codigo=player.codigo
    playerMod.nombres=player.nombres
    playerMod.camiseta=player.camiseta
    playerMod.campeonatos=player.campeonatos
    playerMod.idEquipo=player.idEquipo
    playerMod.codigoEquipo=player.codigoEquipo
    playerMod.nombreEquipo=player.nombreEquipo

    this.dataService.savePlayer(this.players)

  }

  deletePlayer(indice:number){
    this.players.splice(indice,1)
    this.dataService.delete(indice)
    if (this.players != null) {
      this.dataService.savePlayer(this.players)
    }
  }



}
