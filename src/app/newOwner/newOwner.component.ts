import { Owner } from './../../models/Owner';
import { OwnerService } from './../services/owner.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newOwner',
  templateUrl: './newOwner.component.html',
  styleUrls: ['./newOwner.component.scss'],
})
export class NewOwnerComponent implements OnInit {
  @Output() aoCadastrarOwner = new EventEmitter<any>();

  constructor(private service: OwnerService) {}

  index: number;
  nome: string;
  documento: string;
  tipo_documento: 'CPF' | 'CNPJ';
  created_At: Date;

  CadastrarOwner() {
    const dados: Owner = {
      id: this.index,
      name: this.nome,
      document: this.documento,
      document_type: this.tipo_documento,
      creation_date: this.created_At,
    };
    this.service.createOwner(dados).subscribe((resultado) => {
      console.log(resultado);
      alert('Cadastro realizado com sucesso!!');
      this.limparCampos();
    });
  }

  limparCampos() {
    this.nome = '';
    this.documento = '';
    this.tipo_documento = 'CPF';
  }

  ngOnInit() {}
}
