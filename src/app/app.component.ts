import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Primo test completo';
  isBtnInactive : boolean = false;
  favLanguage: string = 'JavaScript';
  passaggioParChi = 'io sono una stringa dentro app.component.ts';

  onBtnClick() {
    alert('mi hai cliccato!');
  }
  onInputInsert(e: Event) {
    const res = document.querySelector('#res');
    res.innerHTML = (<HTMLInputElement>e.target).value;
  }
  cambiaInteresse() {
    this.favLanguage = 'TypeScript';
  }
  onCambia() {
    this.passaggioParChi = 'stringa cambiata!';
  }
}
