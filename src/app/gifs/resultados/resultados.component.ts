import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get reultados(){
    return this.gifsService.reultados;
  }
  constructor(private gifsService:GifsService){}

}
