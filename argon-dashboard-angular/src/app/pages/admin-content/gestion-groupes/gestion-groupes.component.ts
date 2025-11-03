import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionGroupesService } from 'src/app/services/gestion-groupes.service';
import { GestionMatieresService } from 'src/app/services/gestion-matieres.service';
import { GestionSpecialitesService } from 'src/app/services/gestion-specialites.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-groupes',
  templateUrl: './gestion-groupes.component.html',
  styleUrls: ['./gestion-groupes.component.scss']
})
export class GestionGroupesComponent implements OnInit {
  closeResult: string;
  pageItems: any;
  startIndex = 0;
  taille: any;
  endIndex = 5;
  currentItem: any;
  public focus;
  groupes: any ;
  specialites:any;
  groupeMa:any;
  matieres:any=[];
  closeImage= "assets/img/icons/common/close.png";
  constructor(private modalService: NgbModal,private gestionMatieresService:GestionMatieresService,private gestionSpecialitesService:GestionSpecialitesService,private gestionGroupesService:GestionGroupesService) { }

  async ngOnInit(){
    await this.gestionSpecialitesService.getAllSpecialites().toPromise().then(results=>{
      this.specialites=results;
    })
    await this.gestionMatieresService.getAllMatieres().toPromise().then((data)=>{
      this.matieres=data;}
      )
    await this.gestionGroupesService.getAllGroupes().toPromise().then(results=>{
      this.groupes=results;
      if(this.groupes.length<=5){
        this.pageItems= new Array(0);
      }
      else{
      if (this.groupes.length % 5 == 0) {
        this.pageItems = new Array(Math.trunc(this.groupes.length / 5));
        
      }
      else { this.pageItems = new Array(Math.trunc(this.groupes.length / 5) + 1) }}
      this.currentItem = 0;
      this.taille = this.pageItems.length;
     })
    
  }
  openAjout(content, type, modalDimension) {
    if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-mini', size: 'lg', centered: true },).result.then((result) => {
        this.closeResult = 'Closed with: $result';

      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { backdrop: false, centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }

  }
  openMatieres(content, type, modalDimension,groupe) {
    this.groupeMa=groupe;
    console.log(this.groupeMa);
    if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-mini', size: 'lg', centered: true },).result.then((result) => {
        this.closeResult = 'Closed with: $result';

      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { backdrop: false, centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }

  }
  openAjoutMat(content, type, modalDimension,groupe) {
    this.groupeMa=groupe;
    console.log(this.matieres);
    if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-mini', size: 'lg', centered: true },).result.then((result) => {
        this.closeResult = 'Closed with: $result';

      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { backdrop: false, centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }

  }
  updateIndex(y) {
    this.currentItem = y;
    this.startIndex = y * 5;
    this.endIndex = this.startIndex + 5;
  }
  addFormGroupe = new FormGroup({
    nom: new FormControl('', Validators.required),
    niveau: new FormControl('', [Validators.required]),
    spec: new FormControl('', [Validators.required])
  })
  get Nom() {
    return this.addFormGroupe.get('nom');
  }
  get Niveau() {
    return this.addFormGroupe.get('niveau');
  }
  get Spec() {
    return this.addFormGroupe.get('spec');
  }
  add_groupe() {
    let g={
      "nom":this.addFormGroupe.get('nom').value,
      "niveau":this.addFormGroupe.get('niveau').value
    }
    console.log(g);    
    let resp=this.gestionGroupesService.addGroupe(g,this.addFormGroupe.get('spec').value).subscribe();
  }
  
  successSwalAjout() {
    Swal.fire(
      'Ce groupe est ajouté!',
      '',
      'success'
    ).then(function () {
      window.location.reload();
    })

  }
  annuler() {
      window.location.reload();
    }

  addFormMatToGrp = new FormGroup({
    nomMat: new FormControl('', Validators.required)
  })
  get NomMat(){
    return this.addFormMatToGrp.get('nomMat');
  }
  add_MatToGrp(){
    console.log(this.groupeMa.id);
    console.log(this.addFormMatToGrp.get("nomMat").value);
    let resp=this.gestionGroupesService.addMatToGroupe(this.groupeMa.id,this.addFormMatToGrp.get("nomMat").value).subscribe();
    
  }
}
