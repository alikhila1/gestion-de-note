import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionEtudiantLocalService } from 'src/app/services/gestion-etudiant-local.service';
import { GestionEtudiantEtrangerService } from 'src/app/services/gestion-etudiant-etranger.service';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../../variables/charts";
import { GestionEnseignantService } from 'src/app/services/gestion-enseignant.service';
import { GestionMatieresService } from 'src/app/services/gestion-matieres.service';
import { GestionSpecialitesService } from 'src/app/services/gestion-specialites.service';
import { GestionGroupesService } from 'src/app/services/gestion-groupes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  countEtudiantsEtranger: number;
  countEtudiantsLocal: number;
  countEnsignants: number;
  countMatieres:number;
  countGroupes:number;
  
  constructor(private modalService: NgbModal,  private gestionEtudiantLocalService: GestionEtudiantLocalService, private gestionEtudiantEtrangerService: GestionEtudiantEtrangerService, private gestionEnseignantService: GestionEnseignantService,private gestionMatieresService:GestionMatieresService,private gestionSpecialitesService:GestionSpecialitesService,private gestionGroupesService:GestionGroupesService) {


  }
  ngOnInit(): void {
    this.gestionEtudiantEtrangerService.getCountEtudiantsEtranger().subscribe(
      count => {
        this.countEtudiantsEtranger = count;
      },
      error => {
        console.log("Erreur lors de la récupération du nombre d'étudiants étrangers :", error);
      }
    );

    this.gestionEtudiantLocalService.getCountEtudiantsLocal().subscribe(
      count => {
        this.countEtudiantsLocal = count;
      },
      error => {
        console.log("Erreur lors de la récupération du nombre d'étudiants étrangers :", error);
      }
    );
    
    this.gestionEnseignantService.getCountEnseignats().subscribe(
      count => {
        this.countEnsignants = count;
      },
      error => {
        console.log("Erreur lors de la récupération du nombre d'étudiants étrangers :", error);
      }
    );

    this.gestionGroupesService.getCountgroupes().subscribe(
      count => {
        this.countGroupes = count;
      },
      error => {
        console.log("Erreur lors de la récupération du nombre d'étudiants étrangers :", error);
      }
    );
    this.gestionMatieresService.getCountmatieres().subscribe(
      count => {
        this.countMatieres = count;
      },
      error => {
        console.log("Erreur lors de la récupération du nombre d'étudiants étrangers :", error);
      }
    );
  }
}

