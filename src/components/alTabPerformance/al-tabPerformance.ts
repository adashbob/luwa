import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {NiveauPage} from "../../pages/niveau/niveau";
import {Palier} from "../../model/model";

@Component({
  selector: 'al-performance',
  templateUrl: 'tabPerformance.html'
})
export class AlTabPerformancee{

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