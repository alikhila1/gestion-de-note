import { Component, OnInit, ElementRef } from '@angular/core';
import { Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public redirect;
  idUser: string;
  idClient: string;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage= "assets/img/logo.png";
  UserToken: any;
  nom: any;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }
  public setUser() {
    var titlePath = this.location.prepareExternalUrl(this.location.path());
    var titlePathTab = titlePath.split('/');
   
    return titlePathTab[1];
  }
  refreshlocal(){
    localStorage.clear();
  }
  getTitle() {
    var titlePath = this.location.prepareExternalUrl(this.location.path());
    if (titlePath.lastIndexOf('/') != -1) {
      titlePath = titlePath.slice(titlePath.lastIndexOf('/') + 1);
      var titleTab = titlePath.split('-');
      var newTitle = '';
      for (var i = 0; i < titleTab.length; i++) {
        newTitle = newTitle + ' ' + titleTab[i];
      }

    }

   
    return newTitle;
  }
  ngOnInit() {
    
  }
  

}
