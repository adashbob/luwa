import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {Palier, PALIER_MATH_CP} from "../../model/model";
import {HomePage} from "../home/home";
import {NiveauPage} from "../niveau/niveau";

@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html'
})
export class PerformancePage {

  public palier : Palier = PALIER_MATH_CP;
  public niveau : number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad PerformancePage');
  }


  openNiveau(palier: Palier)
  {
    this.navCtrl.push(NiveauPage, {'palier': palier});
  }

  //
  goBack(){
    this.navCtrl.push(HomePage);
  }


  goNext(){
    console.log('Go Next ..!!');
  }
}
