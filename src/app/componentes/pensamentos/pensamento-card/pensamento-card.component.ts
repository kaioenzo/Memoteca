import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css'],
})
export class PensamentoCardComponent {
  
  @Input() pensamento : Pensamento = {
    id: 1,
    conteudo: 'React > Angular',
    autoria: 'Kaio',
    modelo: 'modelo3',
  };

  larguraPensamento(): string {
      if(this.pensamento.conteudo.length >= 256){
        return "pensamento-g"
      }
      return "pensamento-p"
  }
}
