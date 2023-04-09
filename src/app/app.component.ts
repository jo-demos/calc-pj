import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calc-pj';
  faturamentoMensal = 10500;
  proLaborePerc = 28;
  proLaboreBruto = this.faturamentoMensal * (this.proLaborePerc / 100);
  faixaINSS = 11;
  valorINSS = this.proLaboreBruto * (this.faixaINSS / 100);
  baseCalculoIRRF = this.proLaboreBruto - this.valorINSS;
  faixaIRPF = 7.5;
  faixaDeducaoIRPF = 142.80;
  valorIRRFSemDeducao = this.baseCalculoIRRF * (this.faixaIRPF / 100);
  valorIRRFComDeducao = this.valorIRRFSemDeducao - this.faixaDeducaoIRPF;
  proLaboreLiquido = this.baseCalculoIRRF - this.valorIRRFComDeducao;
}
