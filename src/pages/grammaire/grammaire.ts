import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-grammaire',
  templateUrl: 'grammaire.html'
})
export class GrammairePage {

  silideItems : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.silideItems = [
      {
        img : 'tool.svg',
        text : 'Apprendre ses leçons au jour le jour.',
        level : '12',
        score : '14',
        note : '11'
      },
      {
        img : 'notebook.svg',
        text : 'L\'Art de l\'apprentissage.',
        level : '10',
        score : '30',
        note : '15'
      },
      {
        img : 'network.svg',
        text : 'Many children learn and go every day to school',
        level : '2',
        score : '4',
        note : '10'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammairePage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
