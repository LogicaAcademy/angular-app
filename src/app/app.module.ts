import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunniComponent } from './alunni/alunni.component';
import { DettagliAlunnoComponent } from './dettagli-alunno/dettagli-alunno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunniComponent,
    DettagliAlunnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
