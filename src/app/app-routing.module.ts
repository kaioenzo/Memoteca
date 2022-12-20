import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPensamentoComponent } from './componentes/pensamentos/form-pensamento/form-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  { path: 'criarPensamento', component: FormPensamentoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listarPensamento'
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
