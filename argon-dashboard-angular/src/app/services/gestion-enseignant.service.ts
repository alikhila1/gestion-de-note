import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionEnseignantService {

  constructor(private http: HttpClient) { }
  public updateUser(user:any) {
      return this.http.put("http://localhost:8080/enicar/gestionNotes/updateEnseignant/",user)
  }
  public getAllUsers() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllEnseignants");
  }
  public removeUser(id:any) {
      return this.http.delete("http://localhost:8080/enicar/gestionNotes/removeEnseignant/"+id);
  }
  public addUser(user:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addEnseignant",user);
  }
  public getUserLogged(user:any){
    
    console.log(user);
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEnseignantLogged?username="+user.username+"&password="+user.password);
  } 
  public  getUser(id:any){
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEnseignant?id="+id);
  } 
  getCountEnseignats(): Observable<number> {
    return this.http.get<number>(" http://localhost:8080/enicar/gestionNotes/ensignants/count");
  }
  public getAllEtudiants(idMatiere : any,idGroupe : any){
    return this.http.get(`http://localhost:8080/enicar/gestionNotes/nombre-absences/${idMatiere}/${idGroupe}`);
  }
  public ajouterAbsence(idEtd : any,idMat : any){
    return this.http.post(`http://localhost:8080/enicar/gestionNotes/ajouterabsenceetud/${idEtd}/${idMat}`,null);
  } 
}
