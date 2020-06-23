import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClienteModel } from '../Models/ClienteModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  apiUrl = "http://localhost:56452/";


  constructor( private http: HttpClient) { }

  GetListaClientes(): Observable<ClienteModel[]> {
    
    return this.http.get<ClienteModel[]>(this.apiUrl + 'cliente/getClientes');
  }

  AdicionarCliente(cliente: ClienteModel): Observable<any> {
    
    return this.http.post<any>(this.apiUrl + "Cliente/Create", cliente);
  }

  EditarCliente(cliente: ClienteModel): Observable<any> {
    
    return this.http.put<any>(this.apiUrl + "Cliente/Update", cliente);
  }

  GetCliente(id) : Observable<ClienteModel>{

    return this.http.get<ClienteModel>(this.apiUrl + 'cliente/GetCliente/' + id);
  }

  DeleteCliente(id) : Observable<any> {
    
     return this.http.delete<any>(this.apiUrl + "Cliente/Deletar/", {params: {id: id}});
  }
}
