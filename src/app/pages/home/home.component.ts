import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PacientesService } from '../../api/pacientes.service';
import { Paciente } from '../../api/paciente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  listaPacientes: Paciente[] = [];
  inscricao: Subscription = new Subscription();
  inscricaoExcluir: Subscription = new Subscription();

  constructor(private service: PacientesService) {}

  ngOnInit(): void {
    this.obterPacientes();
  }

  obterPacientes(): void {
    this.inscricao = this.service.obterPacientes().subscribe((pacientes) => {
      this.listaPacientes = pacientes;
    });
  }

  onClickExcluir(paciente: any): void {
    this.inscricaoExcluir = this.service
      .excluirPaciente(paciente._id)
      .subscribe(() => {
        this.obterPacientes();
      });
  }

  porcentagemPaciente(paciente: any): string {
    if (paciente.idade <= 60) {
      return '3%';
    } else {
      return '15%';
    }
  }
}
