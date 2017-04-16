import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'al-btn-back',
  template:`
    <div class="al-btn-back">
      <ion-row>
      <ion-col col-2>
          <p (click)="goBack()"><img src="assets/img/9-01.png" width="38" alt="arrow"></p>
        </ion-col>
      <ion-col col-10></ion-col>
      </ion-row>
    </div>`
})
export class AlBtnBack{

  @Output() backPage = new EventEmitter();

  goBack(){
    this.backPage.emit({
      value: 'Go to back page'
    })
  }
}