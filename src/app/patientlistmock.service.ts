import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PatientListMockService{

  constructor(private http:HttpClient){
  }

  getPatientList():Observable<any>{
  return this.http.get('/assets/patientlist.json');
  }

  getPatients():Observable<any>{
  return this.http.get('/assets/patients.json');
  }

  getMedication():Observable<any>{
  return this.http.get('/assets/medication.json');
  }

}