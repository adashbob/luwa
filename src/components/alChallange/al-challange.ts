import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'al-challange',
  templateUrl:'challange.html'
})
export class AlChallange{

  @Input()
  pointAGagner : string;

  @Input()
  caurisADecrocher : string;

  @Input()
  niveauAPasser : string;

  @Input()
  animalADecouvrir : string;


  constructor(public navCtrl : NavController){}


}