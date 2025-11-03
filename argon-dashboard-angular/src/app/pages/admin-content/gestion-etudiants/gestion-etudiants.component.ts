import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionEtudiantLocalService } from 'src/app/services/gestion-etudiant-local.service';
import { GestionEtudiantEtrangerService } from 'src/app/services/gestion-etudiant-etranger.service';
import Swal from 'sweetalert2';
import { GestionGroupesService } from 'src/app/services/gestion-groupes.service';

@Component({
  selector: 'app-gestion-etudiants',
  templateUrl: './gestion-etudiants.component.html',
  styleUrls: ['./gestion-etudiants.component.scss']
})
export class GestionEtudiantsComponent implements OnInit {
  pageItems: any;
  startIndex = 0;
  dispLo: any;
  dispEt: any;
  taille: any;
  currentItem: any;
  endIndex = 5;
  closeResult: string;
  etudiantsEtr: any;
  etudiantsLoc: any;
  etudiant: any;
  currentEtudiantId: any;
  id: any;
  etType: any;
  search: String;
  closeImage= "assets/img/icons/common/close.png";
  public focus;
  groupes: any;
  etudiants: any[];
  tabgroupes: any[];
  
 
  constructor(private modalService: NgbModal, private gestionGroupesService: GestionGroupesService, private gestionEtudiantLocalService: GestionEtudiantLocalService, private gestionEtudiantEtrangerService: GestionEtudiantEtrangerService) {


  }


  addFormEtudiant = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    cin: new FormControl('', [Validators.pattern('[0-9]{8}')]),
    numPass: new FormControl('', [Validators.pattern('[0-9]{8}')]),
    groupe: new FormControl('', [Validators.required]),
    nat: new FormControl('', [Validators.pattern('[a-z]*')])


  })
  updateFormEtudiant = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    groupe: new FormControl('', [Validators.required]),
    cin: new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}')]),
    numPass: new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}')]),
    nat: new FormControl('', [Validators.required, Validators.pattern('[0-9a-z]{9}')])
  })
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
  openModifier(content, type, modalDimension, etudiant, etype) {
    this.etType = etype;
    this.updateFormEtudiant.patchValue({
      nom: etudiant.nom,
      prenom: etudiant.prenom,
      mail: etudiant.mail,
    })
    this.currentEtudiantId = etudiant.id;
    if (modalDimension === 'lg' && type === 'modal_mini') {
      this.modalService.open(content, { backdrop: false, windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
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


  confirmSwal(id, type) {
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
        if (type == "local") {

          this.gestionEtudiantLocalService.removeUser(id).subscribe(results => {
          })
        } else {
          this.gestionEtudiantEtrangerService.removeUser(id).subscribe(results => {
          })
          console.log("fassakht");
        }
        this.gestionEtudiantEtrangerService
        swalWithBootstrapButtons.fire({
          title: 'Etudiant supprimé',
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
    return this.addFormEtudiant.get('nom');
  }
  get Prenom() {
    return this.addFormEtudiant.get('prenom');
  }

  get Mail() {
    return this.addFormEtudiant.get('mail');
  }
  get Cin() {
    return this.addFormEtudiant.get('cin');
  }
  get Nat() {
    return this.addFormEtudiant.get('nat');
  }
  get NumPass() {
    return this.addFormEtudiant.get('numPass');
  }
  get Groupe() {
    return this.addFormEtudiant.get('numPass');
  }
  update_etudiant() {
    let nvEtudiant={
      "id":this.currentEtudiantId,
      "mail":this.updateFormEtudiant.get('mail').value,
      "nom":this.updateFormEtudiant.get('nom').value,
      "prenom":this.updateFormEtudiant.get('prenom').value,


    }
    
    if (this.etType == "local") {
      let resp = this.gestionEtudiantLocalService.updateUser(nvEtudiant);
      resp.subscribe((data) => this.successSwalModif());
    } else {
      let resp = this.gestionEtudiantEtrangerService.updateUser(nvEtudiant);
      resp.subscribe((data) => this.successSwalModif());
    }
  }

  add_etudiant() {
    if (this.dispLo) {
      let resp = this.gestionEtudiantLocalService.addUser(this.addFormEtudiant.value, this.addFormEtudiant.get('groupe').value);
      resp.subscribe((data) =>
        this.successSwalAjout());
    }
    if (this.dispEt) {
      let resp = this.gestionEtudiantEtrangerService.addUser(this.addFormEtudiant.value, this.addFormEtudiant.get('groupe').value);
      resp.subscribe((data) =>
        this.successSwalAjout());
    }
  }
  
  annuler() {
    window.location.reload();
  }

  successSwalAjout() {
    Swal.fire(
      'Cet etudiant est ajouté!',
      '',
      'success'
    ).then(function () {
      window.location.reload();
    })

  }
  successSwalModif() {

    Swal.fire(

      'Cet etudiant est modifié!',
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
  changeType() {
    this.dispLo = !this.dispLo;
    this.dispEt = !this.dispEt;
  }

  async ngOnInit() {
    await this.gestionGroupesService.getAllGroupes().toPromise().then(data => {
      this.groupes = data;

    })
    this.gestionEtudiantLocalService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;

    });
    this.dispLo = true;
    this.dispEt = false;
    this.gestionEtudiantEtrangerService.getAllUsers().subscribe(results => {
      this.etudiantsEtr = results;
      this.gestionEtudiantLocalService.getAllUsers().subscribe(results => {
        this.etudiantsLoc = results;
        if ((this.etudiantsEtr.length + this.etudiantsLoc.length) <= 5) {
          this.pageItems = new Array(0);
        }
        else {
          if ((this.etudiantsEtr.length + this.etudiantsLoc.length) % 5 == 0) {
            this.pageItems = new Array(Math.trunc((this.etudiantsEtr.length + this.etudiantsLoc.length) / 5));

          }
          else { this.pageItems = new Array(Math.trunc((this.etudiantsEtr.length + this.etudiantsLoc.length) / 5) + 1) }
        }
        this.currentItem = 0;
        this.taille = this.pageItems.length;


      })
    }
    )
  }


}
