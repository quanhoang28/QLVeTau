import { MuaveComponent } from './muave/muave.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GioTauGiaVeComponent } from './gio-tau-gia-ve/gio-tau-gia-ve.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { RouterModule,Routes } from '@angular/router';
import { KiemtraveComponent } from './kiemtrave/kiemtrave.component';
import { HoanveComponent } from './kiemtrave/hoanve/hoanve.component';
import { KtrakhuyenmaiComponent } from './ktrakhuyenmai/ktrakhuyenmai.component';
import { ThongtindatchoComponent } from './thongtindatcho/thongtindatcho.component';
import { TimveComponent } from './timve/timve.component';
import { HomeComponent } from './home/home.component';
import { QuydinhComponent } from './quydinh/quydinh.component';
import { HuongdanComponent } from './huongdan/huongdan.component';

const routes: Routes = [
  {path:'',redirectTo:'\home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'LienHe',component:LienHeComponent},
  {path:'GioTau_GiaVe',component:GioTauGiaVeComponent},
  {path:'kiemtrave',component:KiemtraveComponent,children:[
    {path:'hoanve',component:HoanveComponent},
    {path:'doichuyen',component:HoanveComponent}]},
  {path:'khuyenmai',component:KtrakhuyenmaiComponent}  ,
  {path:'ttdc',component:ThongtindatchoComponent},
  {path:'timve',component:TimveComponent},
  {path:'quydinh',component:QuydinhComponent},
  {path:'huongdan',component:HuongdanComponent},
  {path:'muave',component:MuaveComponent}
  
    
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
