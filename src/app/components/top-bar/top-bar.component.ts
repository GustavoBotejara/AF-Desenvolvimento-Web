import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  appName: String;
  menu: any[];

  constructor(private router: Router) {
    this.appName = 'AF - Desenvolvimento Web';
    this.menu = [
      { nome: 'Home', rota: 'home' },
      { nome: 'Cadastrar', rota: 'cadastro' },
      { nome: 'Editar', rota: 'editar' },
    ];
  }

  async onClickNavigate(rota: string): Promise<void> {
    this.router.navigate([`../${rota}`]);
  }
}
