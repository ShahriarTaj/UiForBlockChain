import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//For stepper
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

//for tool bar
import {MatToolbarModule} from '@angular/material/toolbar';

//End Stepper

//for tab
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { AgGridModule } from 'ag-grid-angular';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrSetupComponent } from './dr-setup/dr-setup.component';
import { ExchangeComponent } from './exchange/exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    DrSetupComponent,
    ExchangeComponent,
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
    MatToolbarModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
