import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muave',
  templateUrl: './muave.component.html',
  styleUrls: ['./muave.component.css']
})
export class MuaveComponent implements OnInit{
ngOnInit(): void {
  this.getGioVe();
  this.getTongTien()
}
  constructor(private SharedService:SharedService){}
  DSGioVe:any=[];
  maGiamGia:any;
  voucher:any=[];
  sum:any = 0;
  DSthanhTien:any = 0;
  voucherUsed:boolean=false;
  elseblock:any
  ThanhTien:any=[];
  tongTien:any;
  DSGioDelete:any=[];
  //KhachHang
  tenkh:any;
  cccd:any;
  dskhachHang:any=[];
  sdt:any;
  idkh:any;
  valid:boolean=true;
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
  checkDatVe(){
    if(this.sdt==null){
      this.valid=false
      alert("vui long nhap sdt")
    }
    if(this.tenkh==null){
      this.valid=false
      alert("vui long nhap ten kh")
    }
    if(this.cccd==null){
      this.valid=false
      alert("Vui long nhap cccd")
    }
  }
  datVe(){
    this.SharedService.GetKH(this.cccd,this.sdt).subscribe(data=>{this.dskhachHang=data

    if(this.dskhachHang.length==0){
      this.idkh=this.generateRandomCode(5)
      var val={
        maKhachHang: this.idkh,
        tenKhachHang: this.tenkh,
        email: "",
        soDienThoai: this.sdt,
        cccd: this.cccd,
        diaChi:""
      };
      this.SharedService.InsertKhachHang(val).subscribe(res=>{alert(res.toString())});
      this.SharedService.GetKH(this.cccd,this.sdt).subscribe(data=>{this.dskhachHang=data
      this.DSGioVe.array.forEach((element:any) => {
        var val1={
          maDatCho: this.generateRandomCode(9),
          idKH: this.idkh,
          idGioVe: element.MaGiove,
          trangThaI: "",
        };
        this.SharedService.InsertDatCho(val1).subscribe(res=>{alert(res.toString())});
      });
    })
    }
    this.DSGioVe.forEach((element:any) => {
      var val1={
        maDatCho: this.generateRandomCode(9),
        idKH: this.dskhachHang[0].IDkhachhang,
        idGioVe: element.MaGiove,
        trangThaI: "",
      };
      this.SharedService.InsertDatCho(val1).subscribe(res=>{alert(res.toString())});
    });
  })
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
  
  deleteBtnOnClick(){
    for(let i=0;i<this.DSGioDelete.length;i++){
      this.SharedService.xoaGioVe(this.DSGioDelete[i]).subscribe(data=>alert(data.toString()))
    }
    this.getGioVe();
    this.DSGioDelete=[]
  }
  getGioVe(){
    this.SharedService.GetGioVe().subscribe(data=>{this.DSGioVe=data})
  }
  getVoucher(){
      this.usevouncher()

  }
  usevouncher(){
    this.SharedService.GetVoucher(this.maGiamGia).subscribe(data=>{this.voucher=data})
    if(this.voucher.length >=1){
      this.voucherUsed=true;
    }

  }
  getTongTien(){
    this.SharedService.GetTongTien().subscribe(data=>{this.tongTien=data})
  }
}
