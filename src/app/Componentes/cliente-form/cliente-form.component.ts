import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../Models/ClienteModel';
import { ClienteService } from '../../Services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: ClienteModel;

  constructor( private clienteService: ClienteService, private router: Router ) { }

  ngOnInit(): void {
    this.cliente = new ClienteModel();
  }

  onSubmit(){
    console.log(this.cliente);
    this.clienteService.AdicionarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['cliente']);
    });

  }

}
