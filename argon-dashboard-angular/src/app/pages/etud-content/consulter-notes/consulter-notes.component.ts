import { Component, OnInit } from '@angular/core';
import { GestionEtudiantEtrangerService } from 'src/app/services/gestion-etudiant-etranger.service';
import { GestionEtudiantLocalService } from 'src/app/services/gestion-etudiant-local.service';
import { GestionResultatsService } from 'src/app/services/gestion-resultats.service';

@Component({
  selector: 'app-consulter-notes',
  templateUrl: './consulter-notes.component.html',
  styleUrls: ['./consulter-notes.component.scss']
})
export class ConsulterNotesComponent implements OnInit {
  pageItems: any;
  startIndex = 0;
  taille: any;
  currentItem: any;
  endIndex = 5;
  closeResult: string;
  userId: any;
  public focus;
  username: any;
  notes: any = [];
  etudiant: any = [];
  matieres: any = [];
  note: any = [];
  moyenne: any;
  resultat : any;
  i : any;
  moys: any = [];
  constructor(private gestionEtudiantLocalService: GestionEtudiantLocalService, private gestionResutatsService: GestionResultatsService, private gestionEtudiantEtrangerService: GestionEtudiantEtrangerService) {
    this.username = localStorage.getItem('userName');
    this.userId = localStorage.getItem('userId');
  }

  async ngOnInit() {
    let i = 0;
    let j = 0;
    let k = 0;
    let test = false;
    if (localStorage.getItem("userNat") == "etranger") {
      await this.gestionEtudiantEtrangerService.getUser(this.username).toPromise().then(data => {
        this.notes = data['notes'];
        let matiere =
        {
          "matiere": this.notes[0].mat.nom,
          "notes": [],
          "coef": this.notes[0].mat.coef,
          "moy": "",

        }
        this.matieres.push(matiere);
        for (k = 0; k < this.notes.length; k++) {
          for (j = 0; j < this.matieres.length; j++) {
            if (this.notes[k].mat.nom == this.matieres[j].matiere) {
              test = true;
            }
          }
          if (!test) {
            let matiere =
            {
              "matiere": this.notes[k].mat.nom,
              "coef": this.notes[k].mat.coef,
              "moy": "",
              "notes": []
            }
            this.matieres.push(matiere);
          }
          test=false;
        }
        for (i = 0; i < this.notes.length; i++) {
          for (j = 0; j < this.matieres.length; j++) {
            if (this.notes[i].mat.nom == this.matieres[j].matiere) {
              let note = {
                "vnote": this.notes[i].vnote,
                "type": this.notes[i].type
              }
              if (this.notes[i].type == "cc") {
                let n;
                let pos=this.matieres[j].notes.find((n)=>n.type=="tp");
                if(pos==undefined){
                  pos=0;
                }
                this.matieres[j].notes.splice(pos, 0, note);
              }
              if (this.notes[i].type == "tp") {
                let pos=this.matieres[j].notes.find((n)=>n.type=="examen");
                
                if(pos==undefined){
                  pos=1;
                }
                console.log(pos);
                this.matieres[j].notes.splice(pos, 0, note);
              }
              if (this.notes[i].type == "examen") {
                this.matieres[j].notes.splice(2, 0, note);
              }

            }
          }
        }
      });
    }
    if (localStorage.getItem("userNat") == "local") {
      await this.gestionEtudiantLocalService.getUsersWithNotes(this.userId).toPromise().then(data => {
        this.etudiant = data;
        //console.log(this.etudiant)
        for (this.i = 0; this.i < this.etudiant.length; (this.i)++) {
            this.notes.push(this.etudiant[this.i].note_type+" : "+this.etudiant[this.i].vnote);
            let note = {
              "vnote": this.notes[i].vnote,
              "type": this.notes[i].type
            }
            if (this.notes[i].type == "cc") {
              let n;
              let pos=this.matieres[j].notes.find((n)=>n.type=="tp");
              if(pos==undefined){
                pos=0;
              }
              this.matieres[j].notes.splice(pos, 0, note);
            }
            if (this.notes[i].type == "tp") {
              let pos=this.matieres[j].notes.find((n)=>n.type=="examen");
              
              if(pos==undefined){
                pos=1;
              }
              console.log(pos);
              this.matieres[j].notes.splice(pos, 0, note);
            }
            if (this.notes[i].type == "examen") {
              this.matieres[j].notes.splice(2, 0, note);
            }
          }
          this.resultat = this.insererNotes(this.etudiant);
          console.log(this.resultat)
          console.log(this.resultat[0].notes[0].vnote);

          for (j = 0; j < this.resultat.length; j++) {
            this.moyenne = this.calculMoy(this.resultat[j].notes);
            let matiere =
          {
            "data": this.resultat[j],
            "moy": this.moyenne,

          }
          
          this.matieres.push(matiere);
          console.log(this.matieres)
          }
          this.gestionResutatsService.moyMatieres = this.matieres;
          console.log(this.moyenne)

          
      });
    }
    
    
    }

   insererNotes(matieresNotes) {
      let result = [];
  
      // Parcourir les données pour regrouper les notes par matière
      matieresNotes.forEach(item => {
          // Vérifier si la matière existe déjà dans le résultat
          let existingMatiere = result.find(matiere => matiere.matiere === item.matiere_nom);
  
          // Si la matière n'existe pas encore, la créer avec une liste vide de notes
          if (!existingMatiere) {
              existingMatiere = {
                  matiere: item.matiere_nom,
                  coef: item.matiere_coef,
                  notes: []
              };
              result.push(existingMatiere);
          }
  
          // Ajouter la note à la liste des notes de la matière
          existingMatiere.notes.push({
              type: item.note_type,
              vnote: item.vnote
          });
      });
  
      return result;
  }

    
    
    /*
    if(this.matieres.length<=5){
      this.pageItems= new Array(0);
    }
    else{
    if (this.matieres.length % 5 == 0) {
      this.pageItems = new Array(Math.trunc(this.matieres.length / 5));
      
    }
    else { this.pageItems = new Array(Math.trunc(this.matieres.length / 5) + 1) }}
    this.currentItem = 0;
    this.taille = this.pageItems.length;
    this.gestionResutatsService.moyMatieres = this.matieres;
  }
  updateIndex(y) {
    this.currentItem = y;
    this.startIndex = y * 5;
    this.endIndex = this.startIndex + 5;


  }*/
  
  verifCc(v: any) {
    let i = 0;
    for (i; i < v.length; i++) {
      if (v[i].type == "cc") {
        return true;
      }
    }
    return false;
  }
  verifTp(v: any) {
    let i = 0;
    for (i; i < v.length; i++) {
      if (v[i].type == "tp") {
        return true;
      }
    }
    return false;
  }
  verifExamen(v: any) {
    let i = 0;
    for (i; i < v.length; i++) {
      if (v[i].type == "examen") {
        return true;
      }
    }
    return false;
  }
  
  
  calculMoy(m: any) {
    let i = 0;
    let moy = 0
    let coef = 0;
    let n;
    for (i; i < m.length; i++) {
      if (m[i].vnote == "_") {
        n = 0;
      } else {
        n = m[i].vnote;
      }
      if (m[i].type == "tp") {
        coef = 0.2;
      } else if (m[i].type == "cc") {
        coef = 0.3;
      } else {
        coef = 0.5;
      }


      moy += (n * coef);

    }

    return moy-1;
  }
  
  

}

