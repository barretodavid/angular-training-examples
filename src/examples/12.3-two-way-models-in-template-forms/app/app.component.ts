/// <reference path="../../../typings.d.ts" />

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'rio-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  generatedUser = Math.random() + '';
  registerUser(form: NgForm) {
    console.log('Form', form.value);
    console.log('Model', this.generatedUser);
    // in the real world, do something useful with the data
  }
}
