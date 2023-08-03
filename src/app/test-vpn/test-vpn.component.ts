import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-vpn',
  templateUrl: './test-vpn.component.html',
  styleUrls: ['./test-vpn.component.css']
})
export class TestVPNComponent implements OnInit{
  ngOnInit(): void {
    this.taiLaiDanhSachTau();
  }
  constructor(private SharedService:SharedService) {  }
  DSTau:any=[];
  DSToa:any=[];
  DSGhe:any=[];
  taiLaiDanhSachTau(){
    this.SharedService.GetTau().subscribe(data=>{this.DSTau=data})
  }
  TauSelected(tau:any){
    this.SharedService.GetToa(tau).subscribe(data=>{this.DSToa=data})
   
      const gheItem=document.getElementsByClassName("gheItem") as HTMLCollectionOf<HTMLDivElement>;
      for(let i=0;i<gheItem.length;i++){
        gheItem[i].style.visibility="hidden"
      }
    
  }
  ToaSelected(toa:any){
    this.SharedService.GetGhe(toa).subscribe(data=>{this.DSGhe=data})
  }
}
