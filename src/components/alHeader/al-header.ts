import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'al-header',
  template:`
    <div class="al-header">
      <button *ngIf="matiere"  class="al-matiere-title">{{ matiere }}</button>
      <button *ngIf="classe"  class="al-classe">
        <span>{{ classe }}</span>
      </button>
    </div>`
})
export class AlHeader{

  @Input()
  matiere : string;

  @Input()
  classe : string;

  constructor(public navCtrl : NavController){}


}