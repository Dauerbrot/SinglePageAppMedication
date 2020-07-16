import { Component, VERSION } from '@angular/core';
import { PatientListMockService, PatientListService } from './patientlistmock.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  name = 'Projekt Medikations-Simulator'

  constructor(patientService: PatientListService){
    console.log('es geht los')
    patientService.getPatientList().subscribe(data => {
       console.log(data)
    });
  }


}
