import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { PacientesService } from '../../api/pacientes.service';
import { Paciente } from '../../api/paciente';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent implements OnInit {
  listaPacientes: any[] = [];
  inscricao: Subscription = new Subscription();
  pacienteSelecionadoId: any;
  pacienteSelecionado: any;

  constructor(private service: PacientesService) {}

  ngOnInit(): void {
    this.obterPacientes();
  }

  obterPacientes(): void {
    this.inscricao = this.service.obterPacientes().subscribe((pacientes) => {
      this.listaPacientes = pacientes;
    });
  }

  onChangePacienteSelecionado(event: any): void {
    if (event) {
      this.obterPacientePorId(event);
    }
  }

  obterPacientePorId(id: any): void {
    this.service.obterPacientePorId(id).subscribe((paciente) => {
      this.pacienteSelecionado = paciente;
    });
  }

  editarPaciente(form: NgForm) {
    if (!form.valid) {
      alert('Formulário Inválido :: Todos os campos sao obrigatorios');
    }

    let request: Paciente = {
      id: this.pacienteSelecionadoId,
      nome: form.value.nome,
      plano: form.value.plano,
      idade: form.value.idade,
    };

    this.service.editarPaciente(request).subscribe(() => {
      alert('Paciente editado com sucesso');
      form.reset();
      this.pacienteSelecionadoId = '';
      this.pacienteSelecionado = null;
      this.obterPacientes();
    });
  }
}
