import { FarmsService } from '../services/farms.service';
import { Farm } from '../../models/Farm';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-novoCadastro',
  templateUrl: './newFarm.component.html',
  styleUrls: ['./newFarm.component.scss'],
})
export class NovoCadastroComponent {
  @Output() aoCadastrar = new EventEmitter<any>();

  index: number;
  fazenda: string;
  area: number;
  centroide: any[];
  geometria: any;
  dono: string;
  created_At: Date;

  constructor(private service: FarmsService) {}

  Cadastrar() {
    const dados: Farm = {
      id: this.index,
      name: this.fazenda,
      area: this.area,
      centroid: this.centroide,
      geometry: this.geometria,
      owner: this.dono,
      creation_date: this.created_At,
    };
    this.service.createFarm(dados).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
    });
  }

  limparCampos() {
    this.fazenda = '';
    this.area = 0;
    (this.centroide = ['']), (this.geometria = ''), (this.dono = '');
  }
}
