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
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar(this.filtro, this.paginaAtual)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }

  carregarMaisPensametos(): void {
    this.service
      .listar(this.filtro, ++this.paginaAtual)
      .subscribe((pensamentos) => {
        this.listaPensamentos.push(...pensamentos);
        if (!pensamentos.length) {
          this.carregarMais = false;
        }
      });
  }

  buscarPensamento(): void {
    this.carregarMais = true;
    this.paginaAtual = 1;
    this.service.listar(this.filtro, this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }
}
