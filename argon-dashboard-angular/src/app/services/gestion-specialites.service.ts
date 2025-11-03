import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionSpecialitesService {

  constructor(private http: HttpClient) { }
  public updateSpecialite(specialite:any) {
      this.http.put("http://localhost:8080/enicar/gestionNotes/updateSpecialite/",specialite)
  }
  public getAllSpecialites() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllSpecialites");
  }
  public removeSpecialite(id:any) {
      this.http.delete("http://localhost:8080/enicar/gestionNotes/removeSpecialite/"+id);

  }
  public addSpecialite(specialite:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addSpecialite",specialite);
  }}
