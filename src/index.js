import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AngularToDoApp} from 'angular-to-do-app';

@Component({
  selector: 'main'
})

@View({
  directives: [AngularToDoApp],
  template: `
    <angular-to-do-app></angular-to-do-app>
  `
})

class Main {

}

bootstrap(Main);
