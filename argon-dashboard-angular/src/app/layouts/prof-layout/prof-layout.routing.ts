import { Routes } from '@angular/router';
import { AttribuerAbsenceComponent } from 'src/app/pages/prof-content/attribuer-absence/attribuer-absence.component';
import { AttribuerNoteComponent } from 'src/app/pages/prof-content/attribuer-note/attribuer-note.component';
import { GestionAbsencesComponent } from 'src/app/pages/prof-content/gestion-absences/gestion-absences.component';
import { GestionNotesComponent } from 'src/app/pages/prof-content/gestion-notes/gestion-notes.component';


export const ProfLayoutRoutes: Routes = [
    { path: 'prof/attribuer-note',        component: AttribuerNoteComponent },
    { path: 'prof/gestion-notes',        component: GestionNotesComponent },
    { path: 'prof/gestion-absences',        component: GestionAbsencesComponent },
    { path: 'prof/attribuer-absence',        component: AttribuerAbsenceComponent }
];
