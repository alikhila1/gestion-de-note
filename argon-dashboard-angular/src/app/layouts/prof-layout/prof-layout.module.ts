import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfLayoutRoutes } from './prof-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfLayoutRoutes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    
  ]
})

export class ProfLayoutModule {}

