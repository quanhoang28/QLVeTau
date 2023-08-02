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
}
