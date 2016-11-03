import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
