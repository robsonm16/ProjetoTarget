import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteModel } from 'src/app/Models/ClienteModel';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  cliente: ClienteModel;

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente = new ClienteModel();
    console.log(this.route);
    let id = this.route.snapshot.params["id"];
    this.clienteService.GetCliente(id).subscribe(( res ) => {
      this.cliente = res;
    })
  }

  onSubmit(): void {
    console.log(this.cliente);
    this.clienteService.EditarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['cliente']);
    });
  }
}
