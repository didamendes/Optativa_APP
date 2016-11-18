import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {ProdutoProvider} from '../../providers/produto-provider';

import {ProdutoPagePage} from '../produto-page/produto-page';
import {ProdutoFormPage} from '../produto-form/produto-form';

/*
  Generated class for the ProdutoDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-produto-detail',
  templateUrl: 'produto-detail.html'
})
export class ProdutoDetailPage {

  selectedItem = {
    _id: '',
    nome: '',
    codigoBarra: '',
    descricao: '',
    precoVenda: '',
    fornecedor: '',
    urlFoto: '',
    categoria: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoProvider: ProdutoProvider) {

    this.selectedItem = navParams.get('produto');

  }

  updateItem(event, item){
    this.navCtrl.push(ProdutoFormPage, {
      produto: item
    });
  }

  deleteItem(event, item){
    this.produtoProvider.delete(this.selectedItem).subscribe(res => {
      this.navCtrl.push(ProdutoPagePage);
    });
  }

}
