
import { Component,OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-kiemtra',
  templateUrl: './kiemtrave.component.html',
  styleUrls: ['./kiemtrave.component.css']
})
export class KiemtraveComponent implements OnInit{
 constructor(private router:Router,
            private route: ActivatedRoute ) {
  
 }
  ngOnInit(): void {
    
  }
onktra(){
 this.router.navigate(['ktra'],{ relativeTo:this.route}); 
}

}
