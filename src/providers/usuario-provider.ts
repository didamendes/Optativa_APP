import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Usuario } from '../models/usuario'

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsuarioProvider {

  apiUrl = "http://localhost:3000";

  constructor(public http: Http) {
  }

  // carrega todos usuarios
  findAll(): Observable<Usuario[]>{
    return this.http.get(`${this.apiUrl}/usuario`)
      .map(res => <Usuario[]>res.json());
  }

  create(data){
    let body = JSON.stringify(data);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/usuario`, body, options)
      .map(res => res.json());
  }

  update(data){
    let body = JSON.stringify(data);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/usuario/`, body, options)
      .map(res => res.json());
  }

  delete(data){
    return this.http.delete(`${this.apiUrl}/usuario/${data._id}`)
      .map(res => res);
  }

}
