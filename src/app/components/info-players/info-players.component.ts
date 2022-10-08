import { Component, Input, OnInit } from '@angular/core';
import { Players } from 'src/app/models/players.model';

@Component({
  selector: 'app-info-players',
  templateUrl: './info-players.component.html',
  styleUrls: ['./info-players.component.scss']
})
export class InfoPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() playerList:Players

   @Input() indice:number

}
