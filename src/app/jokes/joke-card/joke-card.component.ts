import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
  @Input() joke: any;
  @Input() answer: any;
  @Output() jokeDeletion = new EventEmitter();
  answerDisabled = true;

  removeJoke(): void {
    this.jokeDeletion.emit();
  }
}
