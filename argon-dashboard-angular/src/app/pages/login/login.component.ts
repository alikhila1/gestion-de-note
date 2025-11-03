import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionAdministrateurService } from 'src/app/services/gestion-administrateur.service';
import { GestionEnseignantService } from 'src/app/services/gestion-enseignant.service';
import { GestionEtudiantEtrangerService } from 'src/app/services/gestion-etudiant-etranger.service';
import { GestionEtudiantLocalService } from 'src/app/services/gestion-etudiant-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  type_input=false;
  getData() {
    console.log(this.loginForm.value);
  }
  public get username() {
    return this.loginForm.get('username');
  }
  public get password() {
    return this.loginForm.get('password');
  }
  constructor(private gestionEnseignantService:GestionEnseignantService,
    private gestionEtudiantLocalService:GestionEtudiantLocalService,private gestionAdminService:GestionAdministrateurService,private gestionEtudiantEtrangerService:GestionEtudiantEtrangerService, private _router: Router) { }
 
  ngOnInit() {
  
    localStorage.clear();
  }
  user: any;
  token: any;
  show=false;
  changeInput() {
    this.type_input = !this.type_input;
  }
  getAccess(){
      let user={
        "username":this.loginForm.get('username').value,
        "password":this.loginForm.get('password').value
      }
      let respEnsei = this.gestionEnseignantService.getUserLogged(user);
      respEnsei.subscribe(data => {
          this.user = data; 
          if(this.user!=null){
          console.log(this.user);
          localStorage.setItem('userRole', "enseignant");
          localStorage.setItem('userId', this.user.id);
          localStorage.setItem('userNom', this.user.prenom +' '+ this.user.nom);
          localStorage.setItem('ensMatId', this.user.mat.id);
          this._router.navigate(['/prof/attribuer-note']);
          }
        }, error => {
          console.warn(error);
          
      }
        )
        let respEtudLoc = this.gestionEtudiantLocalService.getUserLogged(this.loginForm.get('username').value,this.loginForm.get('password').value);
        respEtudLoc.subscribe(data => {
            this.user = data; 
           // console.log(this.user[0].user_id)
            console.log(this.user)
            if(this.user!=null){
            localStorage.setItem('userNat', "local");
            localStorage.setItem('userRole', "etudiant");
            localStorage.setItem('userId', this.user[0].user_id);
            //console.log(this.user.user_id)
            localStorage.setItem('userMail',this.user[0].user_mail);
            localStorage.setItem('userNom', this.user[0].user_pre +' '+ this.user[0].user_nom);
            localStorage.setItem('userName', this.user[0].user_name);
            this._router.navigate(['/etud/consulter-notes']);
          }
          }, error => {
            console.warn(error);
            
        })
        let respAdmin = this.gestionAdminService.getUserLogged(this.loginForm.get('username').value,this.loginForm.get('password').value);
        respAdmin.subscribe(data => {
            this.user = data; 
            if(this.user!=null){
            console.log(this.user);
            localStorage.setItem('userRole', "admin");
            localStorage.setItem('userId', this.user.id);
            console.log(this.user.id)
            localStorage.setItem('userNom', this.user.prenom +' '+ this.user.nom);
            this._router.navigate(['/admin/dashboard']);
          }
          }, error => {
            console.warn(error);
            
        })
        let respEtudEt = this.gestionEtudiantEtrangerService.getUserLogged(this.loginForm.get('username').value,this.loginForm.get('password').value);;
        respEtudEt.subscribe(data => {
            this.user = data;
            if(this.user!=null) {
            localStorage.setItem('userNat', "etranger");
            localStorage.setItem('userRole', "etudiant");
            localStorage.setItem('userId', this.user.id);
            localStorage.setItem('userNom', this.user.prenom +' '+ this.user.nom);
            localStorage.setItem('userName', this.user.username);
            this._router.navigate(['/etud/consulter-notes']);
            
            }
          }, error => {
            console.warn(error);
            
        })
        
      }
  }

