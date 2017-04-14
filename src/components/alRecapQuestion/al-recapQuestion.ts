import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'al-recap-question',
  template:`
    <div class="al-recap-question">
      <ion-row col-12 padding>
        <ion-col class="al-col-recap">{{ typeEntrainement }}</ion-col>
        <ion-col class="al-col-recap">Exercice {{ exerciceNumber }}</ion-col>
        <ion-col class="al-col-recap">Réussis {{ validQuestion }}</ion-col>
      </ion-row>
    </div>`
})
export class AlRecapQuestion{

  @Input()
  typeEntrainement : string;

  @Input()
  exerciceNumber : number;

  @Input()
  validQuestion : number;


  constructor(public navCtrl : NavController){}

  goBack(){
    this.navCtrl.pop();
  }


}