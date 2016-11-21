import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {UsuarioProvider} from '../../providers/usuario-provider';

import {UsuarioPagePage} from '../usuario-page/usuario-page';

/*
  Generated class for the UsuarioForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuario-form',
  templateUrl: 'usuario-form.html'
})
export class UsuarioFormPage {

  usuario = {
    nome: '',
    email: '',
    login: '',
    senha: ''
  };
  title: string = "Adicionar Usuario";

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public usuarioProvider: UsuarioProvider) {

    let selectedItem = navParams.get('usuario');

    if (selectedItem != undefined){
      this.title = "Atualizar Usuario";
      this.usuario = selectedItem;
    }

  }

  save(){
    if ("_id" in this.usuario){
      this.usuarioProvider.update(this.usuario).subscribe(res => {
          this.navCtrl.push(UsuarioPagePage, {});
      }, error => {
        console.log(error);
      });
    } else
      this.usuarioProvider.create(this.usuario).subscribe(res => {
        this.navCtrl.push(UsuarioPagePage, {})
      }, error => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('Hello UsuarioFormPage Page');
  }

}
