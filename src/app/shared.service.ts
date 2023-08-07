import { __values } from 'tslib';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="https://trainticketapi.azurewebsites.net/api";
  readonly APIurl2="https://trainapi2.azurewebsites.net/api";
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
  capNhatTrangThaiGio(val:any){
    return this.http.put<any>(this.APIurl+"/Ve/updateGioVe",val)
  }
  getAllGioVe():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/Ve/getAllGioVe")
  }
  //------------------------------------------------------------
  getCTHanhTrinh():Observable<any[]>{
    return this.http.get<any>(this.APIurl2+"/CT_HanhTrinh")
  }
  getDatcho():Observable<any[]>{
    return this.http.get<any>(this.APIurl2+"/DatCho")
  }
  getDatchoId(id:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl2+"/DatCho/"+id)
  }
  postDatCho(val:any){
    return this.http.post<any>(this.APIurl2+"/DatCho",val)
  }
  putDatCho(id:any,val:any){
    return this.http.put(this.APIurl2+"/DatCho/"+id,val)
  }
  deleteDatCho(id:any){
    return this.http.delete(this.APIurl2+"/DatCho/"+id)
  }
  kiemTraVe(maVe:any,cccd:any):Observable<any>{
    return this.http.get<any>(this.APIurl2+"/KiemTraVe?maVe="+maVe+"&cccd="+cccd)
  }
  kiemTraThongTinDatCho(maDatCho:any,cccd:any):Observable<any>{
    return this.http.get<any>(this.APIurl2+"/KiemTraThongTinDatCho?maDatCho="+maDatCho+"&cccd="+cccd)
  }
  kiemTraHoaDon(mahd:any):Observable<any>{
    return this.http.get<any>(this.APIurl2+"/KtraHoaDon/"+mahd)
  }
  getVe():Observable<any[]>{
    return this.http.get<any>(this.APIurl2+"/Ve")
  }
  getVeID(id:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl2+"/Ve/"+id)
  }
  postVe(val:any){
    return this.http.post<any>(this.APIurl2+"/Ve",val)
  }
  putVe(id:any,val:any){
    return this.http.put(this.APIurl2+"/Ve/"+id,val)
  }
  deleteVe(id:any){
    return this.http.delete(this.APIurl2+"/Ve/"+id)
  }
  
}
