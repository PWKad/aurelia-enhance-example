import {bindable} from 'aurelia-templating';

export class CustomTable {
  @bindable title = '';
  isShowing = true;
  toggleShow() {
    this.isShowing = !this.isShowing;
  }
}
