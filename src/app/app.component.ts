// app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(public gameService: GameService){
    }

    ngOnInit(): void {
        this.gameService.startGame();
    }
}
