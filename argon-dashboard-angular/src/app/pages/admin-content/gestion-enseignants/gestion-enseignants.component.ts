import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionEnseignantService } from 'src/app/services/gestion-enseignant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-enseignants',
  templateUrl: './gestion-enseignants.component.html',
  styleUrls: ['./gestion-enseignants.component.scss']
})
export class GestionEnseignantsComponent implements OnInit {
  pageItems: any;
  startIndex = 0;
  taille: any;
  currentItem: any;
  endIndex = 5;
  closeResult: string;
  enseignants: any;
  enseignant: any;
  currentEnseignantId: any;
  id: any;
  
  closeImage= "assets/img/icons/common/close.png";
  public focus;
  
  
  constructor(private modalService: NgbModal, private gestionEnseignantService: GestionEnseignantService) {
 

  }

  
  addFormEnseignant = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('',[ Validators.required,Validators.pattern('[259][0-9]{7}')])
  })
  updateFormEnseignant = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('',[ Validators.required,Validators.pattern('[259][0-9]{7}')])
  })
  openAjout(content, type, modalDimension) {
    if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { backdrop:false,windowClass: 'modal-mini', size: 'lg', centered: true },).result.then((result) => {
        this.closeResult = 'Closed with: $result';
        
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { backdrop:false,windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { backdrop:false,centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }

  }
  openModifier(content, type, modalDimension, enseignant) {

    this.updateFormEnseignant.patchValue({
      nom: enseignant.nom,
      prenom: enseignant.prenom,
      mail: enseignant.mail,
      tel:enseignant.tel
      

    });
    this.currentEnseignantId = enseignant.id;
    if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { backdrop:false,windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { backdrop:false,windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { backdrop:false,centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    }

  }
  
  annuler() {
    window.location.reload();
  }

  confirmSwal(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'vous êtes sûre ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annulée',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.gestionEnseignantService.removeUser(id).subscribe(results => {
        })
        swalWithBootstrapButtons.fire({
          title: 'Enseignant supprimé',
          text: "",
          icon: 'success',
          timer: 9000
        }).then(function () {
          window.location.reload();
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Action annulée',
          '',
          'error'
        )

      }
    })

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: $reason';
    }
  }
  

  get Nom() {
    return this.addFormEnseignant.get('nom');
  }
  get Prenom() {
    return this.addFormEnseignant.get('prenom');
  }

  get Mail() {
    return this.addFormEnseignant.get('mail');
  }
  get Tel() {
    return this.addFormEnseignant.get('tel');
  }
  
  updateEnseignant() {
    let nvEnseingant={
      "id":this.currentEnseignantId,
      "mail":this.updateFormEnseignant.get('mail').value,
      "nom":this.updateFormEnseignant.get('nom').value,
      "prenom":this.updateFormEnseignant.get('prenom').value,
      "tel":this.updateFormEnseignant.get('tel').value

    }
    console.log(nvEnseingant);
    let resp = this.gestionEnseignantService.updateUser(nvEnseingant);
    resp.subscribe((data) => this.successSwalModif());
  }

  add_enseignant() {
      let resp = this.gestionEnseignantService.addUser(this.addFormEnseignant.value);
      resp.subscribe((data) =>
        this.successSwalAjout());
  }

  successSwalAjout() {
        Swal.fire(
          'Ce enseignant est ajouté!',
          '',
          'success'
        ).then(function () {
          window.location.reload();
        })

  }
  successSwalModif() {

    Swal.fire(

      'Ce enseignant est modifié!',
      '',
      'success'

    ).then(function () {
      window.location.reload();
    })

  }
  updateIndex(y) {
    this.currentItem = y;
    this.startIndex = y * 5;
    this.endIndex = this.startIndex + 5;
    

  }
  ngOnInit() {
    this.gestionEnseignantService.getAllUsers().subscribe(results => {
      this.enseignants = results;
      if(this.enseignants.length<=5){
        this.pageItems= new Array(0);
      }
      else{
      if (this.enseignants.length % 5 == 0) {
        this.pageItems = new Array(Math.trunc(this.enseignants.length / 5));
        
      }
      else { this.pageItems = new Array(Math.trunc(this.enseignants.length / 5) + 1) }}
      this.currentItem = 0;
      this.taille = this.pageItems.length;



    }
    )
  }


}
