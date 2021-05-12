import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrSetupComponent} from './dr-setup/dr-setup.component'
import {ProviderSetupComponent} from './provider-setup/provider-setup.component'
import {InsuranceSetupComponent} from './insurance-setup/insurance-setup.component'

const routes: Routes = [
  {path: 'DrSetup', component : DrSetupComponent },
  {path: 'ProviderSetup', component : ProviderSetupComponent },
  {path: 'InsuranceSetup', component : InsuranceSetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
