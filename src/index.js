import {Component, View} from '../node_modules/angular2/core';
import {bootstrap} from '../node_modules/angular2/platform/browser';
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
