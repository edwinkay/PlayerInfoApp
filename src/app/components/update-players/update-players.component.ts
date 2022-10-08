import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Players } from 'src/app/models/players.model';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-update-players',
  templateUrl: './update-players.component.html',
  styleUrls: ['./update-players.component.scss']
})
export class UpdatePlayersComponent implements OnInit {

  constructor(private router:Router,private playerService:PlayerServiceService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion'])

    this.players=this.playerService.players

    this.indice=this.route.snapshot.params['id']

    let player:Players=this.playerService.findPlayer(this.indice)

    this.inputIdPlayer=player.idJugador
    this.inputCode=player.codigo
    this.inputName=player.nombres
    this.inputTshirt=player.camiseta
    this.inputTeam=player.idEquipo
    this.inputChampionship=player.campeonatos
    this.inputCodeTeam=player.codigoEquipo
    this.inputNameTeam=player.nombreEquipo
  }

  players:Players[]=[]

  back(){
    this.router.navigate([""])
  }
  updatePlayer(){
    if (this.accion==1) {

    let miPlayer=new Players(this.inputIdPlayer, this.inputCode, this.inputName, this.inputTshirt, this.inputChampionship, this.inputTeam, this.inputCodeTeam, this.inputNameTeam)

    this.playerService.updatePlayers(this.indice, miPlayer)
    this.router.navigate([""])
  }
  }
  playerDelete() {
    this.playerService.deletePlayer(this.indice)
    this.router.navigate([""])
  }



  inputIdPlayer: number=0;
  inputCode:string=''
  inputName:string=''
  inputTshirt:string=''
  inputChampionship:string=''
  inputTeam:number=0
  inputCodeTeam: string='';
  inputNameTeam: string='';

  indice!: number;
  accion!: number;

}
