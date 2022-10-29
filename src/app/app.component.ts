import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primo test completo';
  isBtnInactive = false;
  onBtnClick() {
    alert('mi hai cliccato!');
  }
  onInputInsert(e: Event) {
    const res = document.querySelector('#res');
    res.innerHTML = (<HTMLInputElement>e.target).value;
  }
}
