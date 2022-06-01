import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  Pages: { title: string; url: string; icon: string; }[];
  
  public appPages =[
    { title: 'Usuário' ,url: 'usuario', icon:'person'},
    { title: 'Serviço de denúncia' ,url: 'servico', icon:'call'},
    { title: 'Suporte' ,url: 'suporte', icon:'information'},
    { title: 'Configurações' ,url: 'configuracao', icon:'settings'},
    { title: 'Sair' ,url: 'login', icon:'exit'},
  ];
  constructor()  {}
}
