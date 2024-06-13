import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Paciente } from '../../api/paciente';
import { PacientesService } from '../../api/pacientes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  constructor(private service: PacientesService, private router: Router) {}

  cadastrarPaciente(form: NgForm): void {
    if (!form.valid) {
      alert('Formulario Invalido');
      return;
    }

    let request: Paciente = {
      id: '',
      nome: form.value.nome,
      plano: form.value.plano,
      idade: form.value.idade,
    };

    this.service.cadastrarPaciente(request).subscribe(() => {
      alert('Paciente cadastrado com sucesso');
      form.reset();
    });
  }
}
