import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  constructor(private router: Router,private SharedService:SharedService) {}
  DanhSachGa:any=[];
  DanhSachNgayDi:any=[];
  DanhSachNgayDen:any=[];
  DanhSachLichTrinh:any=[];
  DanhSachHanhTrinh:any=[];
  gaDi:any;
  gaDen:any;
  NgayDi:any;
  NgayDen:any;
  ngOnInit(): void {
    this.LayDanhSachGa();
  }
 
 TimVe(){
  this.SharedService.sendHanhTrinh(this.DanhSachLichTrinh)
  alert(this.gaDi+this.gaDen+this.NgayDi+this.NgayDen + this.DanhSachLichTrinh)
   this.router.navigateByUrl('/timve')
 }
 LayDanhSachGa(){
  this.SharedService.GetTenGa().subscribe(data=>{this.DanhSachGa=data})
 }
 LayNgayKhoiHanh(){
  this.SharedService.GetNgayDi(this.gaDi,this.gaDen).subscribe(data=>{this.DanhSachNgayDi=data})

 }
 LayNgayDen(){
  this.SharedService.GetNgayDen(this.gaDi,this.gaDen).subscribe(data=>{this.DanhSachNgayDen=data})
 }
 LayLichTrinh(){
  this.SharedService.GetHTNgayDen(this.NgayDi,this.gaDi,this.NgayDen,this.gaDen).subscribe(data=>{this.DanhSachLichTrinh=data})
 }
}
