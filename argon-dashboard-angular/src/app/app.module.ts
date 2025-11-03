import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EtudLayoutComponent } from './layouts/etud-layout/etud-layout.component';
import { ProfLayoutComponent } from './layouts/prof-layout/prof-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin-content/dashboard/dashboard.component';
import { GestionEtudiantsComponent } from './pages/admin-content/gestion-etudiants/gestion-etudiants.component';
import { GestionEnseignantsComponent } from './pages/admin-content/gestion-enseignants/gestion-enseignants.component';
import { ConsulterNotesComponent } from './pages/etud-content/consulter-notes/consulter-notes.component';
import { ConsulterResultatComponent } from './pages/etud-content/consulter-resultat/consulter-resultat.component';
import { ModifierProfilComponent } from './pages/etud-content/modifier-profil/modifier-profil.component';
import { GestionNotesComponent } from './pages/prof-content/gestion-notes/gestion-notes.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FiterEtudiantsPipe } from './filters/fiter-etudiants.pipe';
import { AttribuerNoteComponent } from './pages/prof-content/attribuer-note/attribuer-note.component';
import { GestionGroupesComponent } from './pages/admin-content/gestion-groupes/gestion-groupes.component';
import { GestionMatieresComponent } from './pages/admin-content/gestion-matieres/gestion-matieres.component';
import { GestionAbsencesComponent } from './pages/prof-content/gestion-absences/gestion-absences.component';
import { AttribuerAbsenceComponent } from './pages/prof-content/attribuer-absence/attribuer-absence.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudLayoutComponent,
    ProfLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    GestionEtudiantsComponent,
    GestionEnseignantsComponent,
    ConsulterNotesComponent,
    ConsulterResultatComponent,
    ModifierProfilComponent,
    GestionNotesComponent,
    AuthLayoutComponent,
    FiterEtudiantsPipe,
    AttribuerNoteComponent,
    GestionGroupesComponent,
    GestionMatieresComponent,
    GestionAbsencesComponent,
    AttribuerAbsenceComponent   
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
