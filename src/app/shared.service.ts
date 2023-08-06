import { __values } from 'tslib';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="https://trainticketapi.azurewebsites.net/api";
  behaviorSubect=new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }
  GetTenGa():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetTenGa');
  }
  GetNgayDi(gaDi:any,gaDen:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetNgayDi?gaDi='+gaDi+'&gaDen='+gaDen);
  }
  GetNgayDen(gaDi:any,gaDen:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetNgayDen?gaDi='+gaDi+'&gaDen='+gaDen);
  }
  GetHanhTrinh(ngayDi:any,gaTau:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetHanhTrinh?ngayDi='+ngayDi+'&gaTau='+gaTau);
  }

  GetBangGia():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/GiaVe/getBangGia');
  }
  GetTau():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/getTau");
  }
  GetToa(idTau:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/Ve/getToaTau?idTau='+idTau);
  }

  GetGhe(idToa:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/getGhe?idToa="+idToa);
  }
  GetHTNgayDen(ngayDi:any,gaDi:any,ngayDen:any,gaDen:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/HanhTrinh/GetHanhTrinhCoNgayDen?ngayDi="+ngayDi+"&gaTau="+gaDi+"&ngayDen="+ngayDen+"&gaDen="+gaDen);
  }
  sendHanhTrinh(hanhTrinh:any){
    this.behaviorSubect.next(hanhTrinh);
  }
  GetGioVe():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/GetGioVe");
  }
  InsertGioVe(val:any){
    return this.http.post<any>(this.APIurl+"/Ve/insertGioVe",val);
  }
  InsertVe(val:any){
    return this.http.post<any>(this.APIurl+"/Ve/insertVe",val);
  }
  InsertDatCho(val:any){
    return this.http.post<any>(this.APIurl+"/Ve/insertDatCho",val);
  }
  InsertKhachHang(val:any){
    return this.http.post<any>(this.APIurl+"/KhachHang/insertKhachHang",val);
  }
  GetKH(CCCD:any,sdt:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/GetKhachHang?cccd="+CCCD+"&sdt="+sdt)
  }
  GetLoaiGhe(toaTau:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/GetLoaiGhe?maToa="+toaTau)
  }
  GetDoanTau(maTau:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/getDoanTau?maTau="+maTau)
  }
  GetThongTinDoanTau(maDoanTau:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/GetThongTinDoanTau?maDoanTau="+maDoanTau)
  }
  xoaGioVe(idGioVe:any){
    return this.http.delete(this.APIurl+"/Ve/deleteGioVe?maGioVe="+idGioVe)
  }
  GetVoucher(idVoucher:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/GetVoucher?maVoucher="+idVoucher)
  }
  GetTongTien():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/GetTongTien")
  }
}
