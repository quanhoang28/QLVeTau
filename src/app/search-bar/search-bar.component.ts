import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  ngOnInit(): void {
    this.LayDanhSachGa();
  }
  constructor(private router: Router,private SharedService:SharedService) {}
  DanhSachGa:any=[];
  DanhSachNgayDi:any=[];
  DanhSachNgayDen:any=[];
  DanhSachLichTrinh:any=[];
  gaDi:any;
  gaDen:any;
 TimVe(){
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
}
