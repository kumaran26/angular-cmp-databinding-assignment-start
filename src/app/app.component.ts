import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddCount: number[] = [];
  evenCount: number[] = [];

  calculateGameStatus(gameStatus: number){
    if(gameStatus%2 === 0){
      this.evenCount.push(gameStatus);
    } else {
      this.oddCount.push(gameStatus);
    }
  }

}
