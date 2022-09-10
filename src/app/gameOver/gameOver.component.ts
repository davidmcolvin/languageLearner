import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component ({
    selector: 'app-gameOver',
    templateUrl: 'gameOver.component.html',
    styleUrls: [
        'gameOver.component.scss',
    ]
})
export class GameOverComponent{
    constructor(public gameService: GameService) {}
}
