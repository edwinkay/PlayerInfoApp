import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Players } from '../models/players.model';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private httpClient:HttpClient) { }

  loadPlayer(){
    return this.httpClient.get('https://playerinfoapp-default-rtdb.firebaseio.com/datos.json')
  }

  savePlayer(players:Players[]){
  this.httpClient.put('https://playerinfoapp-default-rtdb.firebaseio.com/datos.json',players).subscribe(
    response=>console.log('se han guardado ' + response),

    error=>console.log('error '+ error)
  )
  }
  update(indice:number,player:Players){
    let url='https://playerinfoapp-default-rtdb.firebaseio.com/datos/' + indice + '.json'

    this.httpClient.put(url,player).subscribe(
      response=>console.log('se ha modificado '+ response),

      error=> console.log('error: '+ error)
    )
  }

  delete(indice:number){
    let url='https://playerinfoapp-default-rtdb.firebaseio.com/datos/' + indice + '.json'

    this.httpClient.delete(url).subscribe(
      response=>console.log('se ha eliminado '+ response),

      error=> console.log('error: '+ error)
    )
  }

}
