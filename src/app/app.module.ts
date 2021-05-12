import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//For stepper
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

//for tool bar
import {MatToolbarModule} from '@angular/material/toolbar';

//End Stepper
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrSetupComponent } from './dr-setup/dr-setup.component';
import { ProviderSetupComponent } from './provider-setup/provider-setup.component';
import { InsuranceSetupComponent } from './insurance-setup/insurance-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    DrSetupComponent,
    ProviderSetupComponent,
    InsuranceSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
