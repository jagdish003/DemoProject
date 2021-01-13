import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component'
import { ItemlistComponent } from './itemlist/itemlist.component';
import {SubgroupComponent} from './subgroup/subgroup.component'
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'itemlist',component:ItemlistComponent},
  {path:'subgroup',component:SubgroupComponent},
  {path:'list',component:ListComponent},
  {path:'cart',component:CartComponent},
  {path:'test',component:TestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
