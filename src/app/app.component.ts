import { Component, VERSION } from '@angular/core';
import { PatientListMockService } from './patientlistmock.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [PatientListMockService]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(patientListMockService: PatientListMockService){
    console.log('es geht los')
    patientListMockService.getPatientList().subscribe(data => {
       console.log(data)
    });
  }


}
