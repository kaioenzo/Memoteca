import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeiraLetraMaiusculaValidator } from '../primeiraLetraMaiusculaValidator';
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
          conteudo: [
            pensamento.conteudo,
            Validators.compose([Validators.required, Validators.minLength(3)]),
          ],
          autoria: [
            pensamento.autoria,
            Validators.compose([
              Validators.required,
              Validators.pattern(/(.|\s)*\S(.|\s)*/),
              Validators.maxLength(50),
              Validators.minLength(3),
              primeiraLetraMaiusculaValidator
            ]),
          ],
          modelo: [pensamento.modelo, [Validators.required]],
        });
      });
    } else {
      this.form = this.formBuilder.group({
        conteudo: ['', [Validators.required, Validators.minLength(3)]],
        autoria: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
            Validators.maxLength(50),
            Validators.minLength(3),
            primeiraLetraMaiusculaValidator
          ]),
        ],
        modelo: ['modelo1', [Validators.required]],
      });
    }
  }

  criarPensamento() {
    if (this.form.valid) {
      this.service.criar(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }
  alterarPensamento() {
    if (this.form.valid) {
      this.service.alterar(this.id, this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }
  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if (this.form.invalid) return 'botao__desabilitado';
    else return 'botao';
  }
}
