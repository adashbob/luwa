import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'al-btn-next',
  template:`
    <div class="al-btn-next">
      <ion-row>
        <ion-col col-10></ion-col>
        <ion-col col-2>
          <p (click)="goNext()"><img src="assets/img/8-01.png" alt="arrow"></p>
        </ion-col>
      </ion-row>
    </div>`
})
export class AlBtnNext{

  @Output() nextPage = new EventEmitter();

  goNext(){
    this.nextPage.emit({
      value: 'Go to next page'
    })
  }
}