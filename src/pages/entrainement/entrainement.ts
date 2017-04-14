import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Lecon, LECON_ARITH, Palier, PALIER_MATH_CP, Questionnaire} from "../../model/model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-entrainement',
  templateUrl: 'entrainement.html'
})
export class EntrainementPage {

  public palier : Palier = PALIER_MATH_CP;
  public lecon : Lecon = LECON_ARITH;
  public question : Questionnaire;
  public type: string;
  public nbValid : number;
  public nbFailed : number;
  public nbExercice : number;
  public nbQuestion = 1;
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.lecon = this.navParams.get('lecon');
    this.question = this.lecon.questionnaires[0];
    this.type = "Je m'entraine";
    this.nbFailed = 0;
    this.nbValid = 0;
    this.nbExercice = 1;
    this.form = new FormGroup({
      response: new FormControl()
    });

  }

  goBack(){
    this.navCtrl.pop();
  }

  checkResponse(value){
    if(value.response == this.question.reponse){
      this.question = this.lecon.questionnaires[this.nbQuestion];
      this.nbQuestion ++;
      this.nbValid ++;
      this.form.reset();
    }
    console.log(value);
  }
  entrainnement(){

  }

}

export class Exercices{
  exercice: Questionnaire[];
  nbSuccess : number;
  nbFailed: number;
}