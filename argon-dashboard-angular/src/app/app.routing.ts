import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { EtudLayoutComponent } from './layouts/etud-layout/etud-layout.component';
import { ProfLayoutComponent } from './layouts/prof-layout/prof-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'auth/login',
    pathMatch: 'full',
   
  },{
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import( './layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import( './layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  {
    path: '',
    component: EtudLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import( './layouts/etud-layout/etud-layout.module').then(m => m.EtudLayoutModule)
      }
    ]

  },
  {
    path: '',
    component: ProfLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import( './layouts/prof-layout/prof-layout.module').then(m => m.ProfLayoutModule)
      }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: false,
  })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
