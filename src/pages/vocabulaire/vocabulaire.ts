import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Vocabulaire page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vocabulaire',
  templateUrl: 'vocabulaire.html'
})
export class VocabulairePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabulairePage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
