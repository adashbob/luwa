import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {NiveauPage} from "../../pages/niveau/niveau";
import {Palier} from "../../model/model";

@Component({
  selector: 'al-palier',
  templateUrl: 'tabPalier.html'
})
export class AlTabPalier{

  @Input()
  currentlevel : string;

  @Input()
  palier : string;


  constructor(public navCtrl : NavController){}

  range(value){
    let a = [];
    for(let i = 0; i < value; ++i) {
      a.push(i+1)
    }
    return a;
  }

  openNiveau(palier: Palier)
  {
    this.navCtrl.push(NiveauPage, {'palier': palier});
  }


}