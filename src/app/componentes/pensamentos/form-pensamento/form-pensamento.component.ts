import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-pensamento',
  templateUrl: './form-pensamento.component.html',
  styleUrls: ['./form-pensamento.component.css']
})
export class FormPensamentoComponent {


  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor (private router: Router, private service: PensamentoService) {}
  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }
  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
