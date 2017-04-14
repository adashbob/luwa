import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';

import {NiveauPage} from "../niveau/niveau";
import {Palier, PALIER_MATH_CP} from "../../model/model";
import {PerformancePage} from "../performance/performance";
import {AlSounds} from "../../services/al-sounds.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public niveauPage : NiveauPage;
  public palier : Palier = PALIER_MATH_CP;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app : App, private notification : AlSounds) {

  }

  playSon(){
    this.notification.playBtnSound();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPerformance()
  {
    this.navCtrl.push(PerformancePage);
  }


}

