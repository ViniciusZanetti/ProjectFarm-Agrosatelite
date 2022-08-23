import { Owner } from './../../../models/Owner';
import { Farm } from 'src/models/Farm';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-farm-dialog',
  templateUrl: './farm-dialog.component.html',
  styleUrls: ['./farm-dialog.component.scss'],
})
export class FarmDialogComponent implements OnInit {
  farm: Farm;
  owner: Owner;

  constructor(
    public dialogRef: MatDialogRef<FarmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Farm,
    @Inject(MAT_DIALOG_DATA) public dataOwner: Owner
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close()
  }


}
