import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'al-top-aside',
  template:`  
    <div class="al-top-aside">
      <ion-grid class="al-palier-niveau">
        <ion-row>
          <ion-col col-6 class="al-palier">
            <button ion-button round icon-left>
              Palier
            </button>
          </ion-col>

          <ion-col col-6 class="al-niveau">
            <button ion-button round>
              {{ niveauAPasser }}/{{ niveauADecouvrir}} Niveau
            </button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>`
})
export class AlTopAside{

  @Input()
  niveauAPasser : string;

  @Input()
  niveauADecouvrir : string;


  constructor(public navCtrl : NavController){}


}