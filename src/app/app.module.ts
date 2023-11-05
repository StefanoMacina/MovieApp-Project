import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { FilmsPageModule } from './Films/films.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  declarations: [AppComponent, CustomDirectiveDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FilmsPageModule],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
