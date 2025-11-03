import { Routes } from '@angular/router';
import { ConsulterNotesComponent } from 'src/app/pages/etud-content/consulter-notes/consulter-notes.component';
import { ConsulterResultatComponent } from 'src/app/pages/etud-content/consulter-resultat/consulter-resultat.component';


export const EtudLayoutRoutes: Routes = [
    { path: 'etud/consulter-notes',        component: ConsulterNotesComponent },
    { path: 'etud/consulter-resultat',        component: ConsulterResultatComponent },
    
];
