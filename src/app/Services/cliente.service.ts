import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClienteModel } from '../Models/ClienteModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  // tslint:disable-next-line: typedef-whitespace
export class ClienteService {
  // tslint:disable-next-line: quotemark
  apiUrl = "http://localhost:56452";
  // tslint:disable-next-line: no-trailing-whitespace
   HttpHeaders = new HttpHeaders();

  constructor( private http: HttpClient) {


  
   }

  GetListaClientes(): Observable<ClienteModel[]> {
    
    HttpHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    HttpHeaders.append('Access-Control-Allow-Methods', 'GET');
    HttpHeaders.append('Access-Control-Allow-Origin', '*');
    return this.http.get<ClienteModel[]>(this.apiUrl + '/cliente/getClientes', {headers: HttpHeaders});
  }

  AdicionarCliente(cliente: ClienteModel): Observable<any> {
   
    HttpHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    HttpHeaders.append('Access-Control-Allow-Methods', 'GET');
    HttpHeaders.append('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(this.apiUrl + "/Cliente/Create", cliente, {headers: HttpHeaders});
  }

}
