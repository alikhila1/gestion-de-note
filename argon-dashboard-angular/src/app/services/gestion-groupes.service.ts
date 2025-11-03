import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionGroupesService {
  constructor(private http: HttpClient) { }
  public updateGroupe(groupe:any) {
      this.http.put("http://localhost:8080/enicar/gestionNotes/updateMatere/",groupe)
  }
  public getAllGroupes() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllGroupes");
  }
  public removeGroupe(id:any) {
      this.http.delete("http://localhost:8080/enicar/gestionNotes/removeGroupe/"+id);

  }
  public addGroupe(groupe:any,id:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addGroupe/"+id,groupe);
  }
  public addMatToGroupe(idGrp:any,nomMat:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addMatiereToGroupe/"+idGrp,nomMat);
  }
  public  getGroupe(id:any){
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getGroupe?id="+id);
  } 

  getCountgroupes(): Observable<number> {
    return this.http.get<number>(" http://localhost:8080/enicar/gestionNotes/groupes/count");
  }
}
