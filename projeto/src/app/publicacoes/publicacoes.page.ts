import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';

@Component({
  selector: 'app-publicacoes',
  templateUrl: 'publicacoes.page.html',
  styleUrls: ['publicacoes.page.scss'],
})
export class PublicacoesPage{

    constructor(private alertCrtl:AlertController, private toastCtrl:ToastController) { }
    
      async adicionaTarefa({ novaTarefa }: { novaTarefa: string; }){
        if (novaTarefa.trim().length < 1) {
          const toast = await this.toastCtrl.create({
           message:'Publicado com sucesso!',
           duration:200,
           position:'top',
    });
  
    toast.present();
    return;
  }
}
}
