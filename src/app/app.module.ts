import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CredentialingqueueComponent } from './credentialingqueue/credentialingqueue.component';


@NgModule({
  declarations: [
    AppComponent,
    CredentialingqueueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CredentialingqueueComponent]
})
export class AppModule { }
