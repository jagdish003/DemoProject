import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  islogin:boolean =false;


  RedmiNote8 ={

    ProductName:'RedmiNote8',
    id:1,
    Price:10000,
    Image:"assets/image/sub/el1.png"
  }
  Samsung10= {
    ProductName:'Samsung10',
    id:2,
    Price:12000,

    Image:"assets/image/Electronic/el1/1.jpeg"
  }
  Nokia52={
    ProductName:'Nokia52',
    id:2,
    Price:12000,
    Image:"assets/image/nokia1.jpg"
  }
Electornic=[
  {
    ProductName:'RedmiNote8',
    id:1,
    Price:10000,
    Image:"assets/image/sub/el1.png"
},
{
  ProductName:'Samsung10',
  id:2,
  Price:12000,
  Image:"assets/image/Electronic/el1/1.jpeg"
},
{
  ProductName:'Nokia52',
  id:3,
  Price:12000,
  Image:"assets/image/nokia1.jpg"
},
]

  
  
  constructor() {  }

  ngOnInit(): void {
   localStorage.setItem("RedmiNote8", JSON.stringify( this.RedmiNote8))
   localStorage.setItem("Samsung10", JSON.stringify( this.Samsung10))
   localStorage.setItem("Nokia52", JSON.stringify( this.Nokia52))
   localStorage.setItem("Electornic", JSON.stringify( this.Electornic))
  }


  
 
}
