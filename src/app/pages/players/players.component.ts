import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from 'src/app/models/players.model';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private router:Router, private playerService:PlayerServiceService) { }

  ngOnInit(): void {
    this.playerService.obtainPlayer().subscribe(miplayers=>{
      this.players=Object.values(miplayers)

      this.playerService.setPlayer(this.players)

    })
  }
  back(){
    this.router.navigate([""])
  }
  refresh():void{
    window.location.reload()
  }

  crearPlayer(){
    let miplayer = new Players(this.inputIdPlayer, this.inputCode, this.inputName, this.inputTshirt, this.inputChampionship, this.inputTeam, this.inputCodeTeam, this.inputNameTeam)


    this.playerService.addPlayerService(miplayer)
    this.router.navigate([""])
  }
  players:Players[]=[]

  inputIdPlayer: number=0;
  inputCode:string=''
  inputName:string=''
  inputTshirt:string=''
  inputChampionship:string=''
  inputTeam:number=0
  inputCodeTeam: string='';
  inputNameTeam: string='';

}
