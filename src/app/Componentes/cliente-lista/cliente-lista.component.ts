import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service';
import { ClienteModel } from '../../Models/ClienteModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  ListaClientes: ClienteModel[];
  constructor(private clienteService: ClienteService, private router: Router) { }
  ngOnInit(): void {
    this.BuscarClientes();
  }
  BuscarClientes() {
     this.clienteService.GetListaClientes().subscribe((res) =>  {
       this.ListaClientes = res;
     });
  }
  Excluir(id){

  }
  Editar(cliente: ClienteModel){

  }
  Adicionar(){
    this.router.navigate(['cliente/adicionar']);
  }
}
