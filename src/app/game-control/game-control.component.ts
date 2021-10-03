import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {

    @Output('gameStatus') statusEvent: EventEmitter<any> = new EventEmitter();

    count = 1;
    ref;

    startGame(){
        this.ref = setInterval(() => {
            this.statusEvent.emit(this.count);
            this.count = this.count + 1;
        }, 1000);
    }

    stopGame(){
        clearInterval(this.ref);
    }

}