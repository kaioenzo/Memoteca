import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-pensamento',
  templateUrl: './form-pensamento.component.html',
  styleUrls: ['./form-pensamento.component.css'],
})
export class FormPensamentoComponent {
  form!: FormGroup;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PensamentoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.id = pensamento.id!;
        this.form = this.formBuilder.group({
          conteudo: [pensamento.conteudo],
          autoria: [pensamento.autoria],
          modelo: [pensamento.modelo],
        });
      });
    } else {
      this.form = this.formBuilder.group({
        conteudo: ['Formulário reativo'],
        autoria: ['Angular'],
        modelo: ['modelo1'],
      });
    }
  }

  criarPensamento() {
    this.service.criar(this.form.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  alterarPensamento() {
    this.service.alterar(this.form.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }
}
