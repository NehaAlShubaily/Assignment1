import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  name ='neha';


  displayval:string='';

  getValue(val:string)
  {
  
  this.displayval = val;
  }

  //routing
  constructor(private router:Router){}
  navigate(){
this.router.navigateByUrl('/student');
  }



}
