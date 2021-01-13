import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(public fb: FormBuilder
   
    ) { }
  
  
  SubTotal:number=0;
  Qty: number = 0;
  ttlTaxAmount:number=0;
  ttlamount:number=0;
  itemform = this.fb.group({
   
    data: this.fb.array([
      this.Itemrows()
    ])
  });
 
  Itemrows() {
    return this.fb.group({     
      Srno: [''],
      ItemName: [''],
      Qty: ['0'],
      Price: ['0'],
      Subtotal: [''],
      Tax: ['0'],
      TaxAmount: [''],
      TotalAmount: ['']
    
    });
    
  }
  get data() {
    return this.itemform.get('data') as FormArray;
  }
  onchange() {    
    this.SubTotal=0;
    this.Qty = 0;   
    this.ttlTaxAmount=0.;
    this.ttlamount=0;
    for (let i = 0; i < this.data.length; i++) {
      this.Qty += parseFloat(this.itemform.value.data[i].Qty);
      this.SubTotal += this.itemform.value.data[i].Subtotal;  
      this.ttlTaxAmount += this.itemform.value.data[i].TaxAmount; 
      this.ttlamount += this.itemform.value.data[i].TotalAmount;    
     
    }
  }
  delete(i: any) {
    this.data.removeAt(i)
    this.onchange();    
  }

  SaveForm(data: any) {
    console.warn(this.itemform.value);
    //  console.warn(data.data[0].ItemName);
   
  }
  Calculate(number: number) {         
    let Qty: any ;
    let Price: any ;
    let Tax:any;
    let TaxAmount :any;
    let TotalAmt:any;
    let result:any;
  //   Qty = parseFloat( (document.getElementById("Qty" + number) as HTMLInputElement).value);
  //   Price = parseFloat( (document.getElementById("Price" + number) as HTMLInputElement).value);
  //   // let result:any=Qty*Price;    
  // //  (document.getElementById("Subtotal" + number) as HTMLInputElement).value =result;
  //   Tax=parseInt( (document.getElementById("Tax" + number) as HTMLInputElement).value);
  //   TaxAmount=result*Tax/100;
  //   (document.getElementById("TaxAmount" + number) as HTMLInputElement).value =TaxAmount;
  //   (document.getElementById("TotalAmount" + number) as HTMLInputElement).value =result+TaxAmount;
  //   // this.data.controls[0].get('Subtotal')?.setValue('fffffffff');
  //   // this.data.controls[1].get('Subtotal')?.setValue('dddddddddddd');      
  //   //let count=1;
    for(var i=0 ;i<this.data.length;i++){
     

        Qty = this.data.controls[i].get(['Qty'])?.value
        Price = this.data.controls[i].get(['Price'])?.value        
        result=Qty*Price      
        this.data.controls[i].get('Subtotal')?.setValue(result);
        Tax=this.data.controls[i].get(['Tax'])?.value;
        TaxAmount=result*Tax/100;
        this.data.controls[i].get('TaxAmount')?.setValue(TaxAmount);
        this.data.controls[i].get('TotalAmount')?.setValue(result+TaxAmount);
        
    }
    
    this.onchange();
    
  }

  adddata() {
    this.data.push(this.Itemrows());
    
  }

  ngOnInit(): void {
  }
}
