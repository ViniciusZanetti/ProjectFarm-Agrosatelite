import { OwnerDialogComponent } from './../shared/owner-dialog/owner-dialog.component';
import { Owner } from './../../models/Owner';
import { OwnerService } from './../services/owner.service';
import { FarmsService } from './../services/farms.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { FarmDialogComponent } from '../shared/farm-dialog/farm-dialog.component';

@Component({
  selector: 'app-detailsOwner',
  templateUrl: './detailsOwner.component.html',
  styleUrls: ['./detailsOwner.component.scss'],
  providers: [OwnerService],
})
export class DetailsOwnerComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['nome', 'document', 'type_document', 'actions'];
  dataSource: Owner[];

  constructor(public dialog: MatDialog, public service: OwnerService) {
    this.service.listOwnerAll().subscribe((data: Owner[]) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {}

  openDialog(owner: Owner | null): void {
    const dialogRef = this.dialog.open(OwnerDialogComponent, {
      width: '250px',
      data:
        owner === null
          ? {
              name: null,
              document: '',
              document_type: '',
            }
          : owner,
    });

    dialogRef.afterClosed().subscribe((owner) => {
      if (owner !== undefined) {
        console.log('Objeto editado indo para a rota', owner);
        if (this.dataSource.map((p) => p.id).includes(owner.id)) {
          console.log('entrou no if antes da rota', owner);
          this.service.editOwner(owner).subscribe((data: Owner) => {
            const index = this.dataSource.findIndex((p) => p.id === data.id);
            this.dataSource[index] = data;
            this.table.renderRows();
          });
        } else {
          this.service.createOwner(owner).subscribe((data: Owner) => {
            this.dataSource.push(data);
            this.table.renderRows();
          });
        }
      }
    });
  }

  deleteElement(id: number): void {
    this.service.removeOwner(id).subscribe(() => {
      console.log('item removido com sucesso!!!');
      this.dataSource = this.dataSource.filter((p) => p.id !== id);
    });
  }

  editOwner(owner: Owner): void {
    console.log("Objeto do edit", owner)
    this.openDialog(owner);
  }
}
