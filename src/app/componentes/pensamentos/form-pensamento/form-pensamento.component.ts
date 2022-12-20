import { Component } from '@angular/core';
import { Location } from '@angular/common';

type formPensamento = {
  id: string;
  conteudo: string;
  autoria: string;
  modelo:string;
}
@Component({
  selector: 'app-form-pensamento',
  templateUrl: './form-pensamento.component.html',
  styleUrls: ['./form-pensamento.component.css']
})
export class FormPensamentoComponent {


  pensamento: formPensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor (private location: Location) {}
  criarPensamento() {
    alert("Novo Pensamento criado");  
  }
  cancelarPensamento() {
    this.location.back()
  }
}
