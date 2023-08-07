import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongtindatcho',
  templateUrl: './thongtindatcho.component.html',
  styleUrls: ['./thongtindatcho.component.css']
})
export class ThongtindatchoComponent implements OnInit{
  madv:any;
  cccd:any;
  ttDC:any=[]
  constructor(private SharedService:SharedService){}
  ngOnInit(): void {
    
  }
  getTTDC(){
    this.SharedService.kiemTraThongTinDatCho(this.madv,this.cccd).subscribe(data=>{this.ttDC=data})
  }
}
