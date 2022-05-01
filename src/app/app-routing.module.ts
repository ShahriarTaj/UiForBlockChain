import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrSetupComponent} from './dr-setup/dr-setup.component'
import {ExchangeComponent} from './exchange/exchange.component'
const routes: Routes = [
  {path: 'DrSetup', component : DrSetupComponent },
  {path: 'exchange', component : ExchangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
