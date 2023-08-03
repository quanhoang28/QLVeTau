import { __values } from 'tslib';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="http://localhost:12302/api";
  constructor(private http:HttpClient) { }
  GetTenGa():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetTenGa');
  }
  GetNgayDi(gaDi:any,gaDen:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetNgayDi?gaDi='+gaDi+'&gaDen'+gaDen);
  }
  GetHanhTrinh(ngayDi:any,gaTau:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetHanhTrinh?ngayDi'+ngayDi+'&gaTau='+gaTau);
  }

  GetBangGia():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/GiaVe/getBangGia');
  }
  GetTau():Observable<any[]>{
    return this.http.get<any>("https://localhost:7184/api/Ve/getTau");
  }
  GetToa(idTau:any):Observable<any[]>{
    return this.http.get<any>("https://localhost:7184/api/Ve/getToaTau?idTau="+idTau);
  }
  GetGhe(idToa:any):Observable<any[]>{
    return this.http.get<any>("https://localhost:7184/api/Ve/getGhe?idToa="+idToa)
  }
  GetNgayDen(gaDi:any,gaDen:any):Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetNgayDen?gaDi='+gaDi+'&gaDen'+gaDen);
  }
}
