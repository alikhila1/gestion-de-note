import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GestionEnseignantService } from 'src/app/services/gestion-enseignant.service';
import { GestionEtudiantEtrangerService } from 'src/app/services/gestion-etudiant-etranger.service';
import { GestionEtudiantLocalService } from 'src/app/services/gestion-etudiant-local.service';
import { GestionGroupesService } from 'src/app/services/gestion-groupes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gestion-absences',
  templateUrl: './gestion-absences.component.html',
  styleUrls: ['./gestion-absences.component.scss']
})
export class GestionAbsencesComponent implements OnInit {

  pageItems: any;
  startIndex = 0;
  taille: any;
  currentItem: any;
  endIndex = 5;
  closeResult: string;
  groupeSelected:any;
  EtudiantsAbs :any=[];
  userId: any;
  groupes: any;
  public matieres:any=[];
  etudiants: any = [];
  test: any = [];
  totEtd: any = [];
  i: any;
  j: any;
  k:any;
  matiereId:any;
  matiere: any = {};
  test1: any;
  test2: any;
  matEns:any;
  couleurFond: string = 'initial';

  public focus;
  constructor(private gestionGroupesService: GestionGroupesService, private gestionEnseignantService: GestionEnseignantService, private gestionEtudiantLocalService: GestionEtudiantLocalService, private gestionEtudiantEtrangerService: GestionEtudiantEtrangerService) {
    this.userId = localStorage.getItem('userId');
    this.matiereId=localStorage.getItem('matiereId');
  }

  

  async ngOnInit() {
    
    await this.gestionEnseignantService.getUser(this.userId).toPromise().then(data => {
      this.groupes = data['groupes'];
      this.matEns=data['mat'];
    })
    await this.gestionEtudiantLocalService.getAllUsers().toPromise().then(data => {
      this.test = data;
      for (this.i = 0; this.i < this.test.length; (this.i)++) {
        for (this.j = 0; this.j < this.groupes.length; (this.j)++) {
          if (this.test[this.i]["grp"].id == this.groupes[this.j].id) {
            this.etudiants.push(this.test[this.i]);
          }
        }
      }
    })
    await this.gestionEtudiantEtrangerService.getAllUsers().toPromise().then(data => {
      this.test = data;
      for (this.i = 0; this.i < this.test.length; (this.i)++) {
        for (this.j = 0; this.j < this.groupes.length; (this.j)++) {
          if (this.test[this.i]["grp"].id == this.groupes[this.j].id) {
            this.etudiants.push(this.test[this.i]);
          }
        }
      }    
   
    })

    if(this.etudiants.length<=5){
      this.pageItems= new Array(0);
    }
    else{
    if (this.etudiants.length % 5 == 0) {
      this.pageItems = new Array(Math.trunc(this.etudiants.length / 5));
      
    }
    else { this.pageItems = new Array(Math.trunc(this.etudiants.length / 5) + 1) }}
    this.currentItem = 0;
    this.taille = this.pageItems.length;

 
  


  }

  attribuerAbsenceForm = new FormGroup({

    groupe: new FormControl('', Validators.required),
    matiere: new FormControl('', Validators.required),
  

  })

  async onGroupeSelected(value){
    

      this.groupeSelected=value;
      this.gestionEnseignantService.getAllEtudiants(this.attribuerAbsenceForm.get('groupe').value,localStorage.getItem('ensMatId'),).subscribe(
        res=>{
          this.EtudiantsAbs=res;
          console.log(this.EtudiantsAbs,'tttttttttttttttttttt')
        }
      )

  }
  // confirmSwal(id) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: false
  //   })
  //   swalWithBootstrapButtons.fire({
  //     title: 'vous êtes sûre ?',
  //     text: "",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Oui, supprimer',
  //     cancelButtonText: 'Non, annulée',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.gestionEtudiantEtrangerService.removeUser(id).subscribe(results => {
  //       })
  //       this.gestionEtudiantLocalService.removeUser(id).subscribe(results => {
  //       })
  //       swalWithBootstrapButtons.fire({
  //         title: 'Etudiant supprimé',
  //         text: "",
  //         icon: 'success',
  //         timer: 9000
  //       }).then(function () {
  //         window.location.reload();
  //       })
  //     } else if (
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire(
  //         'Action annulée',
  //         '',
  //         'error'
  //       )

  //     }
  //   })

  // }
  updateIndex(y) {
    this.currentItem = y;
    this.startIndex = y * 5;
    this.endIndex = this.startIndex + 5;


  }
 
  getAllEtudiants(){
    let resp = this.attribuerAbsenceForm.get('matiere').value
    console.log(resp,'hhhhhhhhh');
    
    this.gestionEnseignantService.getAllEtudiants(this.attribuerAbsenceForm.get('groupe').value,localStorage.getItem('ensMatId'),).subscribe(
      res=>{
        this.EtudiantsAbs=res;
        console.log(this.EtudiantsAbs,'tttttttttttttttttttt')
      }
    )
    console.log(this.EtudiantsAbs,'hhhhhhhhh');
    
  }

  successSwal() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        popup: 'smaller-dialog', 
       // content: 'smaller-dialog',
        title: 'smaller-dialog',
        htmlContainer: 'smaller-dialog',
        confirmButton: 'smaller-dialog',
        cancelButton: 'smaller-dialog',
        denyButton: 'smaller-dialog'
      }
    });
  }
  

  ajouterAbsence(idEtd){
    this.gestionEnseignantService.ajouterAbsence(idEtd,localStorage.getItem('ensMatId')).subscribe();
    this.successSwal();
}
}
