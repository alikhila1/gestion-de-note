import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionEtudiantEtrangerService {

  constructor(private http: HttpClient) { }
  public updateUser(user:any) {
      return this.http.put("http://localhost:8080/enicar/gestionNotes/updateEtudiantEtranger",user)
  }
  public getAllUsers() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllEtudiantEtrangers");
  }
  public removeUser(id:any) {
      return this.http.delete("http://localhost:8080/enicar/gestionNotes/removeEtudiantEtranger/"+id);
  }
  public addUser(user:any,idGroupe:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addEtudiantEtranger/"+idGroupe,user);
  }
  public getUserLogged(username:any,password:any){
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEtudiantEtrangerLogged?username="+username+"&password="+password);
  } 
  public getUser(username:any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEtudiantEtranger?username="+username);
  }
  getCountEtudiantsEtranger(): Observable<number> {
    return this.http.get<number>("http://localhost:8080/enicar/gestionNotes/etudiantsEtranger/count");
  }
}
