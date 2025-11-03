import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionAdministrateurService {

  constructor(private http: HttpClient) { }
  public updateUser(user:any) {
      this.http.put("http://localhost:8080/enicar/gestionNotes/updateAdministrateur/",user)
  }
  public getAllUsers() {
      return this.http.get("http://localhost:8080/enicar/gestionNotes/getAllAdministrateurs");
  }
  public removeUser(id:any) {
      this.http.delete("http://localhost:8080/enicar/gestionNotes/removeAdministrateur/"+id);
  }
  public addUser(user:any) {
    return this.http.post("http://localhost:8080/enicar/gestionNotes/addAdministrateur",user);
  }
  public getUserLogged(username:any,password:any){
    
    console.log(username+password+"service");
    return this.http.get("http://localhost:8080/enicar/gestionNotes/getAdminLogged?username="+username+"&password="+password);
  }
  
  
}
