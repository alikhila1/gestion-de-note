import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionEtudiantLocalService {

  constructor(private http: HttpClient) { }
  public updateUser(user: any) {
    return this.http.put("http://localhost:8080/enicar/gestionNotes/updateEtudiantLocal", user)
  }
  public getAllUsers() {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllEtudiantLocals");
  }
  public removeUser(id: any) {
    return this.http.delete("http://localhost:8080/enicar/gestionNotes/removeEtudiantLocal/" + id);
  }
  public addUser(user: any,idGroupe:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addEtudiantLocal/"+idGroupe, user);
  }
  public getUserLogged(username: any, password: any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEtudiantLocalLog?username=" + username + "&password=" + password);
  }
  public getUser(username: any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEtudiantLocal?username=" + username);
  }

  private apiUrl = 'http://localhost:8080/enicar/gestionNotes/getAllEtudiantLocals';

  getAllEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getCountEtudiantsLocal(): Observable<number> {
    return this.http.get<number>(" http://localhost:8080/enicar/gestionNotes/etudiantslocales/count");
  }
  public getAllUsersWithNotes(id : any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllEtudiantLocalsWithNote/" + id);
  }

  public getUsersWithNotes(id : any) {
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getEtudiantLocalsWithNote/" + id);
  }
}