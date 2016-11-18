import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Produto} from '../../models/produto';

import {ProdutoProvider} from '../../providers/produto-provider';

import {ProdutoFormPage} from '../produto-form/produto-form';
import {ProdutoDetailPage} from '../produto-detail/produto-detail';

/*
  Generated class for the ProdutoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-produto-page',
  templateUrl: 'produto-page.html'
})
export class ProdutoPagePage {

  items: Produto[];

  constructor(public navCtrl: NavController,
  public produtoProvider: ProdutoProvider  ) {

    this.findAll();

  }

  getItems(ev: any) {

    // recupera o valor do evento
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }  else {
      this.findAll();
    }

  }

  findAll(){
    this.produtoProvider.findAll().subscribe(produtos => {
      this.items = produtos;
    });
  }

  goToCreateProduto(){
    this.navCtrl.push(ProdutoFormPage);
  }

  itemTapped(event, item) {

    this.navCtrl.push(ProdutoDetailPage, {
      produto: item
    });
  }

}
