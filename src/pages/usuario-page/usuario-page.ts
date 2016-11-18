import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Model
import { Usuario } from '../../models/usuario';

// Providers
import {UsuarioProvider} from "../../providers/usuario-provider";

// Pages
import { UsuarioFormPage } from '../usuario-form/usuario-form';
import { UsuarioDetailPage } from '../usuario-detail/usuario-detail';

/*
  Generated class for the UsuarioPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuario-page',
  templateUrl: 'usuario-page.html'
})
export class UsuarioPagePage {

  items: Usuario[];

  constructor(
    public navCtrl: NavController,
    public usuarioProvider: UsuarioProvider
  ) {
    this.findAll();
  }

  getItems(ev: any){
    // recuperar o valor do evento
    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.nome.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.findAll();
    }
  }

  findAll(){
    this.usuarioProvider.findAll().subscribe(usuarios => {
      this.items = usuarios;
    });
  }

    goToCreateUsuario(){
      this.navCtrl.push(UsuarioFormPage);
    }

    itemTapped(event, item){
    this.navCtrl.push(UsuarioDetailPage, {
      usuario: item
    });
  }

}
