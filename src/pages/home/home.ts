import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';

import {NiveauPage} from "../niveau/niveau";
import {Palier, PALIER_MATH_CP} from "../../model/model";
import {AlSounds} from "../../services/al-sounds.service";
import {PalierPage} from "../palier/palier";
import {AlModel} from "../../model/model.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public niveauPage : NiveauPage;
  public palier : Palier = PALIER_MATH_CP;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app : App,
              private model : AlModel,
              private notification : AlSounds){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPalier()
  {
    this.navCtrl.push(PalierPage);
  }


}

