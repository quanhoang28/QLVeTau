import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DanhSachHanhTrinh:any=[];
  title = 'angular-complete';
}
