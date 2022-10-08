export class Players{

  constructor(idJugador:number, codigo:string, nombres:string, camiseta:string, campeonatos:string, idEquipo:number, codigoEquipo:string, nombreEquipo:string){

    this.idJugador=idJugador
    this.codigo=codigo
    this.nombres=nombres
    this.camiseta=camiseta
    this.campeonatos=campeonatos
    this.idEquipo=idEquipo
    this.codigoEquipo=codigoEquipo
    this.nombreEquipo=nombreEquipo

  }
  idJugador:number=0
  codigo:string=""
  nombres:string=""
  camiseta:string=""
  campeonatos:string=""
  idEquipo:number=0
  codigoEquipo:string=""
  nombreEquipo:string=""
}
