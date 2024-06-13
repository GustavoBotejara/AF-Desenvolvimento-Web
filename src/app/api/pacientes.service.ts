import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  url: string = 'http://localhost:3000/pacientes';

  constructor(private http: HttpClient) {}

  obterPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.url}`);
  }

  obterPacientePorId(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.url}/${id}`);
  }

  cadastrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.url}/`, paciente);
  }

  editarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.patch<Paciente>(`${this.url}/${paciente.id}`, paciente);
  }

  excluirPaciente(id: string): Observable<Paciente> {
    return this.http.delete<Paciente>(`${this.url}/${id}`);
  }
}
