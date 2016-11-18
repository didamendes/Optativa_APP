import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Produto } from '../models/produto';


/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProdutoProvider {

  apiUrl = "http://localhost:3000";

  constructor(public http: Http) {
  }

  findAll(): Observable<Produto[]> {
    return this.http.get(`${this.apiUrl}/produto`)
      .map(res => <Produto[]>res.json());
  }

  create(data){
    let body = JSON.stringify(data);


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/produto`, body, options)
      .map(res => res.json());
  }

  update(data){
    let body = JSON.stringify(data);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/produto/`, body, options)
      .map(res => res.json());
  }

  delete(data){
    return this.http.delete(`${this.apiUrl}/produto/${data._id}`)
      .map(res => res);
  }

}
