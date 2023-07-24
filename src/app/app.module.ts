import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfocompComponent } from './infocomp/infocomp.component';
import { FormsModule } from '@angular/forms';
import { CartdirectiveDirective } from './cartdirective.directive';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    InfocompComponent,
    CartdirectiveDirective,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot([

      {path:'admin' , component:InfocompComponent},
      {path:'', redirectTo:'admin', pathMatch:'full'},
      {path:'**' , component:PagenotfoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
