import { DetailsOwnerComponent } from './detailsOwner/detailsOwner.component';
import { NewOwnerComponent } from './newOwner/newOwner.component';
import { NovoCadastroComponent } from './novaTranseferencia/newFarm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'newRegister', component: NovoCadastroComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'newOwner', component: NewOwnerComponent},
  {path: 'detailsOwner', component: DetailsOwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
