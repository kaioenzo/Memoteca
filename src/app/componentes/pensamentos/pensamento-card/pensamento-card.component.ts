import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css'],
})
export class PensamentoCardComponent {
  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: 'React > Angular',
    autoria: 'Kaio',
    modelo: 'modelo3',
    favorito: false,
  };

  constructor(private service: PensamentoService) {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
  favoritar(): void {
    this.pensamento.favorito = !this.pensamento.favorito;
    this.service
      .alterar(this.pensamento.id!, this.pensamento)
      .subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
  }
}
