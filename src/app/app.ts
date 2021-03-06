/// <reference path="../../.tmp/typings/bundle.d.ts" />

import 'reflect-metadata';
import 'es6-shim';
import 'zone.js';

import {Component, View, bootstrap} from 'angular2/angular2';

import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'app/app.html'
})
// Component controller
class MyAppComponent {
  greeting: string;
  constructor() {
    this.greeting = 'Hello! World!';
  }
}

bootstrap(MyAppComponent);
