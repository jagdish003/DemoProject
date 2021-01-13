import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.css']
})
export class SubgroupComponent implements OnInit {
  key: string = "";
  constructor(private route: ActivatedRoute) {

  }
  Data :any= [];
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.key = params.key
    
      this.Data = JSON.parse(localStorage.getItem(this.key) || 'Error');
   
    });
  }

}
