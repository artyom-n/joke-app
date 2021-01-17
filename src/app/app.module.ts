import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { FormsModule } from '@angular/forms';
import { JokeCardComponent } from './jokes/joke-card/joke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
