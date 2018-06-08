import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login.service';
import { routes } from './app.routing'
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './login/auth-guard.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CredInterceptor } from './shared/cred-interceptor';
import { QueueComponent } from './review/queue/queue.component';
import { CertificationComponent } from './review/certification/certification.component';
=======
>>>>>>> parent of e318a6a... Credentialing Queue Processing


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    LoginComponent,
    QueueComponent,
    CertificationComponent
=======
    AppComponent
>>>>>>> parent of e318a6a... Credentialing Queue Processing
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
<<<<<<< HEAD
  providers: 
  [LoginService, 
   AuthGuardService,
   {
    provide: HTTP_INTERCEPTORS,
    useClass: CredInterceptor,
    multi: true
  }
  ],
=======
  providers: [],
>>>>>>> parent of e318a6a... Credentialing Queue Processing
  bootstrap: [AppComponent]
})
export class AppModule { }
