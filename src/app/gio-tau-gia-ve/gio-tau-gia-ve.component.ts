import { SharedService } from './../shared.service';
import { Component,OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-gio-tau-gia-ve',
  templateUrl: './gio-tau-gia-ve.component.html',
  styleUrls: ['./gio-tau-gia-ve.component.css']
})
export class GioTauGiaVeComponent implements OnInit{
  GaTauDi:any;
  GaTauDen:any;
  NgayDi:any;
  Tau:any;
  isValid:any;
  constructor(private SharedService:SharedService){}
  DSGiaVe:any=[];
  DSHanhTrinh:any=[];
  DSGaTau:any=[];
  DSNgayDi:any=[];
  DSTau:any=[];
  ngOnInit(): void {
    this.taiLaiGaTau();
    this.taiLaiDanhSachNgayDi();
    this.taiLaiHanhTrinh();
  }
  taiLaiHanhTrinh(){
    this.SharedService.GetHanhTrinh(this.NgayDi,this.GaTauDi).subscribe(data=>{this.DSHanhTrinh=data;})
    this.SharedService.GetBangGia().subscribe(data=>{this.DSGiaVe=data;})

  }
  getTenGaByMaGa(maGa: string, DSGaTau: any[]): string {
    const ga = DSGaTau.find(ga => ga.idGaTau === maGa);
    return ga ? ga.tengatau : '';
  }
  
  checkSearch(){
    
    if(this.GaTauDi==null){
      alert("Vui lòng nhập ga đi")
      this.isValid=false;
      return;
    }
    if(this.GaTauDen==null){
      alert("Vui lòng nhập ga đến")
      this.isValid=false;
      return;
    }
    if(this.NgayDi==null){
      alert("Vui lòng nhập thời gian đi")
      this.isValid=false;
      return;
    }
    if(this.Tau==null){
      alert("Vui lòng nhập tàu")
      this.isValid=false;
      return;
    }
    if(this.GaTauDi==this.GaTauDen){
      alert("Ga đi phải khác ga đến")
      this.isValid=false;
      return;
    }
    this.isValid=true;
  }
  btnSearchClick(){
    this.checkSearch();
    
    if(this.isValid){
      this.taiLaiHanhTrinh();
      this.setVisible();
    }
    
  }
  hidden(){
    const table1=document.getElementById("tbHanhTrinh") as HTMLTableElement;
    const table2=document.getElementById("tbBangGia") as HTMLTableElement;
    table1.style.visibility="hidden";
    table2.style.visibility="hidden";
  }
  setVisible(){
    const table1=document.getElementById("tbHanhTrinh") as HTMLTableElement;
    const table2=document.getElementById("tbBangGia") as HTMLTableElement;
    table1.style.visibility="visible";
    table2.style.visibility="visible";
  }
  taiLaiGaTau(){
    this.SharedService.GetTenGa().subscribe(data=>{this.DSGaTau=data})
  }
  taiLaiDanhSachNgayDi(){
    this.SharedService.GetNgayDi(this.GaTauDi,this.GaTauDen).subscribe(data=>{this.DSNgayDi=data})
  }
}
