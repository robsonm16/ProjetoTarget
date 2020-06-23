import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../Models/ClienteModel';
import { ClienteService } from '../../Services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: ClienteModel;

  constructor( private clienteService: ClienteService, private router: Router, private route: ActivatedRoute ) {
    
  }

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
