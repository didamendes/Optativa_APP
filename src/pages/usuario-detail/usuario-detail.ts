import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {UsuarioProvider} from '../../providers/usuario-provider';

import {UsuarioPagePage} from '../usuario-page/usuario-page';
import {UsuarioFormPage} from '../usuario-form/usuario-form';

/*
  Generated class for the UsuarioDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuario-detail',
  templateUrl: 'usuario-detail.html'
})
export class UsuarioDetailPage {

  
  selectedItem = {
    _id: '',
    nome: '',
    email: '',
    login: '',
    senha: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider) {
    this.selectedItem = navParams.get('usuario');
  }

  updateItem(event, item){
    this.navCtrl.push(UsuarioFormPage, {
      usuario: item
    });
  }

  deleteItem(event, item){
    this.usuarioProvider.delete(this.selectedItem).subscribe(res => {
      this.navCtrl.push(UsuarioPagePage);
    })
  }

}
