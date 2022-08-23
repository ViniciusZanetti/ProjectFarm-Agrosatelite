import { Component } from '@angular/core';
import { FarmsService } from './services/farms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project2Farm';

  transferencias: any[] = [];

  constructor(private service: FarmsService) {}
}
