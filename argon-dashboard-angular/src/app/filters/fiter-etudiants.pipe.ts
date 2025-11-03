import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fiterEtudiants'
})
export class FiterEtudiantsPipe implements PipeTransform {

  transform(etudiants: any,arg: any): any {
    if(arg==undefined){
      return etudiants;
    }else{
      return etudiants.filter(etudiant=>(etudiant.nom+' '+etudiant.prenom).toLocaleLowerCase().includes(arg.toLocaleLowerCase())
      )
    }
  }
}
