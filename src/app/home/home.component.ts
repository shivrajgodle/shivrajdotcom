import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,private router: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  reload(){
    window.location.reload();
  } 
  know(){

    console.log("hello");
    
    this.router.navigateByUrl('/knowmore')

  }
}
