import {Component, View} from 'angular2/core';

@Component({
  selector: 'angular-to-do-app'
})

@View({
  templateUrl: 'angular-to-do-app.html'
})

export class AngularToDoApp {

  constructor() {
    console.info('AngularToDoApp Component Mounted Successfully');
  }

}
