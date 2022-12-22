import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor (private route: ActivatedRoute,private router: Router, private service: PensamentoService) {}
  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')){
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento;
      })
    }
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }
  alterarPensamento() {
    this.service.alterar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }
  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
