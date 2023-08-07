import { SharedService } from './../shared.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-timve',
  templateUrl: './timve.component.html',
  styleUrls: ['./timve.component.css'],

})
export class TimveComponent implements OnInit{
  ngOnInit(): void {
    this.taiLaiDanhSachTau();
    this.getLichTrinh();
    this.getGioVe();
    this.getDoanTau();
    this.getAllGioVe();
  }
  constructor(private SharedService:SharedService,private Router:Router, private ChangeDetectorRef:ChangeDetectorRef) {  }
  DSTau:any=[];
  DSToa:any=[];
  DSGhe:any=[];
  DSGioVe:any=[];
  DSDoanTau:any=[];
  DSLoaiCho:any=[];
  DSTTDoanTau:any=[];
  IDLoaiCho:any;
  HanhTrinh:any;
  IDLichTrinh:any;
  IDDoanTau:any;
  GiaGhe:any;
  SoGhe:any;
  maGioVe:any;
  idGhe:any;
  maTau:any;
  DSGioDelete:any=[];
  allGioVe:any=[];
   checkedTest(gio:any){
    var list:string = " "
    if (this.DSGioDelete.includes(gio)) {
      // Giá trị đã tồn tại, xóa khỏi mảng
      const index = this.DSGioDelete.indexOf(gio);
      this.DSGioDelete.splice(index, 1);
    } else {
      // Giá trị không tồn tại, thêm vào mảng
      this.DSGioDelete.push(gio);
    }
      for(let i=0;i<this.DSGioDelete.length;i++){
        list+= ""+ this.DSGioDelete[i]
      }
      alert(list)
  }
  getAllGioVe(){
    this.SharedService.getAllGioVe().subscribe(data=>{this.allGioVe=data})
  }
  taiLaiDanhSachTau(){
    this.SharedService.GetTau().subscribe(data=>{this.DSTau=data})
  }
  deleteBtnOnClick(){
    for(let i=0;i<this.DSGioDelete.length;i++){
      this.SharedService.xoaGioVe(this.DSGioDelete[i]).subscribe(data=>alert("xoa gio"))
    }
    this.getGioVe();
    this.DSGioDelete=[]
    this.ChangeDetectorRef.detectChanges()
  }
  getDoanTau(){
    this.SharedService.GetToa(this.maTau).subscribe(data=>{this.DSToa=data})
    this.SharedService.GetDoanTau(this.maTau).subscribe(data=>{this.DSDoanTau=data})
    const gheItem=document.getElementsByClassName("gheItem") as HTMLCollectionOf<HTMLDivElement>;
    for(let i=0;i<gheItem.length;i++){
      gheItem[i].style.visibility="hidden"
    }
  
    this.IDDoanTau=this.DSDoanTau[0].MaDoanTau}
  TauSelected(tau:any,lichtrinh:any){
    this.IDLichTrinh=lichtrinh
    this.maTau=tau
    this.getDoanTau()
    alert(this.IDLichTrinh+this.DSDoanTau[0].MaDoanTau)
  }
  ToaSelected(toa:any){
    this.SharedService.GetGhe(toa).subscribe(data=>{this.DSGhe=data})
    this.SharedService.GetLoaiGhe(toa).subscribe(data=>{this.DSLoaiCho=data})
    this.GiaGhe=this.DSLoaiCho[0].GiaTien
    //GetGiaGhe
   
    alert(this.GiaGhe)
  }
  isMatched(soGhe:any):boolean{
    return this.allGioVe.some((ghe:any) => ghe.SoGhe === soGhe);
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
    this.insertGioVe();
    this.getGioVe();
    this.getTTDoan();
    this.ChangeDetectorRef.detectChanges()
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
      this.SharedService.InsertGioVe(val).subscribe(res=>{alert("Đã thêm vé vào giỏ")});
      
    }
   
    muaVe(){
      this.Router.navigateByUrl('/muave')
    }
    getTTDoan(){
      this.SharedService.GetThongTinDoanTau(this.IDDoanTau).subscribe(data=>{this.DSTTDoanTau=data})
    }  
   
  }
  
