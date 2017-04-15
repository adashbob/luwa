import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {Palier, PALIER_MATH_CP} from "../../model/model";
import {NiveauPage} from "../niveau/niveau";

@Component({
  selector: 'page-palier',
  templateUrl: 'palier.html'
})
export class PalierPage {

  public palier : Palier = PALIER_MATH_CP;
  public niveau : number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad palierPage');
  }


  openNiveau(palier: Palier)
  {
    this.navCtrl.push(NiveauPage, {'palier': palier});
  }

  openCurrentNiveau(event){
    console.log(event.value);
    this.openNiveau(this.palier);
  }
}
