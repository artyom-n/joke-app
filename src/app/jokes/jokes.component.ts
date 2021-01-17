import { Joke } from '../models/joke.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {
  jokes = [
    {question:'What did the bee say to the flower?', answer: 'Hello, honey!'}, 
    {question:'What did the baseball glove say to the ball?', answer: 'Catch you later.'},
    {question:'When is it bad luck to see a black cat?', answer: 'When you are a mouse.'}
  ];
  
  newQuestion = '';
  newAnswer = '';

  addJoke(): void {
    this.jokes.unshift({question: this.newQuestion, answer: this.newAnswer})
  }  

  removeJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
