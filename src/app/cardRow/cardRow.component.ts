import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-cardRow',
    templateUrl: 'cardRow.component.html',
    styleUrls: [
        'cardRow.component.scss',
    ]
})
export class CardRowComponent{
    constructor(public gameService: GameService){}
}
