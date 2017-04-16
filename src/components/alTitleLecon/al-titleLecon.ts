import {Component, Input} from "@angular/core";

@Component({
  selector: 'al-title-lecon',
  template:`
    <div class="al-title-lecon">
      <button ion-button round class="al-btn al-bg-red">{{ lecon }}</button>
    </div>`
})
export class AlTitleLecon{

  @Input() lecon : string;
}