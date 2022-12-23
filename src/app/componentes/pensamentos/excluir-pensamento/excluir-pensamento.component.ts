import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: 'modelo1',
    favorito: false
  };

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(): void {
    this.service.deletar(this.pensamento.id!).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento'])
  }
}
