import { Component, Input, OnDestroy  } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { MessageService } from 'src/app/message.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cardRow-card',
    templateUrl: 'card.component.html',
    styleUrls: [
        'card.component.scss',
    ]
})
export class CardComponent implements OnDestroy {
    constructor(
        private gameService: GameService,
        private messageService: MessageService
    ) {
        this.subscription = this.messageService.getMessage().subscribe((message) => {
          if (message.text === 'CardClicked') {
            if (gameService.getCurrentQuestion() !== this.imageName) {
                this.classes = 'fadedCard';
            }
          }
        });
    }

    @Input() imageUrl: string;
    @Input() imageName: string;
    subscription: Subscription;
    classes = '';

    public cardClick(): void {
        this.gameService.checkAnswer(this.imageName);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
