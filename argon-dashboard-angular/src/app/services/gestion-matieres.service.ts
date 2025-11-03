import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionMatieresService {

  constructor(private http: HttpClient) { }
  public updateMatiere(matiere:any) {
      this.http.put("http://localhost:8080/enicar/gestionNotes/updateMatiere",matiere)
  }
  public getAllMatieres() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllMatieres");
  }
  public removeMatiere(id:any) {
      this.http.delete("http://localhost:8080/enicar/gestionNotes/removeMatiere/"+id);

  }
  public addMatiere(matiere:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addMatiere",matiere);
  }

  public getEnseigMat(id:any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEnseignantsByMatiere/"+id);
  }

  public getMatByNom(nom:any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getMatiereByName/"+nom);
  }
  getCountmatieres(): Observable<number> {
    return this.http.get<number>(" http://localhost:8080/enicar/gestionNotes/matieres/count");
  }





}
