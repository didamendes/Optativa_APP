import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {ProdutoProvider} from '../../providers/produto-provider';
import {ProdutoPagePage} from '../produto-page/produto-page';

/*
  Generated class for the ProdutoForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-produto-form',
  templateUrl: 'produto-form.html'
})
export class ProdutoFormPage {

  produto = {
    nome: '',
    codigoBarra: '',
    descricao: '',
    precoVenda: '',
    fornecedor: '',
    urlFoto: '',
    categoria: ''
  };
  title: string = "Adicionar Produto";

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public produtoProvider: ProdutoProvider) {

    let selectedItem = navParams.get('produto');

    if (selectedItem != undefined){
      this.title = "Atualizar Produto";
      this.produto = selectedItem;
    }

  }

  save(){

    if ("_id" in this.produto){
      this.produtoProvider.update(this.produto).subscribe(res => {
        this.navCtrl.push(ProdutoPagePage, {});
      }, error => {
        console.log(error);
      });
    } else {
      this.produtoProvider.create(this.produto).subscribe(res => {
        this.navCtrl.push(ProdutoPagePage, {});
      }, error => {
        console.log(error);
      });
    }

  }

  ionViewDidLoad() {
    console.log('Hello ProdutoFormPage Page');
  }

}
