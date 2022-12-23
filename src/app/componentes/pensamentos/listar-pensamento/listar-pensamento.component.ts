import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 0;
  carregarMais: boolean = true;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  carregarMaisPensametos() {
    this.service.listar(++this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos.push(...pensamentos);
      if (!pensamentos.length) {
        this.carregarMais = false;
      }
    });
  }
}
