import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
key="";
number=1;
Data:any=[];
Cart:any=[];
  constructor(private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.key = params.data
      
     this.Data=JSON.parse(localStorage.getItem(this.key)|| 'Error')
     this.Cart=JSON.parse(localStorage.getItem("Cart")||'Error')
     
    });

  }
add(){
  this.number=this.number+1;
}
minus(){
  if(this.number > 1){
  this.number=this.number-1;
  }
}

addtocart(){

  
  let dd=
   {
     Productname:this.Data.ProductName,
     ProductPrice:this.Data.Price,
     Qty:this.number,
     id:this.Data.id
   }
  
  
  this.Cart.push(dd);
  
  localStorage.setItem("Cart",JSON.stringify(this.Cart))
}
  ngOnInit(): void {
    
  }

}
