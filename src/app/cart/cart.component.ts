import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  data: any = [];
  Price: any=0;
  Qty: any = 0;
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem("Cart") || "Your Cart Is Empty")
    

    for (let i = 0; i < this.data.length; i++) {
      this.Price += this.data[i].ProductPrice;    
      this.Qty += this.data[i].Qty;
    }
  }

}
