import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message: string;
  vegetables: Array<any>;
  favActor: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Hello World';
    this.vegetables = [
      {name: 'Tomato', price: 40},
      {name: 'Brinjal', price: 25},
      {name: 'Bottle Gourd', price: 30},
      {name: 'Carrot', price: 80},
      {name: 'Potato', price: 25}
    ];
    this.favActor = '';
  }

  btnClicked(event) {
    alert('OUCH!! That hurt...\nPlease be gentle!!');
    console.log(event);
  }

  deleteVeg(index) {
    this.vegetables.splice(index, 1);
  }
}
