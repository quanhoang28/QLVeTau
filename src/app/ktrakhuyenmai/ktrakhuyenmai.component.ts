import { Component } from '@angular/core';

@Component({
  selector: 'app-ktrakhuyenmai',
  templateUrl: './ktrakhuyenmai.component.html',
  styleUrls: ['./ktrakhuyenmai.component.css']
})
export class KtrakhuyenmaiComponent {
  keyword: string = '';
  promoCodes: any[] = [
    { id: 'SUMMER25', dieukien: 'khách hàng là sinh viên hoặc là trẻ e dưới 7 tuổi' ,time:'12/2/2023-14/3/2023',giatri:25},
    { id: 'WELCOME10', đieukien: 'khách hàng mới lần đầu sử dụng',time:'12/2/2023-14/3/2023',giatri:10 },
    { id: 'SALE50', dđieukien: 'sử dụng tài khoản ngân hàng',time:'12/2/2023-14/3/2023',giatri:5 },
    
  ];
  searchResults: any[] = []
  searchPromoCode() {
    this.searchResults = this.promoCodes.filter((promoCode: any) => {
      return promoCode.id.toLowerCase().includes(this.keyword.toLowerCase());
    });
  }
}
