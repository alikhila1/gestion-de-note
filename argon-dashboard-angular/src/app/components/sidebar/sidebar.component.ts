import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ADMINROUTES: RouteInfo[] = [
  { path: 'admin/dashboard', title: 'Dashboard', icon: 'ni ni-chart-bar-32 text-white', class: '' },
  { path: 'admin/gestion-enseignants', title: 'Gestion enseignants', icon: 'ni ni-badge text-white', class: '' },
  { path: 'admin/gestion-etudiants', title: 'Gestion etudiants', icon: 'ni ni-single-02 text-white', class: '' },
  { path: 'admin/gestion-groupes', title: 'Gestion groupes', icon: 'ni ni-bullet-list-67 text-white', class: '' },
  { path: 'admin/gestion-matieres', title: 'Gestion matieres', icon: 'ni ni-books text-white', class: '' },


];
export const ENSEIGNANTROUTES: RouteInfo[] = [
  { path: 'prof/attribuer-note', title: 'Attribuer note', icon: 'ni ni-chart-bar-32 text-white', class: '' },
  { path: 'prof/attribuer-absence', title: 'Attribuer absence', icon: 'ni ni-chart-bar-32 text-white', class: '' },
  { path: 'prof/gestion-notes', title: 'Gestion notes',  icon: 'ni ni-books text-white', class: '' },
  { path: 'prof/gestion-absences', title: 'Gestion absences',  icon: 'ni ni-books text-white', class: '' }
];
export const ETUDIANTROUTES: RouteInfo[] = [
  { path: 'etud/consulter-notes', title: 'Consulter mes notes', icon: 'ni ni-chart-bar-32 text-white', class: '' },
  { path: 'etud/consulter-resultat', title: 'Consulter résultat', icon: 'ni ni-badge text-white', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  
  public menuItems: any[];
  public isCollapsed = true;
  public role: any;
  public userId: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userId'));
    this.role = localStorage.getItem('userRole');
    if (this.role == 'admin') {
      this.menuItems = ADMINROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    } else if (this.role == 'enseignant') {
      this.menuItems = ENSEIGNANTROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    } else if (this.role == 'etudiant') {
      this.menuItems = ETUDIANTROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
  }
}
