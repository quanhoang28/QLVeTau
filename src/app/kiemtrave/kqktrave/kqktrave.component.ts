import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-kqktrave',
  templateUrl: './kqktrave.component.html',
  styleUrls: ['./kqktrave.component.css']
})
export class KqktraveComponent {
  constructor(private router:Router,
    private route: ActivatedRoute ) {

}
onChuyenve(){
  this.router.navigate(['doichuyen'],{relativeTo:this.route});
  }
  onHoanve(){
  this.router.navigate(['hoanve'],{relativeTo:this.route});
  }
}
