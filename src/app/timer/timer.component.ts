import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-timer',
    templateUrl: 'timer.component.html',
    styleUrls: [
        'timer.component.scss',
    ]
})
export class TimerComponent{
    constructor(public gameService: GameService){}
}
