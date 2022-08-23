import { Owner } from './../../../models/Owner';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-owner-dialog',
  templateUrl: './owner-dialog.component.html',
  styleUrls: ['./owner-dialog.component.scss'],
})
export class OwnerDialogComponent implements OnInit {
  owner: Owner;

  constructor(
    public dialogRef: MatDialogRef<OwnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataOwner: Owner
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close()
  }


}
