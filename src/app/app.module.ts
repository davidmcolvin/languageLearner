// app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { NotificationComponent } from './notification/notification.component';
import { TimerComponent } from './timer/timer.component';
import { CardComponent } from './cardRow/card/card.component';
import { CardRowComponent } from './cardRow/cardRow.component';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { GameOverComponent } from './gameOver/gameOver.component';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        QuestionComponent,
        ScoreComponent,
        NotificationComponent,
        TimerComponent,
        CardComponent,
        CardRowComponent,
        GameOverComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FontAwesomeModule,
    ],
})
export class AppModule{
    constructor(library: FaIconLibrary){
        library.addIcons(faTrophy);
    }
}
