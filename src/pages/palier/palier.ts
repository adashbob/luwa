import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {Lecon, LECON_ARITH, Palier, PALIER_MATH_CP} from "../../model/model";
import {NiveauPage} from "../niveau/niveau";
import {PerformancePage} from "../performance/performance";

@Component({
  selector: 'page-palier',
  templateUrl: 'palier.html'
})
export class PalierPage {

  public palier : Palier = PALIER_MATH_CP;
  public niveau : number = 1;
  public lecon : Lecon = LECON_ARITH;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad palierPage');
  }


  openNiveauPage(palier: Palier)
  {
    this.navCtrl.push(NiveauPage, {'palier': palier});
  }

  openCurrentNiveau(event){
    console.log(event.value);
    this.openNiveauPage(this.palier);
  }

  openPerformancePage(event){
    this.navCtrl.push(PerformancePage, {'lecon': this.lecon})
  }

  goBackPage(event){
    this.navCtrl.pop();
  }
}
