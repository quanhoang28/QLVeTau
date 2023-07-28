import { __values } from 'tslib';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl="https://localhost:7184/api";
  constructor(private http:HttpClient) { }
  GetTenGa():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/HanhTrinh/GetTenGa');
  }
  GetNgayDi(val:any):Observable<any[]>{
    return this.http.get<any>("https://localhost:7184/api/HanhTrinh/GetNgayDi?gaDi="+val);
  }
  GetHanhTrinh(val:any):Observable<any[]>{
    return this.http.get<any>("https://localhost:7184/api/HanhTrinh/GetHanhTrinh?ngayDi="+val);
  }

  GetBangGia():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/GiaVe/getBangGia');
  }
}
