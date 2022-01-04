import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule, TOKEN_CONFIG } from 'shared';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{
    provide: TOKEN_CONFIG, useValue: { config: 'from header' }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
