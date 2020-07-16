import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";


export abstract class PatientListService {
  abstract getPatientList(): Observable<any>;
  abstract getPatientById(id: string): Observable<any>;
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
