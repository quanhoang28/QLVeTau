import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-vpn',
  templateUrl: './test-vpn.component.html',
  styleUrls: ['./test-vpn.component.css']
})
export class TestVPNComponent implements OnInit{
  ngOnInit(): void {
    this.taiLaiDanhSachTau();
    this.getLichTrinh();
    this.getGioVe();
  }
  constructor(private SharedService:SharedService) {  }
  DSTau:any=[];
  DSToa:any=[];
  DSGhe:any=[];
  DSGioVe:any=[];
  DSDoanTau:any=[];
  DSLoaiCho:any=[];
  IDLoaiCho:any;
  HanhTrinh:any;
  IDLichTrinh:any;
  IDDoanTau:any;
  GiaGhe:any;
  SoGhe:any;
  maGioVe:any;
  idGhe:any;
  maTau:any;
  taiLaiDanhSachTau(){
    this.SharedService.GetTau().subscribe(data=>{this.DSTau=data})
  }
  TauSelected(tau:any,lichtrinh:any){
    this.SharedService.GetToa(tau).subscribe(data=>{this.DSToa=data})
    this.SharedService.GetDoanTau(tau).subscribe(data=>{this.DSDoanTau=data})
    const gheItem=document.getElementsByClassName("gheItem") as HTMLCollectionOf<HTMLDivElement>;
    for(let i=0;i<gheItem.length;i++){
      gheItem[i].style.visibility="hidden"
    }
    //getIDLichtrinh
    this.IDLichTrinh=lichtrinh
    //getIDDoangTau
    this.IDDoanTau=this.DSDoanTau[0].MaDoanTau
  }
  ToaSelected(toa:any){
    this.SharedService.GetGhe(toa).subscribe(data=>{this.DSGhe=data})
    this.SharedService.GetLoaiGhe(toa).subscribe(data=>{this.DSLoaiCho=data})
    this.GiaGhe=this.DSLoaiCho[0].GiaTien
    alert(this.IDLichTrinh+this.IDDoanTau)
    //GetGiaGhe
  }
  getLichTrinh(){
    this.SharedService.behaviorSubect.subscribe(data=>{this.HanhTrinh=data})
  }
  generateRandomCode(length: number): string {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      code += characters.charAt(randomIndex);
    }
  
    return code;
  }
  getGioVe(){
     this.SharedService.GetGioVe().subscribe(data=>{this.DSGioVe=data})
  }
  gheSelected(soGhe:any){
    this.SoGhe=soGhe;
    //insert into GioVe()
    // this.getGioVe();
    this.insertGioVe();
    this.getGioVe()
  }
  insertGioVe(){
    var val={
        maGioVe: this.generateRandomCode(9),
        idLichTrinh: "KH001",
        trangThai: 0,
        idLoaiVe: "VE001",
        idDoanTau: this.IDDoanTau,
        viTri: "",
        soGhe: this.SoGhe,
        giaTien: this.GiaGhe
      };
      this.SharedService.InsertGioVe(val).subscribe(res=>{alert(res.toString())});
      
    }
    
  }

1