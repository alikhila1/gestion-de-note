import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GestionEnseignantService } from 'src/app/services/gestion-enseignant.service';
import { GestionEtudiantEtrangerService } from 'src/app/services/gestion-etudiant-etranger.service';
import { GestionEtudiantLocalService } from 'src/app/services/gestion-etudiant-local.service';
import { GestionGroupesService } from 'src/app/services/gestion-groupes.service';
import { GestionNotesService } from 'src/app/services/gestion-notes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attribuer-absence',
  templateUrl: './attribuer-absence.component.html',
  styleUrls: ['./attribuer-absence.component.scss']
})
export class AttribuerAbsenceComponent implements OnInit {

  name: any;
  @ViewChild("pv", {static: false}) fileUpload: ElementRef;files  = [];  
  fileName:string;
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  
  public groupes:any;
  public etudiants:any=[];
  public matieres:any=[];
  userId:any;
  et:any;
  public show: boolean = true;
  groupeSelected:any;
  test1:any;
  test2:any;
  test:any;
  i:any;
  j:any;
  gp:any;
  matiere:any;

  constructor(private gestionEnseignantService:GestionEnseignantService,private gestionNotesService:GestionNotesService,private gestionGroupesService:GestionGroupesService,private gestionEtudiantLocalService:GestionEtudiantLocalService,private gestionEtudiantEtrangerService:GestionEtudiantEtrangerService,private http: HttpClient) {
    this.name = localStorage.getItem('userNom');
    this.userId = localStorage.getItem('userId');
   
  }
  async onGroupeSelected(value){
    
    this.etudiants=[];
    this.matieres=[];
      this.groupeSelected=value;
      this.gestionEtudiantLocalService.getAllUsers().subscribe(data=> {
         this.test=data;
         for(this.i=0;this.i<this.test.length;(this.i)++){
            if(this.test[this.i].grp.id==value){
              this.etudiants.push(this.test[this.i]);
            }
         }  
      })
      
      this.gestionEtudiantEtrangerService.getAllUsers().subscribe(data=> {
        this.test=data;
        for(this.i=0;this.i<this.test.length;(this.i)++){
          if(this.test[this.i].grp.id==value){
            this.etudiants.push(this.test[this.i]);
          }
        }  
     })
      this.gestionGroupesService.getGroupe(value).subscribe(data=>{
        this.test1=data;
        console.log(this.test1["matieres"]);
        this.gestionEnseignantService.getUser(this.userId).subscribe(res=>{
        this.test2=data;
        console.log(this.test2["matieres"]);
          for(this.i=0;this.i<this.test1["matieres"].length;(this.i)++){
            for(this.j=0;this.j<this.test2["matieres"].length;(this.j)++){
              if(this.test1["matieres"][this.i].id==this.test2["matieres"][this.j].id ){
                console.log(this.test1["matieres"][this.i]);
                this.matieres.push(this.test1["matieres"][this.i]);
              }
            }  
          }  
          console.log(this.matieres);

        })
        
         })

  }
  async ngOnInit(){
    await this.gestionEnseignantService.getUser(this.userId).toPromise().then(data=>{
      this.groupes=data['groupes'];
        })
      
      

  }
  attribuerNoteForm = new FormGroup({

    groupe: new FormControl('', Validators.required),
    matiere: new FormControl('', Validators.required),
    pv: new FormControl('', Validators.required)
    

  })
  get Groupe(){
    return this.attribuerNoteForm.get('groupe');
  }
  get Matiere(){
    return this.attribuerNoteForm.get('matiere');
  }
  get Pv(){
    return this.attribuerNoteForm.get('pv');
  }

  /*
  attribuerNote() {
    // Récupérer le nom de la matière sélectionnée
    let matiereNom: string = this.attribuerNoteForm.get('matiere').value;
  
    // Récupérer le fichier sélectionné
    const file: File = this.attribuerNoteForm.get('pv').file;
    if (!file) {
      console.error('Aucun fichier sélectionné');
      return;
    }
  
    // Créer un objet FormData
    const formData: FormData = new FormData();
  
    // Ajouter le fichier et le nom de la matière à FormData
    formData.append('file', file, file.name);
    formData.append('nomMatiere', matiereNom);
  
    // Appeler le service pour envoyer les données FormData
    let resp = this.gestionNotesService.uploadEtudiantsData(formData).subscribe(
      data => {
        // Traitement après l'envoi des données
      },
      error => {
        // Gérer les erreurs éventuelles
      }
    );
  }  
  

  
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
this.gestionNotesService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
         alert('File Successfully Uploaded');
      }
      this.selectedFiles = undefined;
     }
    );
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  */

  uploadFile(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('nomMatiere',this.attribuerNoteForm.get('matiere').value);
    console.log(formData)
    // Perform the HTTP request
    this.http.post('http://localhost:8080/enicar/gestionNotes/upload-etudiant-data-absence', formData).subscribe((response) => {
    console.log('File uploaded successfully');
    },(error) => {
    console.error('Error uploading file:', error);
    });


    
  }
  

  successSwal(){
    
    Swal.fire({
      icon: 'success',
      title: 'Les absences sont attribuées avec succés',
      text: ''
    }).then(function () {
      window.location.reload();
    })
  }

}
