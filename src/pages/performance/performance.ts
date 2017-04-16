import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Lecon, LECON_ARITH} from "../../model/model";

@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html'
})
export class PerformancePage {

  public lecon : Lecon = LECON_ARITH;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.lecon = this.navParams.get('lecon');

  }

  goBackPage(){
    this.navCtrl.pop();
  }

}