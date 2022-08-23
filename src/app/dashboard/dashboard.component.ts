import { FarmsService } from './../services/farms.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Farm } from 'src/models/Farm';
import { FarmDialogComponent } from '../shared/farm-dialog/farm-dialog.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [FarmsService],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = [
    'name',
    'area',
    'centroid',
    'geometry',
    'owner',
  ];
  dataSource: Farm[];

  constructor(public dialog: MatDialog, public service: FarmsService) {
    this.service.listFarmAll().subscribe((data: Farm[]) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {}

  openDialog(farm: Farm | null) {
    const dialogRef = this.dialog.open(FarmDialogComponent, {
      width: '250px',
      data:
        farm === null
          ? {
              name: null,
              area: '',
              centroid: '',
              geometry: '',
              owner: null,
            }
          : {
              id: farm.id,
              name: farm.name,
              area: farm.area,
              centroid: farm.centroid,
              geometry: farm.geometry,
              owner: farm.owner
            },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
        if (this.dataSource.map(p => p.id).includes(result.id)) {
          this.service.editFarm(result)
            .subscribe((data: Farm) => {
              const index = this.dataSource.findIndex(p => p.id === data.id);
              this.dataSource[index] = data;
              this.table.renderRows();
            });
        }else {
          console.error("Erro ao editar informações")
        }
      }
    });
  }

  deleteElement(id: number): void {
    this.service.remove(id).subscribe(() => {
      console.log('item removido com sucesso!!!');
      this.dataSource = this.dataSource.filter((p) => p.id !== id);
    });
  }

  editElement(farm: Farm): void {
    this.openDialog(farm);
  }
}
