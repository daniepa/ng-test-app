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

  ngOnInit() {
  }

}
