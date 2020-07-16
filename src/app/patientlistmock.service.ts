import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";


export abstract class PatientListService {
  /**
   * Returns all patients from the hospital
   */
  abstract getPatientList(): Observable<any>;
  /**
   * Get all informations from the patient e.g. firstName, LastName, Birtheday
   * @param id:string id from patient
   */
  abstract getPatientById(id: string): Observable<any>;
  /**
   * get the complete Medication history from a patient
   * @param id:string id from the patient
   */
  abstract getMedicationByPatientId(patientId: string): Observable<any>;
}

@Injectable()
export class PatientListMockService extends PatientListService {
  constructor(private http: HttpClient) {
    super();
  }

  getPatientList(): Observable<any> {
    return this.http.get("/assets/patientlist.json");
  }

  getPatientById(id: string): Observable<any> {
    return this.http.get("/assets/patients.json")
      .pipe(map((res: any[]) => res.find(item => item.id === id)));
  }

  getMedicationByPatientId(patientId: string): Observable<any> {
    return this.http.get("/assets/medication.json")
      .pipe(map((res: any[]) => res[patientId]));
  }
}
