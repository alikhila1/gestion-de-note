import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionResultatsService {
  constructor(private http: HttpClient) { }
  moyMatieres: any[];
  public updateResultat(resultat:any) {
      this.http.put("http://localhost:8080/enicar/gestionNotesupdateResultat/",resultat)
  }
  public getAllResultats() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllResultats");
  }
  public removeResultat(id:any) {
      this.http.delete("http://localhost:8080/enicar/gestionNotes/removeResultat/"+id);

  }
  public addResultat(resultat:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addResultat",resultat);
  }
}
