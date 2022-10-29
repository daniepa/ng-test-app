import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  constructor() { }

  lorem: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas a magni placeat ducimus
    minima vel, labore libero itaque quae provident suscipit. Expedita eligendi animi omnis. Consequatur
    velit ad neque quaerat!`;

  num1 : number = 5;
  num2 : number = 10;

  persone = [
    { id: 1001, nome:'Walter', cognome: 'White' },
    { id: 1002, nome:'Jesse', cognome: 'Pinkman' },
    { id: 1003, nome:'Luca', cognome: 'Giurato' },
    { id: 1004, nome:'Mario', cognome: 'Rossi' }
  ];

  ngOnInit() {
  }

}
