import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  carregarMais: boolean = true;
  filtro: string = '';
  buscaFavoritos: boolean = false;

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .listar(this.filtro, this.paginaAtual)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }

  listarTodos(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  carregarMaisPensametos(): void {
    this.paginaAtual = 1;
    this.service
      .listar(this.filtro, ++this.paginaAtual)
      .subscribe((pensamentos) => {
        this.listaPensamentos.push(...pensamentos);
        if (!pensamentos.length) {
          this.carregarMais = false;
        }
      });
  }

  buscarFavoritos(): void {
    this.carregarMais = true;
    this.buscaFavoritos = true;
    this.service.buscarFavoritos().subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  buscarPensamento(): void {
    this.carregarMais = true;
    this.paginaAtual = 1;
    if (this.buscaFavoritos) {
      this.service.buscarFavoritos(this.filtro).subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
    } else {
      this.service
        .listar(this.filtro, this.paginaAtual)
        .subscribe((pensamentos) => {
          this.listaPensamentos = pensamentos;
        });
    }
  }
}
