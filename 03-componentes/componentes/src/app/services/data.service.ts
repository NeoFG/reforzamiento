import { Componente } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsuarios(){

    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getAlbumes(){

    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getMenuOpts(){

    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

}
