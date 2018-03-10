import { Component, OnInit } from '@angular/core';
import {HeroesService}  from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:any[]=[];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) {
    //regresara los datos del servicio metodo getHeroes
    this._heroesService.getHeroes().subscribe(data =>{
      // console.log(data);

      /*convertir arreglo en datos 1 manera
      for( let key$ in data){
        // console.log(data[key$]);
        // introduce key en array para mantener key
        let h= data[key$];
        h.key$=key$;
        this.heroes.push(data[key$]);
      }
      console.log(this.heroes);
      fin de primera manera*/

      //otra manera con pipe
      this.heroes= data;
      this.loading=false;
      //ralentizar loadiong
      // setTimeout(()=> this.loading=false,3000);

  })


  }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
    this._heroesService.borrarHeroe(key$).subscribe(respuesta=>{
      if(respuesta){
      console.log(respuesta);
    }else{
      //todo bien
      delete this.heroes[key$];
    }

    })
  }

}
