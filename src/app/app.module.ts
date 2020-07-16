import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientListService, PatientListMockService } from './patientlistmock.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgbModule  ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [{provide: PatientListService, useClass: PatientListMockService}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
