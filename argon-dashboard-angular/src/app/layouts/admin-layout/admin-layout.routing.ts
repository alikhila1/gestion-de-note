import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/admin-content/dashboard/dashboard.component';
import { GestionEnseignantsComponent } from 'src/app/pages/admin-content/gestion-enseignants/gestion-enseignants.component';
import { GestionEtudiantsComponent } from 'src/app/pages/admin-content/gestion-etudiants/gestion-etudiants.component';
import { GestionGroupesComponent } from 'src/app/pages/admin-content/gestion-groupes/gestion-groupes.component';
import { GestionMatieresComponent } from 'src/app/pages/admin-content/gestion-matieres/gestion-matieres.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'admin/dashboard',        component: DashboardComponent },
    { path: 'admin/gestion-etudiants', component: GestionEtudiantsComponent },
    { path: 'admin/gestion-enseignants',   component: GestionEnseignantsComponent },
    { path: 'admin/gestion-groupes',   component: GestionGroupesComponent },
    { path: 'admin/gestion-matieres',   component: GestionMatieresComponent }
   
    
];

