// app/question/question.component.ts
import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: [
        './question.component.scss',
    ],
})
export class QuestionComponent{
    constructor(public gameService: GameService){}
}
