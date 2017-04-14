import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {Lecon, LECON_ARITH, Palier, Questionnaire} from "../../model/model";
import {EntrainementPage} from "../entrainement/entrainement";

@Component({
  selector: 'page-niveau',
  templateUrl: 'niveau.html'
})
export class NiveauPage {

  public palier : Palier;
  public lecon : Lecon = LECON_ARITH;
  public ptNiveau : any;
  public ptAnimal : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.palier = this.navParams.get('palier');
    this.ptNiveau = '12/20';
    this.ptAnimal = '16/20';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NiveauPage');
  }

  pointAGanger(){
    let som = 0;
    let questions : Questionnaire[] = this.lecon.questionnaires;
    for (let i = 0 ; i < questions.length; i++)
    {
      som += questions[i].pointAGagner;
    }
    return som;
  }

  openEntrainement(lecon: Lecon){
    this.navCtrl.push(EntrainementPage, {'lecon': lecon});
  }

/**
 * Retour en arrière
 */
  goBack(){
    this.navCtrl.pop();
  }


  goNext(){
    console.log('Go Next ..!!');
  }
}
