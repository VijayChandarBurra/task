import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule }   from '@angular/forms';
import { ErrormsgsComponent } from './errormsgs/errormsgs.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrormsgsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
