import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionNotesService {

  constructor(private http: HttpClient) { }
  public updateNote(note:any) {
      this.http.put("http://localhost:8080/enicar/gestionNotes/updateNote",note)
  }
  public getAllNotes() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllNotes");
  }
  public removeNote(id:any) {
      this.http.delete("http://localhost:8080/enicar/gestionNotes/removeNote/"+id);

  }
  public addNote(note:any,etud:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addNote/"+etud,note);
  }

  public uploadEtudiantsData(pv:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/upload-etudiant-data/",pv);
  }


  public addAllNote(pv:any,mat:any) {
    console.log("http://localhost:8080/enicar/gestionNotes/upload-etudiant-data/"+pv,mat);
    return this.http.post("http://localhost:8080/enicar/gestionNotes/upload-etudiant-data/",pv,mat);
  }}
