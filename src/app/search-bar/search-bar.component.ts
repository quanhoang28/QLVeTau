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
  isValid:any;
  ngOnInit(): void {
    this.LayDanhSachGa();
  }
  checkSearch(){
    
    if(this.gaDi==null){
      alert("Vui lòng nhập ga đi")
      this.isValid=false;
      return;
    }
    if(this.gaDen==null){
      alert("Vui lòng nhập ga đến")
      this.isValid=false;
      return;
    }
    if(this.NgayDi==null){
      alert("Vui lòng nhập thời gian đi")
      this.isValid=false;
      return;
    }
    if(this.NgayDen==null){
      alert("Vui lòng nhập tàu")
      this.isValid=false;
      return;
    }
    if(this.gaDi==this.gaDen){
      alert("Ga đi phải khác ga đến")
      this.isValid=false;
      return;
    }
    this.isValid=true;
  }
 TimVe(){
  this.checkSearch()
  if(this.isValid){
    this.SharedService.sendHanhTrinh(this.DanhSachLichTrinh)
    if(this.DanhSachLichTrinh.length>0){
      this.router.navigateByUrl('/timve')
    }
    else{
      alert("Không có tàu cho chuyến đi này")
    }
  }
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
