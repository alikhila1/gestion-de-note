import { Component, OnInit } from '@angular/core';
import { GestionResultatsService } from 'src/app/services/gestion-resultats.service';

@Component({
  selector: 'app-consulter-resultat',
  templateUrl: './consulter-resultat.component.html',
  styleUrls: ['./consulter-resultat.component.scss']
})
export class ConsulterResultatComponent implements OnInit {

  constructor(private gestionResultatsService:GestionResultatsService) { 
    this.nom=localStorage.getItem("userNom");
    this.mail=localStorage.getItem("userMail");
  }
  moyG:any;
  dec:any;
  nom:any;
  mail:any;
  ngOnInit(): void {
  let moy=0;
  let coefTotal=0;
  console.log(this.gestionResultatsService.moyMatieres[0])
  for(let i=0;i<this.gestionResultatsService.moyMatieres.length;i++){
      moy+=this.gestionResultatsService.moyMatieres[i].moy*this.gestionResultatsService.moyMatieres[i].data.coef;
      coefTotal+=this.gestionResultatsService.moyMatieres[i].data.coef;
  }
  this.moyG=moy/coefTotal;
  if(this.moyG>=10){
    this.dec="Admis";
  }else{
    this.dec="Ajourne";
  }
  let res={
    "moy":this.moyG,
    "dec":this.dec,
    "etd":{
          "id":localStorage.getItem("userId")
    }
  }
  this.gestionResultatsService.addResultat(res).subscribe(data=>{

  })
  }
}
